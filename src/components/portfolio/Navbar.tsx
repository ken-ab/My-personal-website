import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

const navItems = [
  { en: "Research", zh: "研究项目", href: "/research" },
  { en: "Engineering", zh: "工程项目", href: "/engineering" },
  { en: "Experience", zh: "经历", href: "/experience" },
];

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <Link aria-label="Ken Zhang home" className="brand-mark" to="/">
          <span className="brand-icon">K</span>
          <span>Ken Zhang</span>
        </Link>

        <div className="nav-center">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
              key={item.href}
              to={item.href}
            >
              {bilingual(language, item.en, item.zh)}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button
            aria-label={bilingual(language, "Switch to Chinese", "切换为英文")}
            className="language-toggle"
            onClick={toggleLanguage}
            type="button"
          >
            <span className={language === "zh" ? "is-active" : ""}>中</span>
            <i aria-hidden="true" />
            <span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
          <Link className="contact-pill" to="/contact">
            <span>{bilingual(language, "Get in touch", "联系我")}</span>
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.9} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
