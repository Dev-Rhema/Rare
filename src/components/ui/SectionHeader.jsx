import { Link } from 'react-router-dom';
import { useTone } from '../../theme/tones';
import { cn } from '../../utils/cn';

export default function SectionHeader({ title, description, linkLabel, linkTo, className }) {
  const tone = useTone();
  return (
    <div className={cn('mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10', className)}>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        {description && <p className={cn('mt-3 text-base', tone.muted)}>{description}</p>}
      </div>
      {linkLabel && linkTo && (
        <Link to={linkTo} className={cn('text-sm font-semibold underline-offset-4 hover:underline', tone.link)}>
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
