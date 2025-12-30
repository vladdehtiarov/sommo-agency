import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SEO } from './SEO';
import './CaseStudyPageLayout.css';

export const CaseStudyPageLayout = ({
  title,
  category,
  description,
  heroImage,
  color,
  client,
  timeline,
  services,
  challenge,
  solution,
  results,
  techStack,
  testimonial,
  gallery,
  nextCase,
  seo,
}) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="case-study-page">
      {seo && (
        <SEO
          title={seo.title || `${title} - Case Study`}
          description={seo.description || description}
          keywords={seo.keywords}
          url={seo.url}
          image={heroImage}
        />
      )}
      {/* Hero Section */}
      <section ref={heroRef} className="case-hero">
        <motion.div 
          className="case-hero-image"
          style={{ scale }}
        >
          <div 
            className="hero-bg-image" 
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="hero-overlay" style={{ background: `linear-gradient(180deg, rgba(10,10,11,0.3) 0%, rgba(10,10,11,0.9) 70%, ${color}10 100%)` }} />
        </motion.div>

        <motion.div className="container case-hero-content" style={{ y, opacity }}>
          <motion.div
            className="case-category-badge"
            style={{ background: `${color}20`, borderColor: `${color}40` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {category}
          </motion.div>

          <motion.h1
            className="case-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="case-hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="case-quick-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {results.slice(0, 3).map((result, index) => (
              <div key={index} className="quick-stat" style={{ borderColor: `${color}30` }}>
                <span className="quick-stat-value" style={{ color }}>{result.value}</span>
                <span className="quick-stat-label">{result.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Project Info */}
      <section className="case-info">
        <div className="container">
          <div className="info-grid">
            <motion.div
              className="info-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="info-label">Client</span>
              <span className="info-value">{client}</span>
            </motion.div>
            <motion.div
              className="info-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="info-label">Timeline</span>
              <span className="info-value">{timeline}</span>
            </motion.div>
            <motion.div
              className="info-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="info-label">Services</span>
              <span className="info-value">{services.join(', ')}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="case-section case-challenge">
        <div className="container">
          <div className="section-content-grid">
            <motion.div
              className="section-label-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-number" style={{ color }}>01</span>
              <h2 className="section-label">The Challenge</h2>
            </motion.div>
            <motion.div
              className="section-text-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="section-text">{challenge}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="case-section case-solution">
        <div className="container">
          <div className="section-content-grid">
            <motion.div
              className="section-label-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-number" style={{ color }}>02</span>
              <h2 className="section-label">The Solution</h2>
            </motion.div>
            <motion.div
              className="section-text-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {solution.map((item, index) => (
                <div key={index} className="solution-item">
                  <h3 className="solution-title">{item.title}</h3>
                  <p className="solution-text">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="case-tech">
        <div className="container">
          <motion.div
            className="tech-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow" style={{ color }}>Technology</span>
            <h2 className="tech-title">Built With</h2>
          </motion.div>
          <motion.div
            className="tech-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="case-gallery">
          <div className="container">
            <motion.div
              className="gallery-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className={`gallery-item ${image.size || ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img src={image.url} alt={image.caption || `${title} screenshot ${index + 1}`} />
                  {image.caption && <span className="gallery-caption">{image.caption}</span>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="case-results">
        <div className="container">
          <motion.div
            className="results-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow" style={{ color }}>Impact</span>
            <h2 className="results-title">The Results</h2>
          </motion.div>
          <div className="results-grid">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="result-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="result-value" style={{ color }}>{result.value}</span>
                <span className="result-label">{result.label}</span>
                {result.description && <p className="result-description">{result.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="case-testimonial">
          <div className="container">
            <motion.div
              className="testimonial-card"
              style={{ borderColor: `${color}30` }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg className="quote-icon" style={{ color }} viewBox="0 0 48 48" fill="none">
                <path d="M14 28V20C14 14.4772 18.4772 10 24 10H26V16H24C21.7909 16 20 17.7909 20 20V22H26V28H20V38H14V28Z" fill="currentColor"/>
                <path d="M32 28V20C32 14.4772 36.4772 10 42 10H44V16H42C39.7909 16 38 17.7909 38 20V22H44V28H38V38H32V28Z" fill="currentColor"/>
              </svg>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: color }}>{testimonial.author.charAt(0)}</div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="case-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              Ready to build your
              <br />
              <span style={{ color }}>success story?</span>
            </h2>
            <p className="cta-description">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link to="/#contact" className="cta-primary" style={{ background: color }} data-cursor="Start">
              <span>Start Your Project</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Next Case */}
      {nextCase && (
        <section className="case-next">
          <div className="container">
            <Link to={nextCase.href} className="next-case-link" data-cursor="Next Case">
              <span className="next-label">Next Project</span>
              <span className="next-title">{nextCase.title}</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

