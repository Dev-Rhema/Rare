import { useCallback, useState } from 'react';
import CategoryTabs from '../components/filters/CategoryTabs';
import FilterPanel from '../components/filters/FilterPanel';
import ResultsToolbar from '../components/filters/ResultsToolbar';
import ConditionGuide from '../components/product/ConditionGuide';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Drawer from '../components/ui/Drawer';
import EmptyState from '../components/ui/EmptyState';
import PageHero from '../components/ui/PageHero';
import SearchBar from '../components/ui/SearchBar';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import { CATEGORIES, PRODUCTS } from '../data/catalog';
import { useProductFilters } from '../hooks/useProductFilters';

const ALL_PRODUCTS = {
  label: 'All products',
  description: 'Every single, box and slab we hold, priced from stock on our own shelf.',
};

export default function ProductsPage() {
  const productFilters = useProductFilters(PRODUCTS);
  const { filters, results, options, activeFilters, update, clearAll } = productFilters;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const category = CATEGORIES.find((c) => c.id === filters.category) ?? ALL_PRODUCTS;

  return (
    <>
      <PageHero title={category.label} description={category.description}>
        <SearchBar key={filters.q} defaultValue={filters.q} onSubmit={(query) => update('q', query)} />
      </PageHero>

      <Section spacing="compact">
        <CategoryTabs active={filters.category} counts={options.categoryCounts} onChange={(id) => update('category', id)} />

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[270px_1fr]">
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <Card className="px-3 py-1">
              <FilterPanel {...productFilters} />
            </Card>
          </aside>

          <div>
            <ResultsToolbar
              count={results.length}
              sort={filters.sort}
              onSortChange={(value) => update('sort', value)}
              onOpenFilters={() => setDrawerOpen(true)}
              activeFilters={activeFilters}
              onClearAll={clearAll}
            />
            <div className="mt-6">
              {results.length ? (
                <ProductGrid products={results} />
              ) : (
                <EmptyState
                  title="Nothing matches those filters"
                  description="Remove a filter or widen the price range to see more stock."
                  action={<Button onClick={clearAll}>Clear all filters</Button>}
                />
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="yellow">
        <SectionHeader
          title="One condition scale for every card"
          description="Every single on this page is checked by us in daylight and listed at one of five conditions."
        />
        <ConditionGuide variant="cards" />
      </Section>

      <Drawer
        open={drawerOpen}
        onClose={closeDrawer}
        title="Filters"
        className="lg:hidden"
        footer={
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={clearAll}>Clear all</Button>
            <Button className="flex-1" onClick={closeDrawer}>Show {results.length} results</Button>
          </div>
        }
      >
        <FilterPanel {...productFilters} />
      </Drawer>
    </>
  );
}
