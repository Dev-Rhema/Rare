import { CATEGORIES } from '../../data/catalog';
import CategoryCard from '../product/CategoryCard';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

export default function ShopByCategory() {
  return (
    <Section className="!pt-0">
      <SectionHeader title="Shop by category" linkLabel="All products" linkTo="/products" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {CATEGORIES.map((category) => <CategoryCard key={category.id} category={category} />)}
      </div>
    </Section>
  );
}
