import { cn } from '../../utils/cn';
import { formatPrice, getCondition, getSubtitle } from '../../utils/product';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';

export default function FeaturedCard({ product, className }) {
  const condition = getCondition(product.condition);

  return (
    <Card className={cn('p-5 shadow-2xl shadow-brand-blue/20', className)}>
      <ImagePlaceholder aspect="aspect-[5/7]" label={`${product.name} photo`} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="mt-0.5 text-sm text-muted">{getSubtitle(product)}</p>
        </div>
        <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
      </div>
      {condition && <Badge variant="yellow" className="mt-3">{condition.label}</Badge>}
      {product.description && <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">{product.description}</p>}
    </Card>
  );
}
