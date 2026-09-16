import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../data/catalog';
import { HERO } from '../../data/site';
import FeaturedCard from '../product/FeaturedCard';
import Chip from '../ui/Chip';
import SearchBar from '../ui/SearchBar';
import Section from '../ui/Section';

export default function Hero() {
  const navigate = useNavigate();
  const featured = PRODUCTS.find((product) => product.featured);

  const handleSearch = (query) => navigate(query ? `/products?q=${encodeURIComponent(query)}` : '/products');

  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="text-5xl font-black leading-[0.92] tracking-tighter text-brand-blue sm:text-7xl lg:text-8xl">
            {HERO.title.map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">{HERO.description}</p>
          <SearchBar className="mt-10 max-w-xl" onSubmit={handleSearch} />
          <div className="mt-5 flex flex-wrap gap-2">
            {HERO.quickLinks.map((link) => <Chip key={link.label} to={link.to}>{link.label}</Chip>)}
          </div>
          <p className="mt-8 max-w-xl border-t border-line pt-5 text-sm text-muted">{HERO.stat}</p>
        </div>

        {/* The shop's own card, tilted on a slab of logo yellow */}
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute -inset-3 rotate-[4deg] rounded-3xl bg-brand-yellow sm:-inset-5" />
          <FeaturedCard product={featured} className="relative" />
        </div>
      </div>
    </Section>
  );
}
