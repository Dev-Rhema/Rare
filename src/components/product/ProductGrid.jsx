import { cn } from '../../utils/cn';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, className = 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4' }) {
  return (
    <div className={cn('grid gap-3 sm:gap-5', className)}>
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
