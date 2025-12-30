import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  return (
    <>
      <SEO 
        url="/"
        title={null} // Uses default title
        description="Sommo Agency builds digital products 10x faster using no-code, low-code, and AI technologies. Expert development with Bubble, WeWeb, FlutterFlow, and AI integration. 100+ successful projects delivered."
        keywords="no-code development, low-code solutions, AI development, Bubble developer, web app development, mobile app development, automation, startup development agency"
      />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </>
  );
};

