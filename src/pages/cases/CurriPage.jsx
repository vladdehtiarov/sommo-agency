import { CaseStudyPageLayout } from '../../components/CaseStudyPageLayout';

const caseData = {
  title: 'Curri Logistics',
  category: 'Logistics • Mobile & Web',
  description: 'Internal business applications for a logistics company in the USA—a mobile app for drivers and a web admin panel for warehouse managers. The platform handles 100K+ deliveries with 500+ drivers.',
  heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop',
  color: '#00D4FF',
  client: 'Curri',
  timeline: '4 months',
  services: ['No-Code Development', 'Mobile App', 'Real-time Systems'],
  
  challenge: 'Curri needed a comprehensive logistics management system to coordinate their growing network of drivers and warehouses. The existing system was a patchwork of spreadsheets and third-party tools that couldn\'t scale. They needed real-time tracking, automated dispatch, and seamless communication—without the 18-month timeline traditional development would require.',
  
  solution: [
    {
      title: 'Driver Mobile App',
      description: 'Built a native-like mobile app for drivers with GPS tracking, route optimization, delivery confirmation with photo proof, and real-time communication with dispatch. Works offline and syncs when connected.',
    },
    {
      title: 'Warehouse Management Portal',
      description: 'Created a web-based admin panel for warehouse managers to manage inventory, process orders, assign drivers, and track all deliveries in real-time with a map view showing driver locations.',
    },
    {
      title: 'Automated Dispatch System',
      description: 'Developed an intelligent dispatch algorithm that considers driver location, availability, vehicle capacity, and delivery windows to automatically assign the most efficient routes.',
    },
    {
      title: 'Real-time Tracking',
      description: 'Implemented live tracking that updates every 30 seconds, allowing customers and warehouse staff to see exactly where their delivery is at any moment.',
    },
  ],
  
  techStack: [
    { name: 'Bubble', icon: '🫧' },
    { name: 'FlutterFlow', icon: '📱' },
    { name: 'Google Maps', icon: '🗺️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Twilio', icon: '📞' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Xano', icon: '🔧' },
    { name: 'Zapier', icon: '⚡' },
  ],
  
  gallery: [
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop', caption: 'Dispatch Dashboard', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop', caption: 'Driver App' },
    { url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop', caption: 'Live Tracking Map' },
  ],
  
  results: [
    { value: '100K+', label: 'Deliveries', description: 'Successfully completed deliveries' },
    { value: '500+', label: 'Drivers', description: 'Active drivers using the platform' },
    { value: '40%', label: 'Efficiency', description: 'Increase in delivery efficiency' },
    { value: '99.5%', label: 'Uptime', description: 'Platform reliability' },
  ],
  
  testimonial: {
    quote: 'Our operations transformed completely. What used to require a team of dispatchers manually coordinating is now automated. The real-time tracking has dramatically reduced customer complaints.',
    author: 'David Rodriguez',
    role: 'VP of Operations, Curri',
  },
  
  nextCase: {
    title: 'Miren Fintech',
    href: '/cases/miren',
  },
};

export const CurriPage = () => {
  return <CaseStudyPageLayout {...caseData} />;
};

