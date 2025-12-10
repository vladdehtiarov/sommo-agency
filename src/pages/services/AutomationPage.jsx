import { ServicePageLayout } from '../../components/ServicePageLayout';

const automationData = {
  title: 'Automation & Integration',
  subtitle: 'Connect your tools and automate workflows. Eliminate manual work and let technology do the heavy lifting.',
  description: 'Business automation transforms how companies operate by connecting disparate systems and automating repetitive tasks. We build seamless integrations using Zapier, Make, and custom APIs to eliminate manual work, reduce errors, and free your team to focus on what matters most.',
  gradient: 'linear-gradient(135deg, #FF8C42 0%, #E07530 100%)',
  icon: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M8 24H16M32 24H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 8V16M24 32V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 20L28 28M28 20L20 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  features: [
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks across your organization — from lead routing to invoice processing.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="28" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="18" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 20V22C14 23.1046 14.8954 24 16 24H18M34 20V22C34 23.1046 33.1046 24 32 24H30M24 24V28" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'System Integration',
      description: 'Connect CRM, ERP, accounting, marketing tools — create a unified ecosystem from disconnected apps.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="34" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="14" cy="34" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="34" cy="34" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 14H28M14 20V28M34 20V28M20 34H28" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Data Synchronization',
      description: 'Keep data consistent across all platforms with real-time or scheduled sync between systems.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M32 16H40V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 32H8V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 16L28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 32L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Email & Communication',
      description: 'Automate email sequences, notifications, Slack alerts, and customer communication workflows.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="12" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 16L24 28L42 16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Document Automation',
      description: 'Generate contracts, reports, invoices automatically. Collect signatures and route approvals.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M28 8H14C12.8954 8 12 8.89543 12 10V38C12 39.1046 12.8954 40 14 40H34C35.1046 40 36 39.1046 36 38V16L28 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M28 8V16H36" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 26L22 30L30 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Monitoring & Alerts',
      description: 'Set up intelligent monitoring with alerts for anomalies, thresholds, and business-critical events.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 8V12M36.7279 11.2721L33.8995 14.1005M40 24H36M36.7279 36.7279L33.8995 33.8995M24 36V40M11.2721 36.7279L14.1005 33.8995M8 24H12M11.2721 11.2721L14.1005 14.1005" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
  ],
  tools: [
    { name: 'Zapier', icon: '⚡' },
    { name: 'Make', icon: '🔧' },
    { name: 'n8n', icon: '🔄' },
    { name: 'Pipedream', icon: '🌊' },
    { name: 'Webhooks', icon: '🪝' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Airtable', icon: '📊' },
    { name: 'Notion', icon: '📝' },
    { name: 'Slack', icon: '💬' },
    { name: 'HubSpot', icon: '🧡' },
  ],
  process: [
    {
      title: 'Process Mapping',
      description: 'Document your current workflows, identify bottlenecks, and map out automation opportunities.',
      duration: '1 week',
    },
    {
      title: 'Integration Planning',
      description: 'Design the data flow between systems, define triggers and actions, plan error handling.',
      duration: '1 week',
    },
    {
      title: 'Build Automations',
      description: 'Create and configure integrations, set up workflows, build custom connectors if needed.',
      duration: '2-4 weeks',
    },
    {
      title: 'Testing & Validation',
      description: 'Test all scenarios, verify data accuracy, ensure error handling works correctly.',
      duration: '1 week',
    },
    {
      title: 'Launch & Optimize',
      description: 'Deploy automations, monitor performance, and continuously optimize based on results.',
      duration: 'Ongoing',
    },
  ],
  caseStudies: [
    {
      title: 'Sales Automation',
      category: 'CRM Integration',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      result: '40% faster lead response',
    },
    {
      title: 'Invoice Processing',
      category: 'Finance Automation',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      result: '90% manual work eliminated',
    },
    {
      title: 'Logistics Sync',
      category: 'Operations',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      result: 'Real-time inventory tracking',
    },
  ],
  faq: [
    {
      question: 'What can be automated?',
      answer: 'Almost any repetitive digital task: lead routing, data entry, email sequences, report generation, invoice processing, customer onboarding, inventory updates, social media posting, and much more.',
    },
    {
      question: 'How reliable are automations?',
      answer: 'Very reliable when built correctly. We implement error handling, retry logic, monitoring, and alerts. Most automations achieve 99%+ success rates. Critical processes include human review steps.',
    },
    {
      question: 'Will automation replace my team?',
      answer: 'No — automation handles repetitive tasks so your team can focus on strategic, creative, and relationship-building work. It augments human capabilities rather than replacing them.',
    },
    {
      question: 'How much can I save with automation?',
      answer: 'Clients typically save 10-40 hours per week on automated tasks. ROI is often achieved within 2-3 months. We help calculate expected savings during the discovery phase.',
    },
    {
      question: 'What if the connected apps change their APIs?',
      answer: 'We use established platforms (Zapier, Make) that maintain connections. For custom integrations, we build with API versioning in mind and include maintenance in our support packages.',
    },
  ],
};

export const AutomationPage = () => {
  return <ServicePageLayout {...automationData} />;
};

