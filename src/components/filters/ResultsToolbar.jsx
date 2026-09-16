import { SORT_OPTIONS } from '../../data/catalog';
import Button from '../ui/Button';
import { CloseIcon, SlidersIcon } from '../ui/Icons';

export default function ResultsToolbar({ count, sort, onSortChange, onOpenFilters, activeFilters, onClearAll }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{count}</span> {count === 1 ? 'result' : 'results'}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="lg:hidden" onClick={onOpenFilters}>
            <SlidersIcon className="h-4 w-4" />
            Filters{activeFilters.length > 0 && ` (${activeFilters.length})`}
          </Button>
          <label className="flex items-center gap-2 text-sm">
            <span className="hidden text-muted sm:inline">Sort by</span>
            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className="rounded-xl border border-line bg-white px-3 py-2 text-sm font-medium outline-none focus:border-brand-blue"
            >
              {SORT_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {activeFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={filter.onRemove}
              aria-label={`Remove filter ${filter.label}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-semibold hover:bg-brand-yellow-light"
            >
              {filter.label}
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          ))}
          <button type="button" onClick={onClearAll} className="px-2 text-xs font-semibold text-brand-blue hover:underline">
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
