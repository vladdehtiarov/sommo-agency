import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Work.css';

const projects = [
  {
    id: 1,
    title: 'M&A Software Platform',
    category: 'AI • Fintech • Marketplace',
    description: 'AI-powered M&A platform that streamlines deal sourcing. Achieved $3.2K MRR within six months.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: '#7B61FF',
    tech: ['Bubble', 'AI/ML', 'APIs'],
    stats: { time: '2 months', mrr: '$3.2K' },
    href: '/cases/ma-software',
  },
  {
    id: 2,
    title: 'Loan Management Platform',
    category: 'Fintech • Web App',
    description: 'User-friendly online experience for private lending with transparency and security.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    color: '#00FFC2',
    tech: ['Bubble', 'Webflow', 'Stripe'],
    stats: { users: '10K+', transactions: '$2M+' },
    href: '/cases/loan-management',
  },
  {
    id: 3,
    title: 'Plannly',
    category: 'Management Tool • SaaS',
    description: 'Employee management app released in 3.5 months. Secured $1.2M funding post-launch.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    color: '#FF61DC',
    tech: ['Bubble', 'Integrations'],
    stats: { funding: '$1.2M', time: '3.5 months' },
    href: '/cases/plannly',
  },
  {
    id: 4,
    title: 'Dyvo',
    category: 'AI • Creative Tool',
    description: 'AI-powered application for creating art drawings and avatars from photos.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    color: '#FF8C42',
    tech: ['Bubble', 'AI', 'Cloud'],
    stats: { downloads: '50K+', rating: '4.8★' },
    href: '/cases/dyvo',
  },
  {
    id: 5,
    title: 'Curri Logistics',
    category: 'Logistics • Mobile & Web',
    description: 'Internal business apps for logistics - mobile app for drivers and web admin panel.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    color: '#00D4FF',
    tech: ['Bubble', 'Mobile', 'Real-time'],
    stats: { deliveries: '100K+', drivers: '500+' },
    href: '/cases/curri',
  },
  {
    id: 6,
    title: 'Miren Fintech',
    category: 'Fintech • API Platform',
    description: 'Data aggregation platform for microlenders with API and Loan Origination Software.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: '#A855F7',
    tech: ['Bubble', 'API', 'Database'],
    stats: { lenders: '200+', loans: '$5M+' },
    href: '/cases/miren',
  },
];

const ProjectCard = ({ project, index, isHovered, onHover }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={cardRef}
      className={`project-card-wrapper ${isHovered === project.id ? 'hovered' : ''} ${isHovered && isHovered !== project.id ? 'dimmed' : ''}`}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link to={project.href} className="project-card" data-cursor="View Case">
        <div className="project-image-wrapper">
          <div
            className="project-image"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="project-overlay" style={{ background: `linear-gradient(180deg, transparent 0%, ${project.color}20 100%)` }} />
          
          {/* Floating stats */}
          <div className="project-floating-stats">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="floating-stat">
                <span className="stat-value">{value}</span>
                <span className="stat-key">{key}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="project-content">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-link">
            <span>View Case Study</span>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="card-glow-effect" style={{ background: project.color }} />
      </Link>
    </motion.article>
  );
};

export const Work = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section ref={sectionRef} id="work" className="work">
      <div className="container">
        {/* Section header */}
        <div className="work-header">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.span>
          
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Products that
            <br />
            <span className="text-gradient">make an impact</span>
          </motion.h2>

          <motion.a
            href="https://www.sommo.io/cases"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            data-cursor="View All"
          >
            View All Cases
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject}
              onHover={setHoveredProject}
            />
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          className="work-testimonial"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="testimonial-content">
            <svg className="quote-icon" viewBox="0 0 48 48" fill="none">
              <path d="M14 24C14 18.4772 18.4772 14 24 14V14C29.5228 14 34 18.4772 34 24V34H14V24Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 24V28M28 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <blockquote>
              "Sommo delivered our MVP in just 2 months. Their no-code expertise 
              allowed us to validate our idea and secure funding faster than we 
              ever imagined possible."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar">JD</div>
              <div className="author-info">
                <span className="author-name">John Davidson</span>
                <span className="author-role">Founder, M&A Platform</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

