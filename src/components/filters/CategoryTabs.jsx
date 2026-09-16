import { CATEGORIES } from '../../data/catalog';
import Chip from '../ui/Chip';

export default function CategoryTabs({ active, counts, onChange }) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0);
  const tabs = [{ id: 'all', label: 'All products' }, ...CATEGORIES];

  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
      <div role="tablist" aria-label="Categories" className="flex gap-2">
        {tabs.map((tab) => (
          <Chip
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            active={active === tab.id}
            count={tab.id === 'all' ? total : counts[tab.id] ?? 0}
            onClick={() => onChange(tab.id)}
            className="px-5 py-2.5 text-sm"
          >
            {tab.label}
          </Chip>
        ))}
      </div>
    </div>
  );
}
