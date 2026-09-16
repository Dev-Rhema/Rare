import { PRODUCTS } from '../../data/catalog';
import { SEALED_SPOTLIGHT_IDS } from '../../data/site';
import SealedCard from '../product/SealedCard';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const SPOTLIGHT = SEALED_SPOTLIGHT_IDS.map((id) => PRODUCTS.find((product) => product.id === id)).filter(Boolean);

export default function SealedPreorders() {
  return (
    <Section>
      <SectionHeader title="Sealed and preorders" linkLabel="All sealed product" linkTo="/products?category=sealed" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SPOTLIGHT.map((product) => <SealedCard key={product.id} product={product} />)}
      </div>
    </Section>
  );
}
