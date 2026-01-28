import React from 'react';

// Shared Icons
const Icons = {
    Speed: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="24" cy="24" r="20" />
            <path d="M24 14V24L32 32" />
            <path d="M24 8V4" />
        </svg>
    ),
    Scale: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 44L44 4" />
            <path d="M44 4v20" />
            <path d="M44 4H24" />
        </svg>
    ),
    Security: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24 4L6 12v14c0 13 8 24 18 26 10-2 18-13 18-26V12L24 4z" />
        </svg>
    ),
    Integration: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="6" />
            <circle cx="36" cy="36" r="6" />
            <path d="M18 18l12 12" />
            <circle cx="36" cy="12" r="6" />
            <circle cx="12" cy="36" r="6" />
            <path d="M18 30l12-12" />
        </svg>
    ),
    Database: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="24" cy="10" rx="20" ry="6" />
            <path d="M4 10v28c0 3.3 9 6 20 6s20-2.7 20-6V10" />
            <path d="M4 24c0 3.3 9 6 20 6s20-2.7 20-6" />
        </svg>
    ),
    Mobile: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="10" y="4" width="28" height="40" rx="4" />
            <path d="M22 38h4" />
        </svg>
    )
};

export const toolsData = {
    'bubble-development': {
        title: 'Bubble Development Agency',
        subtitle: 'Build powerful, scalable web applications with the world\'s most advanced no-code platform.',
        description: 'We are Bubble experts. From heavy-duty SaaS platforms to complex marketplaces, we push Bubble to its limits. We build secure, scalable, and pixel-perfect applications that feel like code, but launch 10x faster.',
        gradient: 'linear-gradient(135deg, #00FFC2 0%, #2938FF 100%)', // Bubble-ish colors
        icon: Icons.Scale,
        seo: {
            title: 'Bubble Development Agency | Hire Expert Bubble Developers',
            description: 'Top-rated Bubble.io agency. We build scalable SaaS, marketplaces, and internal tools 10x faster. Expert Bubble developers for your MVP or enterprise app.',
            keywords: 'bubble development, bubble.io agency, hire bubble developers, bubble experts, no-code saas, bubble app builder'
        },
        features: [
            {
                title: 'Complex SaaS Platforms',
                description: 'We handle recurring payments, multi-tenancy, complex workflows, and data-heavy logic with ease.',
                icon: Icons.Scale
            },
            {
                title: 'Pixel-Perfect Design',
                description: 'We don\'t just use templates. We implement fully custom, responsive designs that match your brand identity.',
                icon: Icons.Mobile
            },
            {
                title: 'API Integrations',
                description: 'Connect your Bubble app to OpenAI, Stripe, SendGrid, Algolia, and any legacy systems via API Connector.',
                icon: Icons.Integration
            }
        ],
        tools: [
            { name: 'Bubble', icon: '🫧' },
            { name: 'Figma', icon: '🎨' },
            { name: 'Make', icon: '⚡' },
            { name: 'Stripe', icon: '💳' }
        ],
        process: [
            { title: 'Discovery', description: 'Database framing & logic planning', duration: '1 week' },
            { title: 'Development', description: 'Agile sprints in Bubble', duration: '3-6 weeks' },
            { title: 'Launch', description: 'QA, Domain setup & Go-live', duration: '1 week' }
        ],
        faq: [
            { question: 'Is Bubble scalable?', answer: 'Yes. With proper database structure and "Resultu" backend workflows, Bubble handles thousands of concurrent users.' },
            { question: 'Do I own the code?', answer: 'You own the application logic, design, and data. Bubble hosts the infrastructure.' }
        ]
    },

    'weweb-development': {
        title: 'WeWeb Development Experts',
        subtitle: 'Frontend freedom with WeWeb. Backend power with Supabase or Xano.',
        description: 'We specialize in decoupling frontend and backend. Using WeWeb for stunning, secure frontends and Supabase/Xano for robust backends, we build enterprise-grade web apps without the code debt.',
        gradient: 'linear-gradient(135deg, #CE3DF3 0%, #4D61FC 100%)', // WeWeb pink/purple
        icon: Icons.Speed,
        seo: {
            title: 'WeWeb Agency | WeWeb & Supabase Development Experts',
            description: 'Building secure web apps with WeWeb and Supabase/Xano. Decoupled architecture for scalable no-code applications. Hire WeWeb experts.',
            keywords: 'weweb development, weweb agency, weweb xano, weweb supabase, hire weweb developers, no-code frontend'
        },
        features: [
            {
                title: 'Decoupled Architecture',
                description: 'Total separation of concerns. Your data lives in Supabase/Xano, making it portable and secure.',
                icon: Icons.Security
            },
            {
                title: 'Pixel-Perfect Frontend',
                description: 'WeWeb generates standard Vue.js code, ensuring high performance and design freedom.',
                icon: Icons.Mobile
            },
            {
                title: 'Enterprise Security',
                description: 'Since the frontend is separate, you adhere to strict data privacy and security compliance standards.',
                icon: Icons.Security
            }
        ],
        tools: [
            { name: 'WeWeb', icon: '🌐' },
            { name: 'Supabase', icon: '⚡' },
            { name: 'Xano', icon: '🔧' },
            { name: 'PostgreSQL', icon: '🐘' }
        ],
        process: [
            { title: 'Architecture', description: 'Schema design in Supabase/Xano', duration: '1 week' },
            { title: 'Frontend', description: 'Building UI in WeWeb', duration: '2-4 weeks' },
            { title: 'Integration', description: 'Connecting API & Logic', duration: '1-2 weeks' }
        ],
        faq: [
            { question: 'Why WeWeb over Bubble?', answer: 'If you need code export (Vue.js) or strict backend separation (SQL), WeWeb + Supabase is the superior choice.' },
            { question: 'Is it SEO friendly?', answer: 'Yes, WeWeb provides excellent capabilities for SEO and performance optimization.' }
        ]
    },

    'flutterflow-development': {
        title: 'FlutterFlow Mobile Development',
        subtitle: 'Native iOS and Android apps built visually. Export clean Flutter code.',
        description: 'We build high-performance mobile applications using FlutterFlow. Get native iOS and Android binaries, clean code export, and simple Firebase/Supabase integration. Launch on the App Store in weeks.',
        gradient: 'linear-gradient(135deg, #4A4AF4 0%, #15D2B6 100%)', // FlutterFlow teal/blue
        icon: Icons.Mobile,
        seo: {
            title: 'FlutterFlow Agency | Native Mobile App Development',
            description: 'Expert FlutterFlow development for iOS and Android. Native performance, code export, and Firebase integration. Hire FlutterFlow developers.',
            keywords: 'flutterflow agency, flutterflow developers, no-code mobile app, ios android development, hire flutterflow expert'
        },
        features: [
            {
                title: 'Native Performance',
                description: 'Apps run at 60fps. No webview wrappers. Real native performance on both iOS and Android.',
                icon: Icons.Speed
            },
            {
                title: 'Code Export',
                description: 'We can export the full Flutter code for you, ensuring you are never locked into the platform.',
                icon: Icons.Security
            },
            {
                title: 'Advanced Features',
                description: 'Push notifications, maps, biometrics, and offline mode support out of the box.',
                icon: Icons.Mobile
            }
        ],
        tools: [
            { name: 'FlutterFlow', icon: '📱' },
            { name: 'Firebase', icon: '🔥' },
            { name: 'Supabase', icon: '⚡' },
            { name: 'Codemagic', icon: '🪄' }
        ],
        process: [
            { title: 'UX/UI', description: 'Mobile-first design system', duration: '1-2 weeks' },
            { title: 'Build', description: 'FlutterFlow development', duration: '3-5 weeks' },
            { title: 'Store Submit', description: 'App Store & Play Store approval', duration: '1 week' }
        ],
        faq: [
            { question: 'Can I publish to App Store?', answer: 'Yes, we handle the entire submission process for both Apple App Store and Google Play.' }
        ]
    },

    'make-automation': {
        title: 'Make (Integromat) Automation',
        subtitle: 'Connect your apps, automate your workflows, and save 1000s of hours.',
        description: 'We are automation architects. We use Make.com (formerly Integromat) to connect your disparate tools into a unified, automated machine. From simple data syncs to complex enterprise logic using webhooks and custom APIs.',
        gradient: 'linear-gradient(135deg, #7d26cd 0%, #e6007e 100%)', // Make purple
        icon: Icons.Integration,
        seo: {
            title: 'Make.com Automation Agency | Integromat Experts',
            description: 'Professional Make (Integromat) automation services. We connect apps, automate workflows, and optimize business processes. Hire Make experts.',
            keywords: 'make automation agency, integromat experts, workflow automation, business process automation, make.com developers'
        },
        features: [
            {
                title: 'Complex Scenarios',
                description: 'We build error-resistant scenarios with routing, iterators, and aggregators to handle any logic.',
                icon: Icons.Integration
            },
            {
                title: 'Custom API Apps',
                description: 'If an app isn\'t on Make, we build a custom app or use HTTP modules to connect to its API.',
                icon: Icons.Speed
            },
            {
                title: 'Error Handling',
                description: 'Robust error handling ensures your automations never fail silently. We build monitoring systems.',
                icon: Icons.Security
            }
        ],
        tools: [
            { name: 'Make', icon: '🟣' },
            { name: 'OpenAI', icon: '🤖' },
            { name: 'Airtable', icon: '📊' },
            { name: 'Slack', icon: '💬' }
        ],
        process: [
            { title: 'Audit', description: 'Analyzing current manual processes', duration: '2 days' },
            { title: 'Mapping', description: 'Designing flow logic', duration: '3 days' },
            { title: 'Implementation', description: 'Building & testing scenarios', duration: '1-2 weeks' }
        ],
        faq: [
            { question: 'Is it reliable?', answer: 'Yes, Make is an enterprise-grade tool. We verify every execution with robust error handlers.' }
        ]
    },

    'n8n-automation': {
        title: 'n8n Workflow Automation',
        subtitle: 'Fair-code workflow automation for technical teams and enterprise needs.',
        description: 'We build self-hosted or cloud-based n8n workflows. Perfect for businesses that need data privacy, on-premise execution, and unlimited flexibility without per-execution markup costs.',
        gradient: 'linear-gradient(135deg, #ff6e40 0%, #ff1744 100%)', // n8n orange/red
        icon: Icons.Integration,
        seo: {
            title: 'n8n Automation Agency | Hire n8n Experts',
            description: 'Expert n8n developers for fair-code automation. Self-hosted or cloud workflows for maximum privacy and control. Automate anything with n8n.',
            keywords: 'n8n experts, n8n agency, self-hosted automation, workflow automation developers, hire n8n consultant'
        },
        features: [
            {
                title: 'Data Privacy',
                description: 'With self-hosted n8n, your data never leaves your infrastructure. Ideal for GDPR/HIPAA compliance.',
                icon: Icons.Security
            },
            {
                title: 'Advanced Scripting',
                description: 'We write custom JavaScript within n8n nodes to handle complex data transformation that other tools can\'t.',
                icon: Icons.Speed
            },
            {
                title: 'Cost Effective',
                description: 'Run thousands of executions without paying per-operation fees like in Zapier.',
                icon: Icons.Scale
            }
        ],
        tools: [
            { name: 'n8n', icon: '📡' },
            { name: 'Docker', icon: '🐳' },
            { name: 'JavaScript', icon: 'JS' },
            { name: 'Postgres', icon: '🐘' }
        ],
        process: [
            { title: 'Setup', description: 'Deploying n8n instance (if self-hosted)', duration: '2 days' },
            { title: 'Development', description: 'Creating workflows', duration: '1-3 weeks' },
            { title: 'Handover', description: 'Training your team', duration: '3 days' }
        ],
        faq: [
            { question: 'n8n vs Make?', answer: 'n8n is better for developers, heavy data processing, and privacy-focused use cases. Make is more visual and user-friendly.' }
        ]
    },

    'supabase-backend': {
        title: 'Supabase Backend Development',
        subtitle: 'The open source Firebase alternative. SQL power for your no-code apps.',
        description: 'We architect robust backends using Supabase. You get a real PostgreSQL database, instant APIs, real-time subscriptions, and secure authentication. The perfect partner for WeWeb, FlutterFlow, or React apps.',
        gradient: 'linear-gradient(135deg, #3ecf8e 0%, #3ecf8e 100%)', // Supabase green
        icon: Icons.Database,
        seo: {
            title: 'Supabase Development Agency | PostgreSQL & Backend Experts',
            description: 'Hire Supabase experts to build your backend. PostgreSQL, Auth, Realtime, and Edge Functions. Perfect for WeWeb and FlutterFlow apps.',
            keywords: 'supabase experts, supabase agency, postgresql developers, backend development, weweb backend, flutterflow backend'
        },
        features: [
            {
                title: 'PostgreSQL Power',
                description: 'Leverage the full power of SQL. Complex queries, joins, and reliable data integrity.',
                icon: Icons.Database
            },
            {
                title: 'Real-time & Auth',
                description: 'Built-in WebSockets for real-time features and secure Row Level Security (RLS) for auth.',
                icon: Icons.Security
            },
            {
                title: 'Edge Functions',
                description: 'We write server-side Typescript logic that runs on the edge for low-latency performance.',
                icon: Icons.Speed
            }
        ],
        tools: [
            { name: 'Supabase', icon: '⚡' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'Deno', icon: '🦕' },
            { name: 'Kysely', icon: '🔑' }
        ],
        process: [
            { title: 'Modeling', description: 'Database schema design', duration: '1 week' },
            { title: 'policies', description: 'RLS Security policies', duration: '3 days' },
            { title: 'Functions', description: 'API & Edge Functions', duration: '1-2 weeks' }
        ],
        faq: [
            { question: 'Is it scalable?', answer: 'It is built on AWS/Postgres. It scales to millions of users.' }
        ]
    },

    'api-integrations': {
        title: 'Custom API Integrations',
        subtitle: 'Connecting the unconnected. We unify your tech stack.',
        description: 'Don\'t let closed systems slow you down. We build custom API integrations to bridge the gap between your legacy software, modern SaaS tools, and AI services. If it has an API, we can connect it.',
        gradient: 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)', // Neutral/Tech
        icon: Icons.Integration,
        seo: {
            title: 'API Integration Services | Custom API Development Agency',
            description: 'Expert API integration services. We connect third-party APIs, legacy systems, and modern SaaS tools. REST, GraphQL, SOAP integrations.',
            keywords: 'api integration agency, connect apis, custom api development, webhook integration, backend integration'
        },
        features: [
            {
                title: 'Any Protocol',
                description: 'REST, GraphQL, SOAP, or XML-RPC. We handle authentication (OAuth2, API Keys) and data transformation.',
                icon: Icons.Integration
            },
            {
                title: 'Custom Middleware',
                description: 'We build lightweight middleware (Node.js/Python) if direct connection isn\'t possible.',
                icon: Icons.Speed
            },
            {
                title: 'AI Integration',
                description: 'We are experts in integrating OpenAI/LLMs into existing business workflows via API.',
                icon: Icons.Scale
            }
        ],
        tools: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Python', icon: '🐍' },
            { name: 'Postman', icon: '🚀' },
            { name: 'AWS Lambda', icon: '☁️' }
        ],
        process: [
            { title: 'Docs Review', description: 'Analyzing API documentation', duration: '3 days' },
            { title: 'Middleware', description: 'Building logic layer', duration: '1-3 weeks' },
            { title: 'Testing', description: 'Load & Security testing', duration: '1 week' }
        ],
        faq: []
    }
};
