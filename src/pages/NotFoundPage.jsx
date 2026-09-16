import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';

export default function NotFoundPage() {
  return (
    <PageHero title="This page isn't in the binder." description="The link may be old or the address mistyped. The shop is still right here.">
      <Button variant="secondary" size="lg" to="/products">Browse all products</Button>
    </PageHero>
  );
}
