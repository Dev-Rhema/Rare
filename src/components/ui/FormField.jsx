import { cn } from '../../utils/cn';

const CONTROL = 'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15';

/** Renders an input, select or textarea from a single field config. */
export default function FormField({ name, label, type = 'text', required, placeholder, options = [], full, value, error, onChange }) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    value,
    onChange,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: cn(CONTROL, error ? 'border-red-500' : 'border-line'),
  };

  let control;
  if (type === 'textarea') control = <textarea rows={6} placeholder={placeholder} {...shared} />;
  else if (type === 'select')
    control = (
      <select {...shared}>
        <option value="">{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    );
  else control = <input type={type} placeholder={placeholder} {...shared} />;

  return (
    <div className={cn(full && 'sm:col-span-2')}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-blue"> *</span>}
      </label>
      {control}
      {error && <p id={errorId} className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
