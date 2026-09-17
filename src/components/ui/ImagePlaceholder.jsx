import { cn } from '../../utils/cn';

export default function ImagePlaceholder({ aspect = 'aspect-[5/7]', label = 'Photo coming soon', className }) {
  return (
    <div role="img" aria-label={label} className={cn('overflow-hidden rounded-xl bg-gray-300', aspect, className)} />
  );
}
