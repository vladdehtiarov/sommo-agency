import { useRef } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './BlogPageLayout.css';

export const BlogPageLayout = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  coverImage,
  content,
  relatedPosts = [],
}) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <article className="blog-post">
      {/* Hero Section */}
      <section ref={heroRef} className="blog-hero">
        <div className="blog-hero-bg">
          <div className="blog-gradient-orb orb-1" />
          <div className="blog-gradient-orb orb-2" />
        </div>

        <div className="container">
          <motion.div
            className="blog-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/blog" className="back-link">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>

            <span className="blog-category">{category}</span>
            <h1 className="blog-title">{title}</h1>
            <p className="blog-excerpt">{excerpt}</p>

            <div className="blog-meta">
              <div className="blog-author">
                <div className="author-avatar">
                  {author.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{author}</span>
                  <span className="author-role">Sommo Team</span>
                </div>
              </div>
              <div className="blog-details">
                <span className="blog-date">{date}</span>
                <span className="separator">•</span>
                <span className="blog-read-time">{readTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {coverImage && (
        <motion.div
          className="blog-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container">
            <div className="cover-wrapper">
              <img src={coverImage} alt={title} />
            </div>
          </div>
        </motion.div>
      )}

      {/* Content */}
      <section ref={contentRef} className="blog-content-section">
        <div className="container">
          <motion.div
            className="blog-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Share */}
          <motion.div
            className="blog-share"
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Share this article:</span>
            <div className="share-buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
                aria-label="Share on Twitter"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="share-btn"
                aria-label="Copy link"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2 className="related-title">Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map((post, index) => (
                <Link
                  to={post.href}
                  key={post.title}
                  className="related-card"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="related-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="read-more">
                      Read Article
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="blog-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how no-code and AI solutions can accelerate your growth.</p>
            <Link to="/#contact" className="cta-button">
              Get in Touch
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

