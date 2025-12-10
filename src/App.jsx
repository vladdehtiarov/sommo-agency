import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSmoothScroll, scrollToTop, getLenis } from './hooks/useSmoothScroll';
import { Layout } from './components/Layout';
import {
  HomePage,
  NoCodePage,
  LowCodePage,
  AIDevelopmentPage,
  AutomationPage,
} from './pages';
import './App.css';

// Scroll to top on route change, or to hash if present
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      // Scroll to hash element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(element, { offset: -100 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // Scroll to top immediately on page change
      scrollToTop(true);
    }
  }, [pathname, hash]);
  
  return null;
};

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  // Add loading animation
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/no-code" element={<NoCodePage />} />
        <Route path="/services/low-code" element={<LowCodePage />} />
        <Route path="/services/ai-development" element={<AIDevelopmentPage />} />
        <Route path="/services/automation" element={<AutomationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
