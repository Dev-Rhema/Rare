import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONDITIONS, GRADE_LEVELS, GRADERS, SORT_OPTIONS } from '../data/catalog';
import { countBy } from '../utils/product';

const SEPARATOR = '|';
const LIST_KEYS = ['set', 'condition', 'grader'];
const DEFAULTS = { category: 'all', sort: 'featured' };

const readList = (params, key) => params.get(key)?.split(SEPARATOR).filter(Boolean) ?? [];
const readNumber = (params, key) => {
  const raw = params.get(key);
  return raw === null || raw === '' || Number.isNaN(Number(raw)) ? null : Number(raw);
};
const isEmpty = (value) => value == null || value === '' || value === false || (Array.isArray(value) && !value.length);

/**
 * All product filtering lives in the URL, so filtered views can be
 * linked to (the home page chips do exactly this) and survive a refresh.
 */
export function useProductFilters(products) {
  const [params, setParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      category: params.get('category') ?? DEFAULTS.category,
      sort: params.get('sort') ?? DEFAULTS.sort,
      q: params.get('q') ?? '',
      set: readList(params, 'set'),
      condition: readList(params, 'condition'),
      grader: readList(params, 'grader'),
      minGrade: readNumber(params, 'minGrade'),
      minPrice: readNumber(params, 'minPrice'),
      maxPrice: readNumber(params, 'maxPrice'),
      inStock: params.get('inStock') === '1',
      isNew: params.get('isNew') === '1',
    }),
    [params]
  );

  const update = useCallback(
    (key, value) => {
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (isEmpty(value) || DEFAULTS[key] === value) next.delete(key);
          else if (Array.isArray(value)) next.set(key, value.join(SEPARATOR));
          else next.set(key, value === true ? '1' : String(value));
          return next;
        },
        { replace: true }
      );
    },
    [setParams]
  );

  const toggleListValue = useCallback(
    (key, value) => {
      const current = filters[key];
      update(key, current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
    },
    [filters, update]
  );

  const clearAll = useCallback(() => {
    setParams(
      (prev) => {
        const next = new URLSearchParams();
        Object.keys(DEFAULTS).forEach((key) => prev.get(key) && next.set(key, prev.get(key)));
        return next;
      },
      { replace: true }
    );
  }, [setParams]);

  const inCategory = useMemo(
    () => (filters.category === 'all' ? products : products.filter((p) => p.category === filters.category)),
    [products, filters.category]
  );

  const results = useMemo(() => {
    const query = filters.q.toLowerCase();
    const matches = inCategory.filter((p) => {
      if (query && !`${p.name} ${p.set} ${p.number ?? ''}`.toLowerCase().includes(query)) return false;
      if (filters.set.length && !filters.set.includes(p.set)) return false;
      if (filters.condition.length && !filters.condition.includes(p.condition)) return false;
      if (filters.grader.length && !filters.grader.includes(p.grade?.company)) return false;
      if (filters.minGrade != null && !(p.grade?.score >= filters.minGrade)) return false;
      if (filters.minPrice != null && p.price < filters.minPrice) return false;
      if (filters.maxPrice != null && p.price > filters.maxPrice) return false;
      if (filters.inStock && p.stock < 1) return false;
      if (filters.isNew && !p.isNew) return false;
      return true;
    });
    const compare = SORT_OPTIONS.find((option) => option.value === filters.sort)?.compare;
    return compare ? [...matches].sort(compare) : matches;
  }, [inCategory, filters]);

  // Filter options only show values that exist in the current category.
  const options = useMemo(() => {
    const sets = countBy(inCategory, (p) => p.set);
    const conditions = countBy(inCategory, (p) => p.condition);
    const graders = countBy(inCategory, (p) => p.grade?.company);
    return {
      categoryCounts: countBy(products, (p) => p.category),
      sets: Object.keys(sets).sort().map((value) => ({ value, label: value, count: sets[value] })),
      conditions: CONDITIONS.filter((c) => conditions[c.id]).map((c) => ({ value: c.id, label: c.label, count: conditions[c.id] })),
      graders: GRADERS.filter((g) => graders[g]).map((g) => ({ value: g, label: g, count: graders[g] })),
    };
  }, [inCategory, products]);

  const activeFilters = useMemo(() => {
    const chips = [];
    const add = (id, label, onRemove) => chips.push({ id, label, onRemove });

    if (filters.q) add('q', `“${filters.q}”`, () => update('q', ''));
    LIST_KEYS.forEach((key) =>
      filters[key].forEach((value) => {
        const label = key === 'condition' ? CONDITIONS.find((c) => c.id === value)?.label ?? value : value;
        add(`${key}-${value}`, label, () => toggleListValue(key, value));
      })
    );
    if (filters.minGrade != null) add('minGrade', `Grade ${GRADE_LEVELS.find((g) => g.value === filters.minGrade)?.label ?? filters.minGrade}`, () => update('minGrade', ''));
    if (filters.minPrice != null) add('minPrice', `From $${filters.minPrice}`, () => update('minPrice', ''));
    if (filters.maxPrice != null) add('maxPrice', `Up to $${filters.maxPrice}`, () => update('maxPrice', ''));
    if (filters.inStock) add('inStock', 'In stock', () => update('inStock', false));
    if (filters.isNew) add('isNew', 'New this week', () => update('isNew', false));
    return chips;
  }, [filters, update, toggleListValue]);

  return { filters, results, options, activeFilters, update, toggleListValue, clearAll };
}
