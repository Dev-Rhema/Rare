import AboutRare from '../components/home/AboutRare';
import GradedSlabs from '../components/home/GradedSlabs';
import Hero from '../components/home/Hero';
import NewThisWeek from '../components/home/NewThisWeek';
import SealedPreorders from '../components/home/SealedPreorders';
import ShopByCategory from '../components/home/ShopByCategory';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <NewThisWeek />
      <GradedSlabs />
      <SealedPreorders />
      <AboutRare />
    </>
  );
}
