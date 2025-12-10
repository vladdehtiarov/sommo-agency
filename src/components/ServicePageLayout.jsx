import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './ServicePageLayout.css';

const AnimatedText = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="animated-text-wrapper">
      <motion.span
        className="animated-text"
        initial={{ y: '100%', rotateX: -90 }}
        animate={isInView ? { y: 0, rotateX: 0 } : {}}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon,
  gradient,
  features,
  tools,
  process,
  caseStudies,
  faq,
}) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section ref={heroRef} className="service-hero">
        <div className="service-hero-bg">
          <div className="hero-gradient-orb" style={{ background: gradient }} />
          <div className="hero-grid" />
        </div>

        <motion.div className="container service-hero-content" style={{ y, opacity }}>
          <motion.div
            className="service-icon-large"
            style={{ background: gradient }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {icon}
          </motion.div>

          <h1 className="service-hero-title">
            <AnimatedText delay={0.2}>{title}</AnimatedText>
          </h1>

          <motion.p
            className="service-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="service-hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/#contact" className="cta-primary" data-cursor="Start">
              <span>Start Your Project</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/#work" className="cta-secondary" data-cursor="View">
              <span>See Examples</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="service-description">
        <div className="container">
          <motion.div
            className="description-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="description-text">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Key Features</h2>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon" style={{ color: gradient.match(/#[A-Fa-f0-9]{6}/)?.[0] }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="service-tools">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Tech Stack</span>
            <h2 className="section-title">Tools We Use</h2>
          </motion.div>

          <motion.div
            className="tools-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="tool-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="tool-icon">{tool.icon}</div>
                <span className="tool-name">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-title">Our Process</h2>
          </motion.div>

          <div className="process-timeline">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="step-number" style={{ background: gradient }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <span className="step-duration">{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="service-cases">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">Success Stories</span>
              <h2 className="section-title">Related Projects</h2>
            </motion.div>

            <div className="cases-grid">
              {caseStudies.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="case-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-cursor="View Case"
                >
                  <div className="case-image" style={{ backgroundImage: `url(${project.image})` }} />
                  <div className="case-content">
                    <span className="case-category">{project.category}</span>
                    <h3 className="case-title">{project.title}</h3>
                    <p className="case-result">{project.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="cases-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/#work" className="view-all-link" data-cursor="View All">
                View All Projects
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <section className="service-faq">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-title">Common Questions</h2>
            </motion.div>

            <div className="faq-list">
              {faq.map((item, index) => (
                <motion.details
                  key={item.question}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <summary className="faq-question">
                    {item.question}
                    <svg viewBox="0 0 24 24" fill="none" className="faq-icon">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <p className="faq-answer">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            style={{ background: `linear-gradient(135deg, ${gradient.match(/#[A-Fa-f0-9]{6}/)?.[0]}15 0%, transparent 50%)` }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              Ready to start your
              <br />
              <span className="text-gradient">{title.toLowerCase()}</span> project?
            </h2>
            <p className="cta-description">
              Let's discuss how we can help you build your product faster and smarter.
            </p>
            <Link to="/#contact" className="cta-primary" data-cursor="Start">
              <span>Get Started</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

