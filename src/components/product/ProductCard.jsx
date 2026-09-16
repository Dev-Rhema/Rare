import { formatPrice, getGradeLabel, getImageAspect, getSubtitle } from '../../utils/product';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import StockStatus from './StockStatus';

export default function ProductCard({ product }) {
  const gradeLabel = getGradeLabel(product);

  return (
    <Card as="article" className="flex flex-col p-3 transition-shadow hover:shadow-xl hover:shadow-black/10">
      <ImagePlaceholder aspect={getImageAspect(product)} label={`${product.name} photo`} />
      <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{product.name}</h3>
        <p className="mt-0.5 text-xs text-muted">{getSubtitle(product)}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-base font-semibold">{formatPrice(product.price)}</span>
          {gradeLabel && <Badge>{gradeLabel}</Badge>}
        </div>
        <StockStatus product={product} className="mt-2" />
      </div>
    </Card>
  );
}
