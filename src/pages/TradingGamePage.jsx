import { Link } from "react-router-dom";
import ProductGrid from "../components/product/ProductGrid";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { PRODUCTS } from "../data/catalog";

const GAME_PAGES = {
  pokemon: {
    title: "Pokémon",
    description:
      "Singles, sealed product and graded slabs from the Pokémon sets on our shelf today.",
    intro: "The full Pokémon collection",
    detail:
      "Every card is photographed, checked and priced from stock we already hold.",
    products: PRODUCTS,
  },
  magic: {
    title: "Magic: The Gathering",
    description:
      "A new home for Magic singles, sealed releases and collectible staples.",
    intro: "Magic stock is on its way",
    detail:
      "We are building this collection carefully. Check back soon for the first drop.",
    products: [],
  },
  riftbound: {
    title: "Riftbound",
    description:
      "Riftbound singles and sealed product, coming to the shelf soon.",
    intro: "Riftbound stock is on its way",
    detail:
      "We are getting the first collection ready now. New stock will appear here as it lands.",
    products: [],
  },
};

export default function TradingGamePage({ game }) {
  const page = GAME_PAGES[game];

  return (
    <>
      <PageHero title={page.title} description={page.description} />
      <Section spacing="compact">
        <SectionHeader title={page.intro} description={page.detail} />
        {page.products.length ? (
          <ProductGrid products={page.products} />
        ) : (
          <Card className="mx-auto max-w-2xl px-6 py-12 text-center md:px-12">
            <EmptyState
              title="Nothing listed yet"
              description="We are preparing this section with the same photographed, in-hand stock standard as the rest of the shop."
              action={<Button to="/products">Browse all products</Button>}
            />
          </Card>
        )}
      </Section>
      <Section tone="yellow" spacing="compact">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold">
              Looking for something specific?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-black/70">
              Tell us what you are hunting for and we will check the shelves.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
          >
            Contact the shop
          </Link>
        </div>
      </Section>
    </>
  );
}
