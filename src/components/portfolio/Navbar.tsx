import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { preloadPublicationImages } from "../../utils/publicationImagePreload";

const navItems = [
  { label: "Publications", href: "/publications" },
  { label: "Internship & Awards", href: "/internship-awards" },
  { label: "Development Projects", href: "/development-projects" },
];

export function Navbar() {
  const warmPublicationRoute = () => {
    void preloadPublicationImages();
  };

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
              onFocus={item.href === "/publications" ? warmPublicationRoute : undefined}
              onPointerEnter={item.href === "/publications" ? warmPublicationRoute : undefined}
              onTouchStart={item.href === "/publications" ? warmPublicationRoute : undefined}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link className="contact-pill" to="/contact">
          <span>Get in touch</span>
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.9} />
        </Link>
      </nav>
    </header>
  );
}
