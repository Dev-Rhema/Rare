import { Link } from 'react-router-dom';
import { FOOTER_BLURB, FOOTER_COLUMNS } from '../../data/site';
import Container from '../ui/Container';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo className="h-14" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{FOOTER_BLURB}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold text-brand-yellow">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-white/75 hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} RARE Trading Cards</p>
          <p>Not affiliated with or endorsed by The Pokémon Company.</p>
        </div>
      </Container>
    </footer>
  );
}
