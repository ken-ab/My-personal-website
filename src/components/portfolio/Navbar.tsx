import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Publications", href: "/publications" },
  { label: "Internship & Awards", href: "/internship-awards" },
  { label: "Development Projects", href: "/development-projects" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <Link aria-label="Ken Zhang home" className="brand-mark" to="/">
          <span className="brand-icon">K</span>
          <span>Ken Zhang</span>
        </Link>

        <div className="nav-center">
          {navItems.map((item) => (
            <NavLink className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")} key={item.href} to={item.href}>
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
