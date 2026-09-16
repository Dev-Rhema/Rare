/**
 * Checkbox or radio list. One component for both so the row markup lives in one place.
 * isChecked(value) and onSelect(value) decide the behaviour.
 */
export default function OptionList({ type = 'checkbox', name, options, isChecked, onSelect }) {
  return (
    <ul className="max-h-64 space-y-0.5 overflow-y-auto pr-1">
      {options.map((option) => (
        <li key={String(option.value)}>
          <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-sm hover:bg-surface">
            <input
              type={type}
              name={name}
              checked={isChecked(option.value)}
              onChange={() => onSelect(option.value)}
              className="h-4 w-4 accent-brand-blue"
            />
            <span className="flex-1">{option.label}</span>
            {option.count != null && <span className="text-xs text-muted">{option.count}</span>}
          </label>
        </li>
      ))}
    </ul>
  );
}
