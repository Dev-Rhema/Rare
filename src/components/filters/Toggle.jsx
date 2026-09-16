import { useId } from 'react';
import { cn } from '../../utils/cn';

export default function Toggle({ label, checked, onChange }) {
  const id = useId();
  return (
    <div className="flex items-center justify-between gap-3 px-2 py-1.5 text-sm">
      <label htmlFor={id} className="cursor-pointer">{label}</label>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn('relative h-6 w-11 shrink-0 rounded-full transition-colors', checked ? 'bg-brand-blue' : 'bg-line')}
      >
        <span className={cn('absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform', checked && 'translate-x-5')} />
      </button>
    </div>
  );
}
