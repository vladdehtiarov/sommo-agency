import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'No-Code Development', href: '/services/no-code' },
      { name: 'Low-Code Solutions', href: '/services/low-code' },
      { name: 'AI Development', href: '/services/ai-development' },
      { name: 'Automation', href: '/services/automation' },
    ],
    company: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Work', href: '/#work' },
      { name: 'Blog', href: '/blog' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top section */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Sommo</span>
              <span className="logo-dot" />
            </Link>
            <p className="footer-tagline">
              Building digital products 10x faster with no-code, 
              low-code, and AI technologies.
            </p>
            <div className="footer-badges">
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span>Top Rated on Clutch</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🏆</span>
                <span>100+ Projects Delivered</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Sommo Agency. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/company/sommo-agency/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="footer-bg-text">SOMMO</div>
    </footer>
  );
};

