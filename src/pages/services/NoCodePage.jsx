import { ServicePageLayout } from '../../components/ServicePageLayout';

const noCodeData = {
  title: 'No-Code Development',
  subtitle: 'Build powerful applications without writing a single line of code. Launch your MVP in weeks, not months.',
  description: 'No-code development empowers businesses to bring ideas to life at unprecedented speed. Using platforms like Bubble, WeWeb, and FlutterFlow, we build fully functional web and mobile applications with complex logic, integrations, and beautiful interfaces — all without traditional coding. Perfect for MVPs, internal tools, and rapid prototyping.',
  gradient: 'linear-gradient(135deg, #00FFC2 0%, #00D4A1 100%)',
  icon: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="8" y="8" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <rect x="26" y="8" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="26" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <rect x="26" y="26" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="24" cy="24" r="4" fill="currentColor"/>
    </svg>
  ),
  features: [
    {
      title: 'Rapid MVP Development',
      description: 'Launch your minimum viable product in 4-8 weeks instead of 6-12 months. Validate ideas quickly and iterate based on real user feedback.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 8L24 24L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Visual Development',
      description: 'Drag-and-drop interface building with pixel-perfect control. Create stunning UIs that match your brand without design-to-code handoff.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="8" height="8" rx="1" fill="currentColor"/>
          <rect x="26" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="26" width="20" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Database & Backend',
      description: 'Full backend capabilities including database design, user authentication, API integrations, and complex business logic.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="12" rx="14" ry="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 12V36C10 38.2091 16.268 40 24 40C31.732 40 38 38.2091 38 36V12" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 24C10 26.2091 16.268 28 24 28C31.732 28 38 26.2091 38 24" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Third-Party Integrations',
      description: 'Connect with Stripe, Twilio, SendGrid, Airtable, Google services, and thousands of other tools via APIs and plugins.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 15L20 20M33 15L28 20M15 33L20 28M33 33L28 28" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Responsive Design',
      description: 'Applications that look and work perfectly on desktop, tablet, and mobile devices with true responsive layouts.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="34" y="14" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 24H30" stroke="currentColor" strokeWidth="2"/>
          <circle cx="38" cy="26" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: 'Scalable Architecture',
      description: 'Built on enterprise-grade infrastructure that scales automatically. Handle thousands of users without performance issues.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M8 40V28M18 40V20M28 40V24M38 40V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 28L18 20L28 24L38 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ],
  tools: [
    { name: 'Bubble', icon: '🫧' },
    { name: 'WeWeb', icon: '🌐' },
    { name: 'FlutterFlow', icon: '📱' },
    { name: 'Webflow', icon: '🎨' },
    { name: 'Airtable', icon: '📊' },
    { name: 'Xano', icon: '🔧' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Twilio', icon: '📞' },
    { name: 'OpenAI', icon: '🤖' },
  ],
  process: [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define user flows, and create a detailed project roadmap with clear milestones.',
      duration: '1 week',
    },
    {
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes. Finalize the UI/UX design with your feedback.',
      duration: '1-2 weeks',
    },
    {
      title: 'Development Sprint',
      description: 'Build the application using no-code tools. Regular demos and feedback sessions throughout.',
      duration: '3-5 weeks',
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and browsers. Fix bugs and optimize performance.',
      duration: '1 week',
    },
    {
      title: 'Launch & Support',
      description: 'Deploy to production, provide training, and offer ongoing support and maintenance.',
      duration: 'Ongoing',
    },
  ],
  caseStudies: [
    {
      title: 'M&A Software Platform',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      result: '$3.2K MRR in 6 months',
    },
    {
      title: 'Plannly',
      category: 'HR Tech',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      result: '$1.2M funding secured',
    },
    {
      title: 'Loan Management',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      result: '10K+ users onboarded',
    },
  ],
  faq: [
    {
      question: 'What can be built with no-code?',
      answer: 'Almost any web application: marketplaces, SaaS platforms, CRMs, booking systems, social networks, internal tools, customer portals, mobile apps, and more. If you can describe it, we can probably build it with no-code.',
    },
    {
      question: 'Is no-code suitable for production applications?',
      answer: 'Absolutely. Modern no-code platforms like Bubble and WeWeb power thousands of production apps with millions of users. They offer enterprise-grade security, scalability, and reliability.',
    },
    {
      question: 'How much does no-code development cost?',
      answer: 'No-code projects typically cost 50-70% less than traditional development. An MVP that might cost $100K+ with traditional dev can often be built for $20-40K with no-code, and in a fraction of the time.',
    },
    {
      question: 'Can I make changes after launch?',
      answer: 'Yes! One of the biggest advantages of no-code is the ability to make changes quickly. You can update your app yourself or have us make changes rapidly without lengthy development cycles.',
    },
    {
      question: 'What about performance and speed?',
      answer: 'No-code platforms have improved dramatically. With proper optimization, no-code apps perform comparably to traditional apps. We follow best practices to ensure fast load times and smooth user experiences.',
    },
  ],
};

export const NoCodePage = () => {
  return <ServicePageLayout {...noCodeData} />;
};

