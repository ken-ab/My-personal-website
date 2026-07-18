import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getCaseStudy } from "../../data/caseStudies";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

const navItems = [
  { en: "Home", zh: "首页", href: "/", end: true },
  { en: "Research", zh: "研究项目", href: "/research" },
  { en: "Engineering", zh: "工程项目", href: "/engineering" },
  { en: "Experience", zh: "经历", href: "/experience" },
];

export function Navbar() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const briefId = pathname.startsWith("/brief/") ? pathname.split("/")[2] : undefined;
  const briefStudy = getCaseStudy(briefId);
  const activeSection = briefId === "routerbench-mini" || briefStudy?.kind === "publication"
    ? "/research"
    : briefStudy?.kind === "competition-project"
      ? "/experience"
      : briefStudy
        ? "/engineering"
        : pathname;

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <Link aria-label="Ken Zhang home" className="brand-mark" to="/">
          <span className="brand-icon">K</span>
          <span>{bilingual(language, "Ken Zhang", "张桢铠")}</span>
        </Link>

        <div className="nav-center">
          {navItems.map((item) => {
            const isActive = item.end ? activeSection === item.href : activeSection.startsWith(item.href);
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "nav-link is-active" : "nav-link"}
                key={item.href}
                to={item.href}
              >
                {bilingual(language, item.en, item.zh)}
              </Link>
            );
          })}
        </div>

        <div className="nav-actions">
          <Link className="contact-pill" to="/contact">
            <span>{bilingual(language, "Get in touch", "联系我")}</span>
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.9} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
