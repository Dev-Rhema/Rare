import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../data/site';
import { cn } from '../../utils/cn';

const linkClass = ({ isActive }) =>
  cn(
    'border-b-2 py-1 text-sm font-medium transition-colors',
    isActive ? 'border-brand-yellow text-ink' : 'border-transparent text-muted hover:text-ink'
  );

export default function NavLinks({ className }) {
  return (
    <nav aria-label="Main" className={className}>
      {NAV_LINKS.map((link) => (
        <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
