import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './About.css';

const team = [
  {
    name: 'Roman Samoilenko',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader driving Sommo\'s growth and strategic direction. Expert in no-code solutions and business development.',
    image: '/team/roman.jpg',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #5A45D6 100%)',
    social: {
      linkedin: 'https://www.linkedin.com/in/roman-samoilenko/',
    },
  },
  {
    name: 'Vlad Dehtiarov',
    role: 'CTO & Co-Founder',
    bio: 'Technical mastermind behind Sommo\'s architecture. Specializes in no-code platforms, AI integration, and system design.',
    image: '/team/vlad.jpg',
    gradient: 'linear-gradient(135deg, #00FFC2 0%, #00D4A1 100%)',
    social: {
      linkedin: 'https://www.linkedin.com/in/vladyslav-dehtiarov/',
      twitter: 'https://x.com/VladDehtiarov',
    },
  },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 16L28 10M16 16L4 10M16 16V28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Speed Without Sacrifice',
    description: 'We deliver projects 10x faster without compromising on quality or functionality.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 8V16L22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Client-First Approach',
    description: 'Your success is our success. We partner with you from ideation to launch and beyond.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M8 28V18M16 28V12M24 28V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Innovation Driven',
    description: 'We stay ahead of the curve with cutting-edge no-code, low-code, and AI technologies.',
  },
];

const TeamMember = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="team-member"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="Connect"
    >
      <div className="member-image-wrapper">
        <motion.div
          className="member-image"
          style={{ backgroundImage: `url(${member.image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="member-gradient" style={{ background: member.gradient }} />
        
        {/* Social links */}
        <motion.div
          className="member-social"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </motion.div>
      </div>
      
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <span className="member-role">{member.role}</span>
        <p className="member-bio">{member.bio}</p>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="about" className="about">
      {/* Background */}
      <motion.div className="about-bg" style={{ y }}>
        <div className="about-gradient-1" />
        <div className="about-gradient-2" />
      </motion.div>

      <div className="container">
        {/* About intro */}
        <div className="about-intro">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.span>
          
          <motion.h2
            className="about-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We're a team of builders,
            <br />
            <span className="font-serif italic">dreamers, and innovators</span>
          </motion.h2>
          
          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sommo Agency was founded with a simple mission: to democratize software 
            development. We believe that great ideas shouldn't be held back by technical 
            barriers. Using no-code, low-code, and AI technologies, we help startups and 
            enterprises bring their visions to life in record time.
          </motion.p>
        </div>

        {/* Values */}
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team section */}
        <div className="team-section">
          <motion.h3
            className="team-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet the <span className="text-gradient">Leadership</span>
          </motion.h3>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Stats banner */}
        <motion.div
          className="about-stats-banner"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-banner-item">
            <span className="stat-banner-number">2019</span>
            <span className="stat-banner-label">Founded</span>
          </div>
          <div className="stat-banner-divider" />
          <div className="stat-banner-item">
            <span className="stat-banner-number">100+</span>
            <span className="stat-banner-label">Projects</span>
          </div>
          <div className="stat-banner-divider" />
          <div className="stat-banner-item">
            <span className="stat-banner-number">50+</span>
            <span className="stat-banner-label">Happy Clients</span>
          </div>
          <div className="stat-banner-divider" />
          <div className="stat-banner-item">
            <span className="stat-banner-number">15+</span>
            <span className="stat-banner-label">Team Members</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

