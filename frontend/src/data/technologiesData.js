import { FiCode, FiLayers, FiServer, FiDatabase, FiCloud, FiCpu, FiMonitor, FiGlobe, FiLayout, FiMaximize } from 'react-icons/fi';

export const technologiesData = {
  'react': {
    title: 'React',
    subtitle: 'The premier library for building fast, interactive user interfaces',
    description: 'We use React to build dynamic single-page applications and complex interactive user interfaces. Its component-based architecture allows us to write reusable, maintainable code, ensuring your application remains scalable and blazingly fast.',
    imageIcon: FiCode,
    benefits: [
      { title: 'Component-Based', description: 'Modular architecture makes UI development faster and easier to maintain.' },
      { title: 'Virtual DOM', description: 'Exceptional rendering performance, even for highly dynamic interfaces.' },
      { title: 'Massive Ecosystem', description: 'Access to thousands of libraries and a vibrant developer community.' },
    ],
    offerings: ['Single Page Applications', 'Interactive Dashboards', 'Enterprise Web Apps', 'SaaS Interfaces'],
  },
  'next-js': {
    title: 'Next.js',
    subtitle: 'Production-ready React framework for SEO and performance',
    description: 'Next.js brings server-side rendering and static site generation to React. We leverage it to build highly optimized, SEO-friendly websites that load instantly and provide incredible user experiences.',
    imageIcon: FiLayers,
    benefits: [
      { title: 'Server-Side Rendering', description: 'Perfect for SEO-heavy applications like blogs and e-commerce.' },
      { title: 'Automatic Optimization', description: 'Built-in image, font, and script optimization for lightning-fast speeds.' },
      { title: 'API Routes', description: 'Build full-stack applications quickly with integrated backend routes.' },
    ],
    offerings: ['E-Commerce Platforms', 'Marketing Websites', 'SEO-Driven Portals', 'Full-Stack Apps'],
  },
  'html': {
    title: 'HTML5',
    subtitle: 'The robust foundation of the modern web',
    description: 'HTML5 is the backbone of every web experience we create. We write clean, semantic, and highly accessible HTML to ensure your website structure is perfectly optimized for search engines and assistive technologies.',
    imageIcon: FiGlobe,
    benefits: [
      { title: 'Semantic Structure', description: 'Meaningful tags that boost SEO and improve accessibility.' },
      { title: 'Native Multimedia', description: 'Built-in support for audio and video without external plugins.' },
      { title: 'Cross-Browser Compatibility', description: 'Works flawlessly across Chrome, Safari, Firefox, and Edge.' },
    ],
    offerings: ['Semantic Web Structure', 'Accessible Interfaces', 'SEO Optimization'],
  },
  'css': {
    title: 'CSS3',
    subtitle: 'Beautiful, responsive styling for engaging user experiences',
    description: 'We use advanced CSS3 techniques, including Flexbox, Grid, and fluid typography, to bring designs to life. Our styling ensures your application looks stunning and works perfectly across all screen sizes.',
    imageIcon: FiLayout,
    benefits: [
      { title: 'Responsive Layouts', description: 'Flawless adaptation to mobile, tablet, and desktop screens.' },
      { title: 'Smooth Animations', description: 'Hardware-accelerated transitions for a premium feel.' },
      { title: 'Modern Features', description: 'Utilizing CSS variables and Grid for complex design architectures.' },
    ],
    offerings: ['Custom Web Animations', 'Responsive Web Design', 'Cross-Platform Styling'],
  },
  'tailwind-css': {
    title: 'Tailwind CSS',
    subtitle: 'Rapid UI development with utility-first styling',
    description: 'Tailwind CSS revolutionizes how we style applications. By using utility classes, we build complex, highly customized designs rapidly without the bloat of traditional CSS frameworks, resulting in a cleaner and faster codebase.',
    imageIcon: FiMonitor,
    benefits: [
      { title: 'Rapid Prototyping', description: 'Build stunning UI components in record time directly in the markup.' },
      { title: 'Highly Customizable', description: 'Easily adapt the design system to perfectly match your brand guidelines.' },
      { title: 'Tiny File Sizes', description: 'Unused CSS is purged automatically, shipping only what is needed.' },
    ],
    offerings: ['Custom Design Systems', 'Rapid Prototyping', 'Highly Optimized Frontends'],
  },
  'node-js': {
    title: 'Node.js',
    subtitle: 'Scalable, event-driven backend JavaScript runtime',
    description: 'Node.js allows us to build fast, scalable network applications. Its non-blocking, event-driven architecture makes it the perfect choice for real-time applications, APIs, and data-intensive services.',
    imageIcon: FiServer,
    benefits: [
      { title: 'High Performance', description: 'V8 engine compilation makes executing JavaScript incredibly fast.' },
      { title: 'Full-Stack JavaScript', description: 'Seamless sharing of code and concepts between frontend and backend.' },
      { title: 'Scalable Architecture', description: 'Easily handles thousands of concurrent connections.' },
    ],
    offerings: ['RESTful APIs', 'Real-time Chat Applications', 'Microservices Architecture', 'Data Streaming Services'],
  },
  'express-js': {
    title: 'Express.js',
    subtitle: 'Fast, unopinionated, minimalist web framework for Node.js',
    description: 'We use Express.js as the foundation for our Node.js backends. It provides a robust set of features for web and mobile applications, allowing us to build powerful APIs and backend services rapidly.',
    imageIcon: FiServer,
    benefits: [
      { title: 'Rapid Development', description: 'Streamlined routing and middleware integration.' },
      { title: 'Highly Flexible', description: 'Unopinionated structure allows for tailored architectural choices.' },
      { title: 'Enterprise Ready', description: 'Battle-tested framework used by global tech giants.' },
    ],
    offerings: ['API Development', 'Backend Infrastructure', 'Middleware Integration'],
  },
  'python': {
    title: 'Python',
    subtitle: 'Versatile, powerful language for data and backends',
    description: 'Python is our go-to language for AI, machine learning, data science, and complex backend automation. Its elegant syntax and massive ecosystem of libraries allow us to solve the most difficult computational problems.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'AI & Data Science', description: 'The undisputed industry standard for Machine Learning and AI.' },
      { title: 'Rapid Scripting', description: 'Excellent for task automation and data processing pipelines.' },
      { title: 'Robust Frameworks', description: 'Powerful web frameworks like Django and FastAPI.' },
    ],
    offerings: ['AI/ML Models', 'Data Scraping & Analysis', 'Backend Automation', 'API Development'],
  },
  'mongodb': {
    title: 'MongoDB',
    subtitle: 'Flexible, highly scalable NoSQL database',
    description: 'MongoDB is our preferred NoSQL database for applications that require high volume data storage and rapid iteration. Its document-based model allows for unparalleled flexibility as your application evolves.',
    imageIcon: FiDatabase,
    benefits: [
      { title: 'Schema-less Design', description: 'Adapt your data models instantly without complex migrations.' },
      { title: 'Horizontal Scalability', description: 'Built-in sharding allows databases to scale infinitely.' },
      { title: 'JSON Native', description: 'Perfect synergy with JavaScript/Node.js backends.' },
    ],
    offerings: ['High-Volume Data Storage', 'Real-time Analytics', 'Content Management Systems'],
  },
  'mysql': {
    title: 'MySQL',
    subtitle: 'Reliable, battle-tested relational database',
    description: 'When data integrity and complex relationships are paramount, we rely on MySQL. It is the world’s most popular open-source relational database, offering ACID compliance and exceptional reliability.',
    imageIcon: FiDatabase,
    benefits: [
      { title: 'Data Integrity', description: 'Strict schemas and ACID compliance ensure your data is always safe.' },
      { title: 'High Performance', description: 'Optimized for complex queries and high-traffic applications.' },
      { title: 'Massive Ecosystem', description: 'Universally supported by almost all hosting and cloud providers.' },
    ],
    offerings: ['Financial Systems', 'E-Commerce Databases', 'Legacy System Integration'],
  },
  'postgresql': {
    title: 'PostgreSQL',
    subtitle: 'Advanced, enterprise-class open-source relational database',
    description: 'PostgreSQL is the pinnacle of open-source relational databases. We use it for enterprise applications that require advanced data types, complex queries, and absolute data correctness.',
    imageIcon: FiDatabase,
    benefits: [
      { title: 'Advanced Features', description: 'Support for JSONB, geographic data, and complex indexing.' },
      { title: 'Unmatched Reliability', description: 'Decades of active development ensuring absolute rock-solid stability.' },
      { title: 'Extensible', description: 'Easily add custom functions and data types tailored to your needs.' },
    ],
    offerings: ['Enterprise Data Architectures', 'Geospatial Applications', 'Complex Analytics'],
  },
  'aws': {
    title: 'Amazon Web Services (AWS)',
    subtitle: 'The world’s most comprehensive cloud platform',
    description: 'We leverage AWS to build highly available, globally distributed architectures. From serverless computing to advanced machine learning pipelines, AWS provides the infrastructure to scale your application to millions of users.',
    imageIcon: FiCloud,
    benefits: [
      { title: 'Infinite Scalability', description: 'Auto-scaling infrastructure that grows dynamically with traffic.' },
      { title: 'Enterprise Security', description: 'Military-grade security, compliance, and identity management.' },
      { title: 'Global Reach', description: 'Deploy your application to data centers all over the world.' },
    ],
    offerings: ['Cloud Migration', 'Serverless Architecture', 'DevOps & CI/CD', 'Database Hosting'],
  },
  'firebase': {
    title: 'Firebase',
    subtitle: 'Comprehensive app development platform by Google',
    description: 'Firebase allows us to build and iterate on mobile and web applications incredibly fast. With built-in real-time databases, authentication, and hosting, it’s the perfect tool for rapid product launches and MVPs.',
    imageIcon: FiCloud,
    benefits: [
      { title: 'Real-time Sync', description: 'Data updates instantly across all connected clients.' },
      { title: 'Built-in Auth', description: 'Secure, hassle-free authentication for Google, Apple, and Email.' },
      { title: 'Rapid Deployment', description: 'Focus on building features instead of managing infrastructure.' },
    ],
    offerings: ['MVP Development', 'Real-time Chat Apps', 'Mobile App Backends'],
  },
  'vercel': {
    title: 'Vercel',
    subtitle: 'The platform for frontend frameworks and static sites',
    description: 'We use Vercel to deploy our React and Next.js applications. It provides a flawless developer experience, instant global deployments via edge networks, and built-in serverless functions for ultimate performance.',
    imageIcon: FiMaximize,
    benefits: [
      { title: 'Edge Network', description: 'Your site is cached globally for instantaneous load times anywhere.' },
      { title: 'Seamless CI/CD', description: 'Automatic deployments every time code is pushed to the repository.' },
      { title: 'Serverless Functions', description: 'Easily deploy backend logic alongside your frontend code.' },
    ],
    offerings: ['Frontend Hosting', 'Edge Computing', 'Next.js Optimization'],
  },
  'openai-apis': {
    title: 'OpenAI APIs',
    subtitle: 'Integrate world-class artificial intelligence into your apps',
    description: 'We integrate OpenAI’s industry-leading models (like GPT-4) into your applications to add natural language processing, automated content generation, and intelligent contextual search capabilities.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'Human-like Text', description: 'Generate, summarize, and analyze text with unprecedented accuracy.' },
      { title: 'Custom Fine-tuning', description: 'Train models specifically on your own company data.' },
      { title: 'Rapid AI Integration', description: 'Add cutting-edge AI features without building models from scratch.' },
    ],
    offerings: ['AI Chatbots', 'Content Generation Tools', 'Automated Customer Support', 'Data Analysis Assistants'],
  },
  'machine-learning': {
    title: 'Machine Learning',
    subtitle: 'Data-driven algorithms that learn and adapt',
    description: 'We build custom machine learning models that analyze your historical data to predict future trends, detect anomalies, and automate complex decision-making processes that were previously impossible for software.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'Predictive Analytics', description: 'Forecast sales, user behavior, and market trends accurately.' },
      { title: 'Personalization', description: 'Deliver highly tailored recommendations to your users.' },
      { title: 'Process Automation', description: 'Automate complex categorization and decision-making tasks.' },
    ],
    offerings: ['Recommendation Engines', 'Fraud Detection Systems', 'Predictive Modeling', 'Data Mining'],
  },
  'computer-vision': {
    title: 'Computer Vision',
    subtitle: 'Giving software the ability to see and understand',
    description: 'We develop computer vision applications that can process, analyze, and understand digital images and videos, enabling solutions like facial recognition, object detection, and automated visual inspections.',
    imageIcon: FiMonitor,
    benefits: [
      { title: 'Automated Inspection', description: 'Detect manufacturing defects instantly using cameras.' },
      { title: 'Object Tracking', description: 'Monitor movement and identify specific objects in real-time.' },
      { title: 'Biometric Security', description: 'Implement advanced facial recognition systems.' },
    ],
    offerings: ['Image Recognition APIs', 'Video Analysis Tools', 'Automated Quality Control'],
  },
  'nlp': {
    title: 'Natural Language Processing',
    subtitle: 'Bridging the gap between human communication and computers',
    description: 'Our NLP solutions allow your applications to understand, interpret, and manipulate human language. From sentiment analysis to intelligent chatbots, we make your software truly conversational.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'Sentiment Analysis', description: 'Automatically gauge customer emotions from reviews and social media.' },
      { title: 'Language Translation', description: 'Break down language barriers with real-time translation features.' },
      { title: 'Data Extraction', description: 'Pull actionable data out of messy, unstructured text documents.' },
    ],
    offerings: ['Conversational AI', 'Text Classification', 'Document Summarization', 'Voice Recognition Systems'],
  }
};

// Map aliases for Navbar links that don't match exactly
technologiesData['react-js'] = technologiesData['react'];
technologiesData['node'] = technologiesData['node-js'];
technologiesData['html5'] = technologiesData['html'];

// Add missing technologies
technologiesData['angular'] = {
  title: 'Angular',
  subtitle: 'Robust framework for enterprise applications',
  description: 'We use Angular to build highly scalable and maintainable enterprise web applications with seamless two-way data binding.',
  imageIcon: FiCode,
  benefits: [
    { title: 'Component-Based', description: 'Modular architecture for robust development.' },
    { title: 'Enterprise Ready', description: 'Backed by Google and used by top companies.' },
    { title: 'TypeScript First', description: 'Strong typing prevents runtime errors.' }
  ],
  offerings: ['Enterprise Web Apps', 'Single Page Applications']
};

technologiesData['vue-js'] = {
  title: 'Vue.js',
  subtitle: 'Progressive JavaScript framework',
  description: 'Vue.js provides a flexible and progressive approach to building user interfaces, perfect for both simple widgets and complex single-page applications.',
  imageIcon: FiLayers,
  benefits: [
    { title: 'Approachable', description: 'Gentle learning curve with powerful capabilities.' },
    { title: 'Performant', description: 'Incredibly fast virtual DOM rendering.' },
    { title: 'Versatile', description: 'Easy to integrate into existing projects.' }
  ],
  offerings: ['Interactive Dashboards', 'Lightweight Web Apps']
};

technologiesData['mean'] = {
  title: 'MEAN Stack',
  subtitle: 'Full-stack JavaScript development',
  description: 'We utilize the MEAN stack (MongoDB, Express, Angular, Node.js) to build end-to-end JavaScript applications that are fast, robust, and highly scalable.',
  imageIcon: FiServer,
  benefits: [
    { title: 'Unified Language', description: 'JavaScript from client to server.' },
    { title: 'High Performance', description: 'Non-blocking I/O for speed.' },
    { title: 'Scalable', description: 'Easily scales to handle increased traffic.' }
  ],
  offerings: ['Full-Stack Apps', 'RESTful APIs']
};

technologiesData['php'] = {
  title: 'PHP',
  subtitle: 'Server-side scripting language',
  description: 'PHP powers a vast majority of the web. We use it to build dynamic, data-driven web applications and robust backend systems.',
  imageIcon: FiCode,
  benefits: [
    { title: 'Widely Supported', description: 'Runs on almost all web servers.' },
    { title: 'Cost Effective', description: 'Massive open-source ecosystem.' },
    { title: 'Flexible', description: 'Easily integrates with HTML and databases.' }
  ],
  offerings: ['Dynamic Websites', 'Backend Systems']
};

technologiesData['laravel'] = {
  title: 'Laravel',
  subtitle: 'The PHP Framework for Web Artisans',
  description: 'We leverage Laravel to build elegant, feature-rich web applications rapidly, taking advantage of its expressive syntax and powerful tools.',
  imageIcon: FiLayers,
  benefits: [
    { title: 'Rapid Development', description: 'Built-in tools for authentication, routing, and caching.' },
    { title: 'Secure', description: 'Protects against SQL injection and cross-site scripting.' },
    { title: 'Robust Ecosystem', description: 'Access to a vast array of packages.' }
  ],
  offerings: ['Custom Web Applications', 'API Backends']
};

technologiesData['asp-net-mvc'] = {
  title: 'ASP.NET MVC',
  subtitle: 'Enterprise-grade web framework by Microsoft',
  description: 'We use ASP.NET MVC to build secure, scalable, and high-performance enterprise applications integrated perfectly with the Microsoft ecosystem.',
  imageIcon: FiServer,
  benefits: [
    { title: 'High Performance', description: 'Compiled code for blazing fast execution.' },
    { title: 'Secure', description: 'Enterprise-level security features built-in.' },
    { title: 'Scalable', description: 'Designed for massive enterprise workloads.' }
  ],
  offerings: ['Enterprise Solutions', 'Secure Web Portals']
};

technologiesData['react-native'] = {
  title: 'React Native',
  subtitle: 'Cross-platform mobile app development',
  description: 'We build native mobile apps for iOS and Android using React Native, sharing code across platforms to reduce development time and cost.',
  imageIcon: FiMonitor,
  benefits: [
    { title: 'Cross-Platform', description: 'Write once, deploy to both iOS and Android.' },
    { title: 'Native Performance', description: 'Renders using native UI components.' },
    { title: 'Faster Time to Market', description: 'Shared codebase accelerates development.' }
  ],
  offerings: ['iOS Apps', 'Android Apps']
};

technologiesData['ios'] = {
  title: 'iOS Development',
  subtitle: 'Premium native applications for Apple devices',
  description: 'We craft high-performance, beautiful native applications for iOS using Swift and Objective-C to deliver the ultimate user experience on Apple devices.',
  imageIcon: FiMonitor,
  benefits: [
    { title: 'High Quality', description: 'Adheres to strict Apple design guidelines.' },
    { title: 'Performant', description: 'Optimized for Apple hardware.' },
    { title: 'Secure', description: 'Industry-leading security standards.' }
  ],
  offerings: ['iPhone Apps', 'iPad Apps']
};

technologiesData['android'] = {
  title: 'Android Development',
  subtitle: 'Native applications for the world’s most popular mobile OS',
  description: 'We build robust, scalable native Android applications using Kotlin and Java, reaching a massive global audience with performant software.',
  imageIcon: FiMonitor,
  benefits: [
    { title: 'Massive Reach', description: 'Access to billions of Android users.' },
    { title: 'Flexible', description: 'Highly customizable hardware integration.' },
    { title: 'Performant', description: 'Optimized native code.' }
  ],
  offerings: ['Android Phone Apps', 'Android Tablet Apps']
};

technologiesData['azure'] = {
  title: 'Microsoft Azure',
  subtitle: 'Enterprise-grade cloud computing platform',
  description: 'We utilize Microsoft Azure to build, deploy, and manage applications through Microsoft’s massive global network of data centers.',
  imageIcon: FiCloud,
  benefits: [
    { title: 'Enterprise Integration', description: 'Seamless integration with Microsoft tools.' },
    { title: 'Global Reach', description: 'Data centers worldwide.' },
    { title: 'Secure', description: 'Industry-leading compliance.' }
  ],
  offerings: ['Cloud Infrastructure', 'DevOps']
};

technologiesData['magento'] = {
  title: 'Magento',
  subtitle: 'Powerful open-source e-commerce platform',
  description: 'We build highly customizable and scalable e-commerce storefronts using Magento, providing unparalleled control over your online retail business.',
  imageIcon: FiGlobe,
  benefits: [
    { title: 'Highly Customizable', description: 'Tailor every aspect of the shopping experience.' },
    { title: 'Scalable', description: 'Handles massive product catalogs.' },
    { title: 'Feature Rich', description: 'Built-in tools for marketing and SEO.' }
  ],
  offerings: ['E-Commerce Stores', 'B2B Commerce']
};

technologiesData['wordpress'] = {
  title: 'WordPress',
  subtitle: 'The world’s most popular content management system',
  description: 'We develop custom WordPress themes and plugins, delivering powerful, easy-to-manage websites that are optimized for SEO and performance.',
  imageIcon: FiLayout,
  benefits: [
    { title: 'Easy to Use', description: 'Intuitive interface for content management.' },
    { title: 'SEO Friendly', description: 'Built-in tools for search engine optimization.' },
    { title: 'Extensible', description: 'Massive ecosystem of plugins.' }
  ],
  offerings: ['Corporate Websites', 'Blogs']
};

technologiesData['bootstrap'] = {
  title: 'Bootstrap',
  subtitle: 'The most popular HTML, CSS, and JS library in the world',
  description: 'We use Bootstrap to quickly design and customize responsive mobile-first sites, ensuring your web application looks great on all devices.',
  imageIcon: FiMonitor,
  benefits: [
    { title: 'Responsive', description: 'Mobile-first grid system.' },
    { title: 'Rapid Prototyping', description: 'Pre-built components speed up development.' },
    { title: 'Consistent', description: 'Ensures visual consistency across browsers.' }
  ],
  offerings: ['Responsive Web Design', 'Admin Dashboards']
};
