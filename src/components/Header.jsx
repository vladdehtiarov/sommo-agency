import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      // Use setTimeout to avoid sync setState in effect
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }, 0);
    }
  }, [location.pathname]);

  const services = [
    { name: 'No-Code Development', href: '/services/no-code' },
    { name: 'Low-Code Solutions', href: '/services/low-code' },
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Automation & Integration', href: '/services/automation' },
  ];

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleHashLink = (e, href) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-container">
        <Link to="/" className="logo" data-cursor="Home">
          <motion.div 
            className="logo-mark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">Sommo</span>
            <span className="logo-dot" />
          </motion.div>
        </Link>

        <nav className="nav-desktop">
          {/* Services Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="nav-link nav-dropdown-trigger" data-cursor="View">
              <span className="nav-link-text">Services</span>
              <svg className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="dropdown-item"
                      data-cursor="View"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="nav-link"
              data-cursor="View"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
              whileHover={{ y: -2 }}
              onClick={(e) => handleHashLink(e, link.href)}
            >
              <span className="nav-link-text">{link.name}</span>
              <span className="nav-link-line" />
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="/#contact"
          className="header-cta"
          data-cursor="Let's talk"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => handleHashLink(e, '/#contact')}
        >
          <span>Start Project</span>
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-nav">
              <div className="mobile-nav-group">
                <span className="mobile-nav-label">Services</span>
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      to={service.href}
                      className="mobile-nav-link mobile-nav-link-sub"
                    >
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (index + services.length) }}
                  onClick={(e) => handleHashLink(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="/#contact"
                className="mobile-cta"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={(e) => handleHashLink(e, '/#contact')}
              >
                Start Project
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
