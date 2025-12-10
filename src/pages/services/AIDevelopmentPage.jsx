import { ServicePageLayout } from '../../components/ServicePageLayout';

const aiData = {
  title: 'AI Development',
  subtitle: 'Integrate cutting-edge artificial intelligence into your products. Make your applications smarter and more efficient.',
  description: 'Artificial intelligence is transforming how businesses operate. We help you harness the power of AI — from ChatGPT-powered features to custom machine learning models — making advanced technology accessible and practical for your specific use cases.',
  gradient: 'linear-gradient(135deg, #FF61DC 0%, #D44BB8 100%)',
  icon: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="36" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 16V20M24 20L12 28M24 20L36 28" stroke="currentColor" strokeWidth="2"/>
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
    </svg>
  ),
  features: [
    {
      title: 'ChatGPT Integration',
      description: 'Add conversational AI to your apps — chatbots, content generation, document analysis, and intelligent assistants.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="26" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 20H32M16 26H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 34L20 40H28L24 34Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Image & Vision AI',
      description: 'Implement image recognition, object detection, facial analysis, and visual content generation.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 32L16 24L24 30L32 22L42 30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Document Processing',
      description: 'Extract data from PDFs, invoices, contracts. Automate document classification and information retrieval.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M28 8H14C12.8954 8 12 8.89543 12 10V38C12 39.1046 12.8954 40 14 40H34C35.1046 40 36 39.1046 36 38V16L28 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M28 8V16H36" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 24H30M18 30H30M18 36H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Predictive Analytics',
      description: 'Build models that forecast trends, customer behavior, demand, and business outcomes.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M8 36L16 28L24 32L32 20L40 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="40" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12V36H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Voice & Speech',
      description: 'Speech-to-text, text-to-speech, voice commands, and audio analysis for hands-free interfaces.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="18" y="8" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 36V42M18 42H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Custom AI Models',
      description: 'Train and deploy custom machine learning models tailored to your specific business needs and data.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 10V14M24 34V38M38 24H34M14 24H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ],
  tools: [
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Claude AI', icon: '🧠' },
    { name: 'Gemini', icon: '♊' },
    { name: 'Midjourney', icon: '🎨' },
    { name: 'DALL-E', icon: '🖼️' },
    { name: 'Whisper', icon: '🎤' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Pinecone', icon: '🌲' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'TensorFlow', icon: '📊' },
  ],
  process: [
    {
      title: 'Use Case Analysis',
      description: 'Identify where AI can add the most value to your business. Define success metrics and requirements.',
      duration: '1 week',
    },
    {
      title: 'Data Assessment',
      description: 'Evaluate your data quality, availability, and structure. Plan data collection if needed.',
      duration: '1 week',
    },
    {
      title: 'AI Prototype',
      description: 'Build a working proof-of-concept to validate the AI solution meets your needs.',
      duration: '2-3 weeks',
    },
    {
      title: 'Integration & Training',
      description: 'Integrate AI into your application, fine-tune models, and optimize performance.',
      duration: '3-4 weeks',
    },
    {
      title: 'Monitoring & Improvement',
      description: 'Deploy with monitoring, gather feedback, and continuously improve AI accuracy.',
      duration: 'Ongoing',
    },
  ],
  caseStudies: [
    {
      title: 'Dyvo',
      category: 'AI Art Generator',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      result: '50K+ downloads, 4.8★ rating',
      href: '/cases/dyvo',
    },
    {
      title: 'M&A Intelligence',
      category: 'Deal Sourcing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      result: 'AI-powered deal matching',
      href: '/cases/ma-software',
    },
    {
      title: 'Loan Management',
      category: 'Fintech',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      result: '10K+ users onboarded',
      href: '/cases/loan-management',
    },
  ],
  faq: [
    {
      question: 'What AI capabilities can you add to my app?',
      answer: 'We can integrate conversational AI (chatbots, assistants), content generation, image recognition, document processing, voice interfaces, recommendation engines, predictive analytics, and custom ML models.',
    },
    {
      question: 'How much does AI integration cost?',
      answer: 'AI integration ranges from $5K for simple ChatGPT features to $50K+ for custom ML models. Most projects fall in the $10K-30K range. API costs (OpenAI, etc.) are typically $50-500/month depending on usage.',
    },
    {
      question: 'Do I need a lot of data for AI features?',
      answer: 'Not always. For pre-trained models like ChatGPT, you need minimal data. For custom models or fine-tuning, you\'ll need relevant training data. We help assess your data requirements during discovery.',
    },
    {
      question: 'How do you handle AI accuracy and errors?',
      answer: 'We implement confidence thresholds, human-in-the-loop workflows for critical decisions, extensive testing, and monitoring systems. AI is treated as augmentation, not replacement, for important processes.',
    },
    {
      question: 'Is my data safe when using AI?',
      answer: 'Yes. We use enterprise AI APIs with data protection agreements, implement data anonymization where needed, and can deploy on-premise or private cloud solutions for sensitive data.',
    },
  ],
};

export const AIDevelopmentPage = () => {
  return <ServicePageLayout {...aiData} />;
};

