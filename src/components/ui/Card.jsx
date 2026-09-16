import { cn } from '../../utils/cn';

const VARIANTS = {
  white: 'border border-black/5 bg-white text-ink',
  blue: 'bg-brand-blue text-white',
  yellow: 'bg-brand-yellow text-ink',
};

/** Rounded surface used by every card on the site. */
export default function Card({ as: Component = 'div', variant = 'white', className, children, ...props }) {
  return (
    <Component className={cn('rounded-2xl', VARIANTS[variant], className)} {...props}>
      {children}
    </Component>
  );
}
