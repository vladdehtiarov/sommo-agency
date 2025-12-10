import { CaseStudyPageLayout } from '../../components/CaseStudyPageLayout';

const caseData = {
  title: 'Plannly',
  category: 'Management Tool • SaaS',
  description: 'An employee management app that was released in just 3.5 months using no-code technology. The platform helped the company secure $1.2M in funding post-launch.',
  heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
  color: '#FF61DC',
  client: 'Plannly Inc.',
  timeline: '3.5 months',
  services: ['No-Code Development', 'Product Strategy', 'UI/UX Design'],
  
  challenge: 'Plannly needed to quickly build and launch an employee management solution to compete in a crowded market. Traditional development would have taken 12+ months and required significant upfront investment. They needed a way to validate their concept, attract users, and secure funding—all within a tight timeline and budget.',
  
  solution: [
    {
      title: 'Rapid MVP Development',
      description: 'Using Bubble, we built a fully functional MVP in just 14 weeks. The platform included employee scheduling, time tracking, team communication, and basic HR features—everything needed to validate the concept.',
    },
    {
      title: 'Smart Scheduling Engine',
      description: 'Developed an intelligent scheduling system that considers employee availability, skills, labor laws, and business needs to create optimal schedules automatically, reducing manager workload by 80%.',
    },
    {
      title: 'Mobile-First Design',
      description: 'Created a responsive web app optimized for mobile devices, allowing employees to check schedules, request time off, and swap shifts directly from their phones.',
    },
    {
      title: 'Team Communication Hub',
      description: 'Built integrated messaging and announcement features so managers can communicate with their teams instantly, with read receipts and shift-specific group chats.',
    },
  ],
  
  techStack: [
    { name: 'Bubble', icon: '🫧' },
    { name: 'Xano', icon: '🔧' },
    { name: 'Twilio', icon: '📱' },
    { name: 'SendGrid', icon: '📧' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Intercom', icon: '💬' },
    { name: 'Mixpanel', icon: '📊' },
    { name: 'Zapier', icon: '⚡' },
  ],
  
  gallery: [
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop', caption: 'Team Dashboard', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop', caption: 'Schedule View' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', caption: 'Team Communication' },
  ],
  
  results: [
    { value: '$1.2M', label: 'Funding', description: 'Seed funding secured after launch' },
    { value: '3.5 mo', label: 'Time to Market', description: 'From concept to live product' },
    { value: '500+', label: 'Companies', description: 'Businesses using Plannly' },
    { value: '80%', label: 'Time Saved', description: 'Reduction in scheduling time for managers' },
  ],
  
  testimonial: {
    quote: 'Sommo helped us go from idea to funded startup in under 6 months. The speed of no-code development gave us a massive competitive advantage.',
    author: 'Michael Chen',
    role: 'Co-Founder & CEO, Plannly',
  },
  
  nextCase: {
    title: 'Dyvo',
    href: '/cases/dyvo',
  },
};

export const PlannlyPage = () => {
  return <CaseStudyPageLayout {...caseData} />;
};

