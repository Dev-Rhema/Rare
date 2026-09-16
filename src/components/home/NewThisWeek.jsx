import { PRODUCTS } from '../../data/catalog';
import ProductGrid from '../product/ProductGrid';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const NEW_PRODUCTS = PRODUCTS.filter((product) => product.isNew && product.category === 'singles').slice(0, 5);

export default function NewThisWeek() {
  return (
    <Section tone="yellow">
      <SectionHeader title="New this week" description="Pulled, photographed and graded in the last seven days." linkLabel="See everything new" linkTo="/products?isNew=1" />
      <ProductGrid products={NEW_PRODUCTS} className="grid-cols-2 md:grid-cols-3 lg:grid-cols-5" />
    </Section>
  );
}
