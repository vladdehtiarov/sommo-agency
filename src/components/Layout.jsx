import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';

export const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

