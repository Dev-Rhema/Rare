# RARE Trading Cards

React + Vite + Tailwind CSS storefront: Home, All products and Contact.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Structure

```
src/
  App.jsx                 routes
  data/catalog.js         products, categories, conditions, grades, sort options
  data/site.js            nav, hero, footer, contact and FAQ copy
  theme/tones.js          white / gray / blue / yellow section styles
  hooks/useProductFilters.js   filtering, sorting and counts, stored in the URL
  utils/                  cn(), price/product helpers, form validation
  components/ui/          Button, Card, Badge, Chip, Section, SectionHeader, PageHero,
                          SearchBar, FormField, Disclosure, Drawer, EmptyState, Icons, Logo
  components/layout/      Layout, Header, NavLinks, Footer
  components/product/     ProductCard, ProductGrid, SealedCard, CategoryCard,
                          FeaturedCard, StockStatus, ConditionGuide
  components/filters/     FilterPanel, FilterGroup, OptionList, Toggle, PriceRange,
                          CategoryTabs, ResultsToolbar
  components/home/        Hero, ShopByCategory, NewThisWeek, GradedSlabs, SealedPreorders, AboutRare
  components/contact/     ContactForm, InfoCard, FaqList
  pages/                  HomePage, ProductsPage, ContactPage, NotFoundPage
```

## How it stays DRY

- `<Section tone="blue">` shares its colours through context, so SectionHeader, Chip and
  SearchBar restyle themselves on blue or yellow backgrounds.
- Every card uses the one `Card` component (rounded-2xl).
- Nav, footer, filters, form fields and FAQs render from `data/`. Add a product to
  `catalog.js` and it shows up in the grid, filters and counts.
- Filters live in the URL, e.g. `/products?category=graded&grader=PSA&minGrade=10`.
  Params: category, q, set, condition, grader, minGrade, minPrice, maxPrice, inStock, isNew, sort.

Replace `ImagePlaceholder` with an `<img>` once products have photos.
Brand colours from the logo are in `tailwind.config.js`: blue #0533B5, yellow #FDC901.
