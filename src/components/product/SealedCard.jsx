import { formatPrice } from '../../utils/product';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import StockStatus from './StockStatus';

/** Horizontal card for boxes, bundles and preorders. */
export default function SealedCard({ product }) {
  return (
    <Card as="article" className="flex gap-5 p-5 transition-shadow hover:shadow-xl hover:shadow-black/10">
      <ImagePlaceholder aspect="aspect-square" className="w-24 shrink-0 self-start sm:w-28" label={`${product.name} photo`} />
      <div className="flex min-w-0 flex-col">
        <h3 className="font-bold leading-snug">{product.name}</h3>
        <StockStatus product={product} className="mt-2" />
        {product.note && <p className="mt-2 text-xs leading-relaxed text-muted">{product.note}</p>}
        <p className="mt-auto pt-3 text-lg font-semibold">{formatPrice(product.price)}</p>
      </div>
    </Card>
  );
}
