import { CaseStudyPageLayout } from '../../components/CaseStudyPageLayout';

const caseData = {
  title: 'Miren Fintech',
  category: 'Fintech • API Platform',
  description: 'A data aggregation and management platform for microlenders that provides API integration and Loan Origination Software (LOS). The platform serves 200+ lenders processing $5M+ in loans.',
  heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop',
  color: '#A855F7',
  client: 'Miren',
  timeline: '5 months',
  services: ['Low-Code Development', 'API Development', 'Database Design'],
  
  challenge: 'Miren needed to build a platform that could aggregate data from multiple sources for microlenders, provide a robust API for third-party integrations, and offer a complete Loan Origination Software. The solution needed to handle complex financial calculations, ensure data security compliance, and scale to support hundreds of lending institutions.',
  
  solution: [
    {
      title: 'Data Aggregation Engine',
      description: 'Built a powerful data aggregation system that pulls information from multiple sources including credit bureaus, bank feeds, and alternative data providers to create comprehensive borrower profiles.',
    },
    {
      title: 'RESTful API Platform',
      description: 'Developed a well-documented API that allows lenders to integrate Miren\'s data and services into their existing workflows. The API supports real-time data queries, webhook notifications, and batch processing.',
    },
    {
      title: 'Loan Origination Software',
      description: 'Created a complete LOS solution with application intake, automated underwriting rules, document management, e-signatures, and disbursement tracking—all customizable per lender.',
    },
    {
      title: 'Compliance & Reporting',
      description: 'Implemented comprehensive audit logging, regulatory reporting tools, and data retention policies to ensure lenders meet all compliance requirements.',
    },
  ],
  
  techStack: [
    { name: 'Bubble', icon: '🫧' },
    { name: 'Xano', icon: '🔧' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Plaid', icon: '🏦' },
    { name: 'Experian API', icon: '📊' },
    { name: 'DocuSign', icon: '✍️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Postman', icon: '📮' },
  ],
  
  gallery: [
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop', caption: 'Analytics Dashboard', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', caption: 'API Documentation' },
    { url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop', caption: 'Loan Pipeline' },
  ],
  
  results: [
    { value: '200+', label: 'Lenders', description: 'Lending institutions on the platform' },
    { value: '$5M+', label: 'Loans', description: 'Total loan volume processed' },
    { value: '10M+', label: 'API Calls', description: 'Monthly API requests handled' },
    { value: '99.9%', label: 'Uptime', description: 'Platform availability' },
  ],
  
  testimonial: {
    quote: 'Miren\'s platform has become the backbone of our lending operations. The API is reliable, the documentation is excellent, and the Sommo team provided exceptional support throughout development.',
    author: 'Robert Thompson',
    role: 'CTO, Miren',
  },
  
  nextCase: {
    title: 'M&A Software Platform',
    href: '/cases/ma-software',
  },
};

export const MirenPage = () => {
  return <CaseStudyPageLayout {...caseData} />;
};

