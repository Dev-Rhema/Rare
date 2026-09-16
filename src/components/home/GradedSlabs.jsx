import { useMemo, useState } from 'react';
import { GRADE_TABS, PRODUCTS } from '../../data/catalog';
import ProductGrid from '../product/ProductGrid';
import Chip from '../ui/Chip';
import EmptyState from '../ui/EmptyState';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const SLABS = PRODUCTS.filter((product) => product.grade);

export default function GradedSlabs() {
  const [activeTab, setActiveTab] = useState(GRADE_TABS[0].id);

  const slabs = useMemo(() => {
    const tab = GRADE_TABS.find((t) => t.id === activeTab);
    return SLABS.filter((slab) => tab.matches(slab.grade)).slice(0, 4);
  }, [activeTab]);

  return (
    <Section tone="blue">
      <SectionHeader title="Graded slabs" linkLabel="All graded stock" linkTo="/products?category=graded" className="!mb-6" />
      <div className="mb-8 flex flex-wrap gap-2">
        {GRADE_TABS.map((tab) => (
          <Chip key={tab.id} active={tab.id === activeTab} aria-pressed={tab.id === activeTab} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </Chip>
        ))}
      </div>
      {slabs.length ? (
        <ProductGrid products={slabs} className="grid-cols-2 lg:grid-cols-4" />
      ) : (
        <EmptyState title="No slabs at this grade right now" description="New slabs go up every week. Try another grade or browse all graded stock." />
      )}
    </Section>
  );
}
