import { CONDITIONS } from '../data/catalog';

const currency = (digits) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: digits, maximumFractionDigits: digits });

/** $84.00 for everyday cards, $2,940 for big whole-dollar prices. */
export const formatPrice = (value) => currency(Number.isInteger(value) && value >= 500 ? 0 : 2).format(value);

export const getCondition = (id) => CONDITIONS.find((c) => c.id === id);

export const isSealedType = (product) => product.category === 'sealed' || product.category === 'preorders';

export const getSubtitle = (product) => {
  if (product.grade) return `Cert ${product.grade.cert}`;
  if (product.number) return `${product.set} ${product.number}`;
  return product.set;
};

export const getGradeLabel = (product) =>
  product.grade ? `${product.grade.company} ${product.grade.score}` : product.condition ?? null;

export const getImageAspect = (product) => {
  if (product.grade) return 'aspect-[5/8]';
  if (isSealedType(product)) return 'aspect-square';
  return 'aspect-[5/7]';
};

export const getStockStatus = (product) => {
  if (product.shipDate) return { label: `Ships ${product.shipDate}`, badge: 'outline' };
  if (product.highlight) return { label: product.highlight, badge: 'yellow' };
  if (product.stock === 0) return { label: 'Sold out', badge: 'soft' };
  if (product.stock === 1) return { label: 'Last one', badge: 'yellow' };
  return { label: `${product.stock} in stock` };
};

/** Tally items by a key, ignoring items where the key is missing. */
export const countBy = (items, getKey) =>
  items.reduce((acc, item) => {
    const key = getKey(item);
    if (key != null) acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
