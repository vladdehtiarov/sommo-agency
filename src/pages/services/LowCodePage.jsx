import { ServicePageLayout } from '../../components/ServicePageLayout';

const lowCodeData = {
  title: 'Low-Code Solutions',
  subtitle: 'Accelerate development with visual builders combined with custom code. The best of both worlds.',
  description: 'Low-code development bridges the gap between no-code simplicity and traditional coding power. We use visual development platforms enhanced with custom code to build complex applications faster, while maintaining full flexibility for unique business requirements and advanced integrations.',
  gradient: 'linear-gradient(135deg, #7B61FF 0%, #5A45D6 100%)',
  icon: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M14 16L8 24L14 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 16L40 24L34 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 12L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  features: [
    {
      title: 'Visual + Code Hybrid',
      description: 'Combine drag-and-drop interfaces with custom JavaScript, Python, or SQL when you need more power.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 10L26 14L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M38 10L42 14L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M36 8L32 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="6" y="26" width="36" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Complex Business Logic',
      description: 'Handle intricate workflows, calculations, and conditional processes that go beyond standard no-code.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="36" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="36" cy="36" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 18V24L12 30M24 24L36 30" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Enterprise Integrations',
      description: 'Connect with legacy systems, custom APIs, and enterprise software with full data transformation capabilities.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="28" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="8" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="28" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 14H28M14 20V28M34 20V28M20 34H28" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Custom Components',
      description: 'Build reusable UI components with custom styling and behavior that match your brand perfectly.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="26" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="26" width="20" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Version Control',
      description: 'Full Git integration for code versioning, team collaboration, and deployment pipelines.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 16V32M20 12H28C30.2091 12 32 13.7909 32 16V20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Testing & CI/CD',
      description: 'Automated testing, staging environments, and continuous deployment for production-ready applications.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M12 24L20 32L36 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
  ],
  tools: [
    { name: 'WeWeb', icon: '🌐' },
    { name: 'Wized', icon: '⚡' },
    { name: 'Xano', icon: '🔧' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'GraphQL', icon: '◼️' },
    { name: 'Docker', icon: '🐳' },
  ],
  process: [
    {
      title: 'Technical Discovery',
      description: 'Deep dive into your requirements, existing systems, and technical constraints to design the optimal solution.',
      duration: '1-2 weeks',
    },
    {
      title: 'Architecture Design',
      description: 'Plan the system architecture, database schema, API structure, and integration points.',
      duration: '1 week',
    },
    {
      title: 'Hybrid Development',
      description: 'Build core functionality with low-code tools, adding custom code where needed for complex features.',
      duration: '4-8 weeks',
    },
    {
      title: 'Integration & Testing',
      description: 'Connect all systems, implement automated tests, and ensure everything works together seamlessly.',
      duration: '1-2 weeks',
    },
    {
      title: 'Deployment & Optimization',
      description: 'Launch with monitoring, set up CI/CD pipelines, and optimize performance.',
      duration: 'Ongoing',
    },
  ],
  caseStudies: [
    {
      title: 'Miren Fintech',
      category: 'API Platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      result: '200+ lenders integrated',
    },
    {
      title: 'Curri Logistics',
      category: 'Operations',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      result: '100K+ deliveries tracked',
    },
    {
      title: 'Enterprise Dashboard',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      result: '50% faster reporting',
    },
  ],
  faq: [
    {
      question: 'When should I choose low-code over no-code?',
      answer: 'Choose low-code when you need complex integrations with legacy systems, advanced business logic, custom algorithms, or when your team wants more control over the codebase for future maintenance.',
    },
    {
      question: 'Can my developers work with the codebase?',
      answer: 'Yes! Low-code solutions generate readable code that your team can extend, maintain, and even migrate to fully custom solutions if needed. We provide full documentation and knowledge transfer.',
    },
    {
      question: 'How do you handle complex integrations?',
      answer: 'We use backend platforms like Xano or Supabase combined with custom API connectors. For enterprise systems (SAP, Salesforce, etc.), we build middleware layers that handle data transformation and synchronization.',
    },
    {
      question: 'Is low-code suitable for enterprise applications?',
      answer: 'Absolutely. Low-code platforms now meet enterprise requirements including SOC 2 compliance, single sign-on (SSO), role-based access control, audit logs, and dedicated infrastructure.',
    },
    {
      question: 'What happens if I outgrow the platform?',
      answer: 'Low-code solutions are designed for extensibility. You can gradually add more custom code, or we can help you migrate critical components to fully custom solutions while keeping the low-code foundation.',
    },
  ],
};

export const LowCodePage = () => {
  return <ServicePageLayout {...lowCodeData} />;
};

