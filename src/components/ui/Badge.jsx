import { cn } from '../../utils/cn';

const VARIANTS = {
  outline: 'border border-ink/70 text-ink',
  yellow: 'bg-brand-yellow text-ink',
  blue: 'bg-brand-blue text-white',
  soft: 'bg-surface text-muted',
};

export default function Badge({ variant = 'outline', className, children }) {
  return (
    <span className={cn('inline-flex w-fit items-center whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-semibold', VARIANTS[variant], className)}>
      {children}
    </span>
  );
}
