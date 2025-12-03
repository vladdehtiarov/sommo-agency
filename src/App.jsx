import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import {
  CustomCursor,
  Header,
  Hero,
  Services,
  Work,
  About,
  Contact,
  Footer,
} from './components';
import './App.css';

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  // Add loading animation
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      {/* Custom cursor for desktop */}
      <CustomCursor />
      
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Header/Navigation */}
      <Header />
      
      {/* Main content */}
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
