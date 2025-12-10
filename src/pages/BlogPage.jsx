import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './BlogPage.css';

const blogPosts = [
  {
    id: 1,
    slug: 'no-code-vs-traditional-development',
    title: 'No-Code vs Traditional Development: Which is Right for Your Business?',
    excerpt: 'Explore the key differences between no-code and traditional development approaches, and learn how to choose the best fit for your project needs and budget.',
    category: 'No-Code',
    author: 'Vlad Dehtiarov',
    date: 'December 5, 2024',
    readTime: 8,
    featured: true,
  },
  {
    id: 2,
    slug: 'ai-automation-business-processes',
    title: 'How AI Automation is Revolutionizing Business Processes in 2024',
    excerpt: 'Discover how artificial intelligence and automation are transforming how businesses operate, from customer service to data analysis and beyond.',
    category: 'AI',
    author: 'Roman Samoilenko',
    date: 'December 3, 2024',
    readTime: 10,
    featured: true,
  },
  {
    id: 3,
    slug: 'bubble-io-complete-guide',
    title: 'The Complete Guide to Building Apps with Bubble.io in 2024',
    excerpt: 'Master Bubble.io with our comprehensive guide covering everything from basics to advanced features for building powerful web applications.',
    category: 'No-Code',
    author: 'Vlad Dehtiarov',
    date: 'November 28, 2024',
    readTime: 12,
    featured: false,
  },
  {
    id: 4,
    slug: 'zapier-make-automation-comparison',
    title: 'Zapier vs Make (Integromat): Which Automation Tool Should You Use?',
    excerpt: 'A detailed comparison of the two leading automation platforms to help you decide which tool best fits your workflow automation needs.',
    category: 'Automation',
    author: 'Roman Samoilenko',
    date: 'November 22, 2024',
    readTime: 9,
    featured: false,
  },
  {
    id: 5,
    slug: 'mvp-development-no-code',
    title: 'Building Your MVP with No-Code: A Startup Founder\'s Guide',
    excerpt: 'Learn how to validate your startup idea faster and cheaper by building a minimum viable product using no-code tools and platforms.',
    category: 'Startups',
    author: 'Vlad Dehtiarov',
    date: 'November 18, 2024',
    readTime: 11,
    featured: false,
  },
  {
    id: 6,
    slug: 'chatgpt-api-integration-guide',
    title: 'Integrating ChatGPT API into Your Applications: A Developer\'s Guide',
    excerpt: 'Step-by-step instructions for integrating OpenAI\'s ChatGPT API into your web applications, including best practices and cost optimization.',
    category: 'AI',
    author: 'Vlad Dehtiarov',
    date: 'November 12, 2024',
    readTime: 14,
    featured: false,
  },
  {
    id: 7,
    slug: 'low-code-enterprise-solutions',
    title: 'Low-Code Solutions for Enterprise: Scaling Without the Technical Debt',
    excerpt: 'How enterprises are leveraging low-code platforms to build scalable solutions while reducing development costs and time-to-market.',
    category: 'Low-Code',
    author: 'Roman Samoilenko',
    date: 'November 8, 2024',
    readTime: 10,
    featured: false,
  },
  {
    id: 8,
    slug: 'airtable-database-design',
    title: 'Airtable for Business: Building Powerful Database Solutions',
    excerpt: 'Master Airtable database design patterns and learn how to build robust business applications without writing a single line of code.',
    category: 'No-Code',
    author: 'Vlad Dehtiarov',
    date: 'November 1, 2024',
    readTime: 8,
    featured: false,
  },
  {
    id: 9,
    slug: 'workflow-automation-best-practices',
    title: '10 Workflow Automation Best Practices for Maximum Efficiency',
    excerpt: 'Proven strategies and best practices to design, implement, and optimize workflow automations that save time and reduce errors.',
    category: 'Automation',
    author: 'Roman Samoilenko',
    date: 'October 25, 2024',
    readTime: 7,
    featured: false,
  },
  {
    id: 10,
    slug: 'ai-customer-service-implementation',
    title: 'Implementing AI-Powered Customer Service: A Complete Blueprint',
    excerpt: 'Everything you need to know about implementing AI chatbots and automated customer service solutions that actually improve customer satisfaction.',
    category: 'AI',
    author: 'Vlad Dehtiarov',
    date: 'October 18, 2024',
    readTime: 13,
    featured: false,
  },
];

const categories = ['All', 'No-Code', 'Low-Code', 'AI', 'Automation', 'Startups'];

const BlogCard = ({ post, index, featured = false }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <Link to={`/blog/${post.slug}`} className={`blog-card ${featured ? 'featured' : ''}`}>
      <motion.article
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="card-content">
          <span className="card-category">{post.category}</span>
          <h3 className="card-title">{post.title}</h3>
          <p className="card-excerpt">{post.excerpt}</p>
          <div className="card-meta">
            <span className="card-author">{post.author}</span>
            <span className="separator">•</span>
            <span className="card-date">{post.date}</span>
            <span className="separator">•</span>
            <span className="card-read-time">{post.readTime} min</span>
          </div>
        </div>
        <div className="card-arrow">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.article>
    </Link>
  );
};

export const BlogPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section ref={heroRef} className="blog-list-hero">
        <div className="blog-list-hero-bg">
          <div className="hero-gradient-orb orb-1" />
          <div className="hero-gradient-orb orb-2" />
          <div className="hero-grid-bg" />
        </div>

        <div className="container">
          <motion.div
            className="blog-list-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-eyebrow">Our Blog</span>
            <h1>
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p>
              Expert insights on no-code development, AI automation, and digital transformation. 
              Stay ahead with the latest trends and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <h2 className="section-title">Featured Articles</h2>
          <div className="featured-grid">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} featured />
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="all-posts">
        <div className="container">
          {/* Categories */}
          <div className="categories-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="posts-grid">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Stay Updated</h2>
            <p>Get the latest insights on no-code, AI, and automation delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

