import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export default function Logo({ className = 'h-10' }) {
  return (
    <Link to="/" aria-label="RARE home" className="inline-flex shrink-0">
      <img src="/logo.png" alt="RARE" className={cn('w-auto', className)} />
    </Link>
  );
}
