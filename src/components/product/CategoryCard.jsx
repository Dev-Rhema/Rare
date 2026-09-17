import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function CategoryCard({ category }) {
  return (
    <Card as={Link} to={`/products?category=${category.id}`} className="group block p-3 transition-shadow hover:shadow-xl hover:shadow-black/10">
      <ImagePlaceholder aspect="aspect-square" label={`${category.label} category`} className="transition-colors group-hover:bg-brand-yellow/40" />
      <div className="px-1 pb-1 pt-3">
        <h3 className="font-bold">{category.label}</h3>
      </div>
    </Card>
  );
}
