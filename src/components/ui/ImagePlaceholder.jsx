import { cn } from '../../utils/cn';

export default function ImagePlaceholder({ aspect = 'aspect-[5/7]', label = 'Photo coming soon', className }) {
  return (
    <div role="img" aria-label={label} className={cn('flex items-center justify-center overflow-hidden rounded-xl bg-surface', aspect, className)}>
      <span className="h-9 w-9 rounded-full border border-ink/15" />
    </div>
  );
}
