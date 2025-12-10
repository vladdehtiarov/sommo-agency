import { CaseStudyPageLayout } from '../../components/CaseStudyPageLayout';

const caseData = {
  title: 'M&A Software Platform',
  category: 'AI • Fintech • Marketplace',
  description: 'An AI-powered M&A software platform that streamlines deal sourcing and investment banking in the lower-middle market. Launched as an MVP in just two months, it achieved $3.2K MRR within six months.',
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
  color: '#7B61FF',
  client: 'Confidential',
  timeline: '2 months MVP',
  services: ['No-Code Development', 'AI Integration', 'UI/UX Design'],
  
  challenge: 'The client needed a sophisticated platform to help investment bankers and M&A advisors find and qualify deals more efficiently. Traditional deal sourcing was time-consuming, requiring manual research across multiple databases and sources. They needed an AI-powered solution that could automate deal matching while maintaining high accuracy, all within a tight timeline and budget.',
  
  solution: [
    {
      title: 'AI-Powered Deal Matching',
      description: 'We implemented a custom AI algorithm using GPT-4 that analyzes company profiles, financial data, and market trends to automatically match buyers with potential acquisition targets based on their specific criteria and investment thesis.',
    },
    {
      title: 'Intelligent Data Aggregation',
      description: 'Built an automated system that pulls data from multiple sources including public filings, industry databases, and news feeds, creating comprehensive company profiles that update in real-time.',
    },
    {
      title: 'Deal Flow Management',
      description: 'Created a complete CRM-like interface for tracking deals through the pipeline, with automated reminders, document management, and collaboration tools for deal teams.',
    },
    {
      title: 'Custom Reporting Dashboard',
      description: 'Designed an analytics dashboard that provides insights into deal flow, market trends, and performance metrics, helping advisors make data-driven decisions.',
    },
  ],
  
  techStack: [
    { name: 'Bubble', icon: '🫧' },
    { name: 'OpenAI GPT-4', icon: '🤖' },
    { name: 'Xano', icon: '🔧' },
    { name: 'Stripe', icon: '💳' },
    { name: 'SendGrid', icon: '📧' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Airtable', icon: '📊' },
    { name: 'AWS S3', icon: '☁️' },
  ],
  
  gallery: [
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop', caption: 'Deal Dashboard', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', caption: 'Analytics View' },
    { url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop', caption: 'Deal Pipeline' },
  ],
  
  results: [
    { value: '2 mo', label: 'MVP Launch', description: 'From concept to live product in just 8 weeks' },
    { value: '$3.2K', label: 'MRR', description: 'Monthly recurring revenue within 6 months' },
    { value: '85%', label: 'Time Saved', description: 'Reduction in manual deal sourcing time' },
    { value: '50+', label: 'Active Users', description: 'Investment professionals using the platform' },
  ],
  
  testimonial: {
    quote: 'Sommo delivered our MVP in just 2 months. Their no-code expertise allowed us to validate our idea and secure funding faster than we ever imagined possible. The AI integration works seamlessly.',
    author: 'John Davidson',
    role: 'Founder & CEO',
  },
  
  nextCase: {
    title: 'Loan Management Platform',
    href: '/cases/loan-management',
  },
};

export const MASoftwarePage = () => {
  return <CaseStudyPageLayout {...caseData} />;
};

