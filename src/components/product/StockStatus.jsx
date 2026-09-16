import { cn } from '../../utils/cn';
import { getStockStatus } from '../../utils/product';
import Badge from '../ui/Badge';

export default function StockStatus({ product, className }) {
  const status = getStockStatus(product);
  if (status.badge) return <Badge variant={status.badge} className={className}>{status.label}</Badge>;
  return <p className={cn('text-xs text-muted', className)}>{status.label}</p>;
}
