export const CATEGORIES = [
  { id: 'singles', label: 'Singles', total: '42,318', unit: 'cards', description: 'Every single photographed front and back, graded to one standard.' },
  { id: 'sealed', label: 'Sealed product', total: '214', unit: 'items', description: 'Booster boxes, bundles and Elite Trainer Boxes, factory sealed.' },
  { id: 'graded', label: 'Graded slabs', total: '386', unit: 'slabs', description: 'PSA, BGS and CGC slabs with the cert number listed on every card.' },
  { id: 'preorders', label: 'Preorders', total: '12', unit: 'releases', description: 'Reserve upcoming sets. You are only charged when it ships.' },
  { id: 'japanese', label: 'Japanese prints', total: '3,940', unit: 'cards', description: 'Japanese singles held and graded exactly like our English stock.' },
];

export const CONDITIONS = [
  { id: 'NM', label: 'Near Mint', description: 'Sharp corners, clean surface. At most a couple of tiny flaws.' },
  { id: 'LP', label: 'Lightly Played', description: 'Minor edge wear or a light scratch. Still sleeve ready.' },
  { id: 'MP', label: 'Moderately Played', description: 'Visible wear on corners and edges, some surface marks.' },
  { id: 'HP', label: 'Heavily Played', description: 'Heavy wear, creasing or noticeable whitening throughout.' },
  { id: 'DMG', label: 'Damaged', description: 'Tears, water damage or a crease through the art. Priced to match.' },
];

export const GRADERS = ['PSA', 'BGS', 'CGC'];

export const GRADE_LEVELS = [
  { value: '', label: 'Any grade' },
  { value: 10, label: '10 only' },
  { value: 9.5, label: '9.5 and up' },
  { value: 9, label: '9 and up' },
  { value: 8, label: '8 and up' },
];

/** Tabs on the home page graded section. */
export const GRADE_TABS = [
  { id: 'all', label: 'All grades', matches: () => true },
  { id: 'psa10', label: 'PSA 10', matches: (g) => g.company === 'PSA' && g.score === 10 },
  { id: 'psa95', label: 'PSA 9.5 and up', matches: (g) => g.company === 'PSA' && g.score >= 9.5 },
  { id: 'bgs', label: 'BGS', matches: (g) => g.company === 'BGS' },
  { id: 'cgc', label: 'CGC', matches: (g) => g.company === 'CGC' },
];

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured', compare: null },
  { value: 'newest', label: 'Newest', compare: (a, b) => Number(b.isNew) - Number(a.isNew) },
  { value: 'price-asc', label: 'Price, low to high', compare: (a, b) => a.price - b.price },
  { value: 'price-desc', label: 'Price, high to low', compare: (a, b) => b.price - a.price },
  { value: 'name', label: 'Name, A to Z', compare: (a, b) => a.name.localeCompare(b.name) },
];

export const PRODUCTS = [];
