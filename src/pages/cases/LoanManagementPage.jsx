import { CaseStudyPageLayout } from '../../components/CaseStudyPageLayout';

const caseData = {
  title: 'Loan Management Platform',
  category: 'Fintech • Web App',
  description: 'A user-friendly online experience for a cutting-edge loan management platform that provides transparency, efficiency, and security to the private lending industry.',
  heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop',
  color: '#00FFC2',
  client: 'Private Lending Company',
  timeline: '3 months',
  services: ['No-Code Development', 'UI/UX Design', 'Payment Integration'],
  
  challenge: 'The private lending industry was struggling with outdated systems and manual processes. Our client needed a modern platform that could handle loan origination, servicing, and management while providing borrowers with a transparent view of their loans. The solution needed to integrate with multiple payment providers and comply with financial regulations.',
  
  solution: [
    {
      title: 'Streamlined Loan Origination',
      description: 'Built an intuitive application process that guides borrowers through each step, with automated document collection, credit checks, and approval workflows that reduce processing time by 70%.',
    },
    {
      title: 'Borrower Portal',
      description: 'Created a comprehensive self-service portal where borrowers can view loan details, make payments, download statements, and communicate with their loan servicer—all in one place.',
    },
    {
      title: 'Automated Payment Processing',
      description: 'Integrated Stripe and ACH payment systems with automated payment scheduling, late fee calculations, and reconciliation. Borrowers can set up autopay or make one-time payments easily.',
    },
    {
      title: 'Admin Dashboard',
      description: 'Developed a powerful back-office system for loan officers to manage the entire portfolio, generate reports, handle collections, and track performance metrics in real-time.',
    },
  ],
  
  techStack: [
    { name: 'Bubble', icon: '🫧' },
    { name: 'Webflow', icon: '🎨' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Plaid', icon: '🏦' },
    { name: 'DocuSign', icon: '✍️' },
    { name: 'Twilio', icon: '📱' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Zapier', icon: '⚡' },
  ],
  
  gallery: [
    { url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop', caption: 'Loan Dashboard', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop', caption: 'Payment Interface' },
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', caption: 'Analytics Overview' },
  ],
  
  results: [
    { value: '10K+', label: 'Users', description: 'Borrowers actively using the platform' },
    { value: '$2M+', label: 'Processed', description: 'Total transaction volume through the platform' },
    { value: '70%', label: 'Faster', description: 'Reduction in loan processing time' },
    { value: '95%', label: 'Satisfaction', description: 'Customer satisfaction score' },
  ],
  
  testimonial: {
    quote: 'The platform transformed how we operate. What used to take days now takes hours. Our borrowers love the transparency and ease of use.',
    author: 'Sarah Mitchell',
    role: 'Operations Director',
  },
  
  nextCase: {
    title: 'Plannly',
    href: '/cases/plannly',
  },
};

export const LoanManagementPage = () => {
  return <CaseStudyPageLayout {...caseData} />;
};

