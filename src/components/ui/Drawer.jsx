import { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { CloseIcon } from './Icons';

export default function Drawer({ open, onClose, title, footer, className, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label={title} className={cn('fixed inset-0 z-50', className)}>
      <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col rounded-l-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="text-lg font-bold">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-lg p-1 hover:bg-surface">
            <CloseIcon />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6">{children}</div>
        {footer && <div className="border-t border-line px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
}
