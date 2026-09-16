import { GRADE_LEVELS } from '../../data/catalog';
import FilterGroup from './FilterGroup';
import OptionList from './OptionList';
import PriceRange from './PriceRange';
import Toggle from './Toggle';

/** Used in the desktop sidebar and the mobile drawer. Receives the useProductFilters API. */
export default function FilterPanel({ filters, options, update, toggleListValue }) {
  const checkboxGroups = [
    { key: 'set', title: 'Set', items: options.sets },
    { key: 'condition', title: 'Condition', items: options.conditions },
    { key: 'grader', title: 'Grading company', items: options.graders },
  ];

  return (
    <div className="divide-y divide-line">
      <FilterGroup title="Availability">
        <Toggle label="In stock only" checked={filters.inStock} onChange={(value) => update('inStock', value)} />
        <Toggle label="New this week" checked={filters.isNew} onChange={(value) => update('isNew', value)} />
      </FilterGroup>

      <FilterGroup title="Price">
        <PriceRange values={filters} onChange={update} />
      </FilterGroup>

      {checkboxGroups
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <FilterGroup key={group.key} title={group.title}>
            <OptionList
              options={group.items}
              isChecked={(value) => filters[group.key].includes(value)}
              onSelect={(value) => toggleListValue(group.key, value)}
            />
          </FilterGroup>
        ))}

      {options.graders.length > 0 && (
        <FilterGroup title="Grade">
          <OptionList
            type="radio"
            name="minGrade"
            options={GRADE_LEVELS}
            isChecked={(value) => String(value) === String(filters.minGrade ?? '')}
            onSelect={(value) => update('minGrade', value)}
          />
        </FilterGroup>
      )}
    </div>
  );
}
