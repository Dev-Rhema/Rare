import { Link } from 'react-router-dom';
import { useTone } from '../../theme/tones';
import { cn } from '../../utils/cn';

/** Pill used for quick links, category tabs and grade tabs. Adapts to its section tone. */
export default function Chip({ active = false, to, count, className, children, ...props }) {
  const tone = useTone();
  const classes = cn(
    'inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-colors',
    active ? tone.chipActive : tone.chip,
    className
  );
  const content = (
    <>
      {children}
      {count != null && <span className="opacity-60">{count}</span>}
    </>
  );

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  return <button type="button" className={classes} {...props}>{content}</button>;
}
