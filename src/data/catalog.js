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

export const PRODUCTS = [
  // Singles
  { id: 'charizard-ex-obf', category: 'singles', name: 'Charizard ex', set: 'Obsidian Flames', number: '125/197', price: 84, condition: 'NM', stock: 3, isNew: true, featured: true, description: 'Photographed front and back. Sharp corners, clean surface, one faint edge nick on the reverse.' },
  { id: 'pikachu-grey-felt-hat', category: 'singles', name: 'Pikachu with Grey Felt Hat', set: 'Celebrations', number: '025/025', price: 41.5, condition: 'NM', stock: 1, isNew: true },
  { id: 'iron-valiant-ex', category: 'singles', name: 'Iron Valiant ex', set: 'Paradox Rift', number: '089/182', price: 12.25, condition: 'LP', stock: 6, isNew: true },
  { id: 'sylveon-ex', category: 'singles', name: 'Sylveon ex', set: 'Prismatic Evolutions', number: '056/131', price: 29, condition: 'NM', stock: 2, isNew: true },
  { id: 'roaring-moon-ex', category: 'singles', name: 'Roaring Moon ex', set: 'Paradox Rift', number: '124/182', price: 18.75, condition: 'NM', stock: 4, isNew: true },
  { id: 'umbreon-ex-pre', category: 'singles', name: 'Umbreon ex', set: 'Prismatic Evolutions', number: '060/131', price: 58, condition: 'LP', stock: 2 },
  { id: 'espeon-ex-pre', category: 'singles', name: 'Espeon ex', set: 'Prismatic Evolutions', number: '034/131', price: 9.5, condition: 'NM', stock: 11 },
  { id: 'gardevoir-ex-svi', category: 'singles', name: 'Gardevoir ex', set: 'Scarlet & Violet', number: '086/198', price: 4.25, condition: 'NM', stock: 20 },
  { id: 'mew-ex-151', category: 'singles', name: 'Mew ex', set: '151', number: '151/165', price: 14, condition: 'MP', stock: 8 },
  { id: 'gengar-lor', category: 'singles', name: 'Gengar', set: 'Lost Origin', number: '066/196', price: 3.5, condition: 'HP', stock: 5 },
  { id: 'blastoise-ex-151', category: 'singles', name: 'Blastoise ex', set: '151', number: '009/165', price: 7.75, condition: 'DMG', stock: 1 },

  // Japanese prints
  { id: 'jp-pikachu-ex', category: 'japanese', name: 'Pikachu ex', set: 'Super Electric Breaker', number: '033/106', price: 22, condition: 'NM', stock: 3, isNew: true },
  { id: 'jp-charizard-ex', category: 'japanese', name: 'Charizard ex', set: 'Ruler of the Black Flame', number: '066/108', price: 18, condition: 'NM', stock: 5 },
  { id: 'jp-umbreon-vmax', category: 'japanese', name: 'Umbreon VMAX', set: 'Eevee Heroes', number: '095/069', price: 240, condition: 'LP', stock: 1 },
  { id: 'jp-mewtwo', category: 'japanese', name: 'Mewtwo', set: '151', number: '150/165', price: 6.5, condition: 'NM', stock: 9 },

  // Graded slabs
  { id: 'psa9-charizard-base', category: 'graded', name: 'Charizard, Base Set', set: 'Base Set', price: 2940, grade: { company: 'PSA', score: 9, cert: '84721193' }, stock: 1 },
  { id: 'psa8-blastoise-base', category: 'graded', name: 'Blastoise, Base Set', set: 'Base Set', price: 780, grade: { company: 'PSA', score: 8, cert: '84719002' }, stock: 1 },
  { id: 'psa10-umbreon-vmax', category: 'graded', name: 'Umbreon VMAX', set: 'Evolving Skies', price: 1150, grade: { company: 'PSA', score: 10, cert: '91330847' }, stock: 2 },
  { id: 'cgc9-lugia-neo', category: 'graded', name: 'Lugia, Neo Genesis', set: 'Neo Genesis', price: 620, grade: { company: 'CGC', score: 9, cert: '4471008' }, stock: 1 },
  { id: 'bgs95-rayquaza-vmax', category: 'graded', name: 'Rayquaza VMAX', set: 'Evolving Skies', price: 890, grade: { company: 'BGS', score: 9.5, cert: '0012948811' }, stock: 1 },
  { id: 'psa10-sylveon-ex', category: 'graded', name: 'Sylveon ex', set: 'Prismatic Evolutions', price: 210, grade: { company: 'PSA', score: 10, cert: '97120456' }, stock: 3, isNew: true },

  // Sealed product
  { id: 'prismatic-evolutions-box', category: 'sealed', name: 'Prismatic Evolutions Booster Box', set: 'Prismatic Evolutions', price: 379, stock: 4, highlight: 'In stock today', note: 'Ships same day if ordered before 4pm.' },
  { id: 'surging-sparks-etb', category: 'sealed', name: 'Surging Sparks Elite Trainer Box', set: 'Surging Sparks', price: 54.99, stock: 12 },
  { id: '151-upc', category: 'sealed', name: '151 Ultra Premium Collection', set: '151', price: 159, stock: 2 },

  // Preorders
  { id: 'phantasmal-flames-bundle', category: 'preorders', name: 'Phantasmal Flames Booster Bundle', set: 'Phantasmal Flames', price: 51.98, stock: 40, shipDate: '14 Nov', note: 'Two per household. Charged when it ships.' },
  { id: 'ascended-heroes-etb', category: 'preorders', name: 'Ascended Heroes Elite Trainer Box', set: 'Ascended Heroes', price: 54.99, stock: 40, shipDate: '14 Nov', note: 'Two per household. Charged when it ships.' },
  { id: 'ascended-heroes-box', category: 'preorders', name: 'Ascended Heroes Booster Box', set: 'Ascended Heroes', price: 169, stock: 15, shipDate: '28 Nov', note: 'One per household. Charged when it ships.' },
];
