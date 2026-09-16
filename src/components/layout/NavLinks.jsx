import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/site";
import { cn } from "../../utils/cn";

const linkClass = ({ isActive }) =>
  cn(
    "rounded-full px-2 py-2 font-heading text-sm font-medium transition-colors",
    isActive
      ? "bg-brand-blue text-white hover:bg-brand-blue-dark"
      : "bg-white text-black hover:bg-brand-yellow-light",
  );

export default function NavLinks({ className }) {
  return (
    <nav aria-label="Main" className={className}>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={linkClass}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
