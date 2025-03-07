import { CarouselSection } from './sections/CarouselSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { ProductSection } from './sections/ProductSection';
import { WelcomeSection } from './sections/WelcomeSection';

/*
TODO: Improve the following Home component by:
- Adding skip links
- Using landmark regions here or in the subcomponents
*/

export default function Home() {
  return (
    <>
      <Header />
      <CarouselSection />
      <WelcomeSection />
      <ProductSection />
      <FeedbackSection />
      <Footer />
    </>
  );
}
