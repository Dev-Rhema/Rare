const FIELDS = [
  { key: 'minPrice', label: 'Min' },
  { key: 'maxPrice', label: 'Max' },
];

export default function PriceRange({ values, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-3 px-2">
      {FIELDS.map((field) => (
        <label key={field.key} className="block">
          <span className="mb-1 block text-xs text-muted">{field.label}</span>
          <span className="flex items-center rounded-xl border border-line px-3 focus-within:border-brand-blue">
            <span className="text-sm text-muted">$</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              value={values[field.key] ?? ''}
              onChange={(event) => onChange(field.key, event.target.value)}
              className="w-full bg-transparent py-2 pl-1 text-sm outline-none"
            />
          </span>
        </label>
      ))}
    </div>
  );
}
