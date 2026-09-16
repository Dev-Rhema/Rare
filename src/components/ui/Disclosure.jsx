import { useId, useState } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from './Icons';

/** Collapsible block shared by filter groups and FAQ items. */
export default function Disclosure({ title, defaultOpen = false, className, headerClassName, panelClassName, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn('flex w-full items-center justify-between gap-4 text-left', headerClassName)}
      >
        <span>{title}</span>
        <ChevronDownIcon className={cn('h-4 w-4 shrink-0 transition-transform', open && 'rotate-180')} />
      </button>
      {open && <div id={panelId} className={panelClassName}>{children}</div>}
    </div>
  );
}
