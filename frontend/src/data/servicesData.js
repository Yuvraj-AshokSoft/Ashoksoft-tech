import { FiMonitor, FiSmartphone, FiCpu, FiCloud, FiPenTool, FiTrendingUp, FiSettings, FiDatabase, FiBarChart } from 'react-icons/fi';
import { SiOpenai, SiReact, SiNodedotjs, SiPython, SiAmazonaws, SiFigma, SiTensorflow, SiFlutter } from 'react-icons/si';

export const servicesData = {
  'ai-development': {
    title: 'AI Development',
    subtitle: 'Empower Your Business with Intelligent Automation and Machine Learning',
    description: 'We build advanced AI-powered applications, intelligent chatbots, and predictive machine learning models that help your business automate complex processes, derive actionable insights from data, and deliver hyper-personalized experiences to your customers.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'Automated Workflows', description: 'Reduce manual effort by 70% with intelligent workflow automation.' },
      { title: 'Data-Driven Insights', description: 'Make better business decisions using predictive analytics.' },
      { title: '24/7 Customer Support', description: 'Deploy NLP chatbots that handle customer queries instantly.' },
    ],
    offerings: [
      'Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Recognition',
      'AI-Powered Chatbots',
      'Predictive Analytics',
      'Generative AI Integration'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-Learn', 'AWS SageMaker'],
    techIcons: [SiPython, SiTensorflow, SiOpenai],
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Modern, Responsive, and SEO-Optimized Web Experiences',
    description: 'Our web development team crafts stunning, high-performance websites and web applications tailored to your specific business needs. From sleek corporate landing pages to complex e-commerce platforms, we build scalable architectures using the latest modern web technologies.',
    imageIcon: FiMonitor,
    benefits: [
      { title: 'Lightning Fast Speeds', description: 'Optimized assets and server-side rendering for sub-second load times.' },
      { title: 'Responsive by Default', description: 'Flawless design on desktops, tablets, and smartphones.' },
      { title: 'SEO Optimized', description: 'Built strictly following Google’s Core Web Vitals best practices.' },
    ],
    offerings: [
      'Custom Web Applications',
      'Corporate Websites',
      'E-Commerce Solutions',
      'Progressive Web Apps (PWAs)',
      'CMS Development',
      'Web Portal Development'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
    techIcons: [SiReact, SiNodedotjs, FiDatabase],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'Native and Cross-Platform Apps that Users Love',
    description: 'We design and develop high-quality mobile applications for iOS and Android platforms. Focusing on exceptional user experience and robust performance, we turn your mobile app idea into a scalable reality that dominates the app store.',
    imageIcon: FiSmartphone,
    benefits: [
      { title: 'Cross-Platform Efficiency', description: 'Save costs by building once and deploying to both iOS and Android.' },
      { title: 'Native Performance', description: 'Smooth animations and hardware-accelerated rendering.' },
      { title: 'Secure Architectures', description: 'Enterprise-grade security protocols for user data protection.' },
    ],
    offerings: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Development (Flutter/React Native)',
      'Mobile UI/UX Design',
      'App Store Optimization (ASO)',
      'App Maintenance & Support'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    techIcons: [SiFlutter, SiReact, FiDatabase],
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Secure, Scalable, and High-Performance Cloud Infrastructure',
    description: 'Accelerate your digital transformation by migrating to the cloud. We offer comprehensive cloud deployment, DevOps automation, and server management services to ensure your infrastructure is highly available, cost-effective, and secure.',
    imageIcon: FiCloud,
    benefits: [
      { title: '99.99% Uptime', description: 'Highly available architectures ensuring zero business disruption.' },
      { title: 'Cost Optimization', description: 'Auto-scaling resources so you only pay for exactly what you use.' },
      { title: 'Disaster Recovery', description: 'Automated backups and failover strategies to protect your data.' },
    ],
    offerings: [
      'Cloud Migration Strategy',
      'AWS / Azure / GCP Management',
      'DevOps & CI/CD Pipelines',
      'Serverless Architecture',
      'Cloud Security Audits',
      '24/7 Infrastructure Support'
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Terraform', 'Linux'],
    techIcons: [SiAmazonaws, FiDatabase, FiCloud],
  },
  'robotics-iot': {
    title: 'Robotics & IoT',
    subtitle: 'Smart Hardware and IoT Solutions for the Future',
    description: 'Bridge the gap between the physical and digital worlds. We develop innovative IoT systems, smart automation networks, and educational robotics projects that bring hardware to life through intelligent software integration.',
    imageIcon: FiSettings,
    benefits: [
      { title: 'Real-time Monitoring', description: 'Track physical assets and environmental data in real-time.' },
      { title: 'Hardware Integration', description: 'Seamless communication between software applications and physical sensors.' },
      { title: 'Increased Efficiency', description: 'Automate physical tasks to reduce manual labor costs.' },
    ],
    offerings: [
      'IoT Device Integration',
      'Smart Home Automation',
      'Industrial IoT (IIoT)',
      'Custom Robotics Programming',
      'Educational Robotics Kits',
      'Embedded Systems Development'
    ],
    technologies: ['C++', 'Python', 'Arduino', 'Raspberry Pi', 'MQTT', 'ROS'],
    techIcons: [SiPython, FiCpu, FiDatabase],
  },
  'data-analytics': {
    title: 'Data Analytics',
    subtitle: 'Business Intelligence, Big Data, and Predictive Analysis',
    description: 'Transform your raw data into actionable insights. We build robust data pipelines, interactive dashboards, and advanced analytics models that empower you to make informed decisions and stay ahead of the competition.',
    imageIcon: FiBarChart,
    benefits: [
      { title: 'Actionable Insights', description: 'Understand your business trends and customer behavior clearly.' },
      { title: 'Real-Time Dashboards', description: 'Monitor KPIs instantly through beautifully crafted visualizations.' },
      { title: 'Predictive Modeling', description: 'Forecast future trends based on historical data patterns.' },
    ],
    offerings: [
      'Business Intelligence (BI) Solutions',
      'Big Data Processing',
      'Data Warehousing',
      'Interactive Data Dashboards',
      'Predictive Analysis',
      'Data Mining'
    ],
    technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Snowflake', 'Python', 'SQL'],
    techIcons: [SiPython, FiDatabase, FiTrendingUp],
  },
  'artificial-intelligence-solutions': {
    title: 'Artificial Intelligence Solutions',
    subtitle: 'Empower Your Business with Intelligent Automation and Machine Learning',
    description: 'We build advanced AI-powered applications, intelligent chatbots, and predictive machine learning models that help your business automate complex processes, derive actionable insights from data, and deliver hyper-personalized experiences to your customers.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'Automated Workflows', description: 'Reduce manual effort by 70% with intelligent workflow automation.' },
      { title: 'Data-Driven Insights', description: 'Make better business decisions using predictive analytics.' },
      { title: '24/7 Customer Support', description: 'Deploy NLP chatbots that handle customer queries instantly.' },
    ],
    offerings: [
      'Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Recognition',
      'AI-Powered Chatbots',
      'Predictive Analytics',
      'Generative AI Integration'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-Learn', 'AWS SageMaker'],
    techIcons: [SiPython, SiTensorflow, SiOpenai],
  },
  'website-development': {
    title: 'Website Development',
    subtitle: 'Modern, Responsive, and SEO-Optimized Web Experiences',
    description: 'Our web development team crafts stunning, high-performance websites and web applications tailored to your specific business needs. From sleek corporate landing pages to complex e-commerce platforms, we build scalable architectures using the latest modern web technologies.',
    imageIcon: FiMonitor,
    benefits: [
      { title: 'Lightning Fast Speeds', description: 'Optimized assets and server-side rendering for sub-second load times.' },
      { title: 'Responsive by Default', description: 'Flawless design on desktops, tablets, and smartphones.' },
      { title: 'SEO Optimized', description: 'Built strictly following Google’s Core Web Vitals best practices.' },
    ],
    offerings: [
      'Custom Web Applications',
      'Corporate Websites',
      'E-Commerce Solutions',
      'Progressive Web Apps (PWAs)',
      'CMS Development',
      'Web Portal Development'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
    techIcons: [SiReact, SiNodedotjs, FiDatabase],
  },
  'software-development': {
    title: 'Custom Software Development',
    subtitle: 'Tailored Enterprise Solutions to Scale Your Operations',
    description: 'Off-the-shelf software doesn’t always fit. We build bespoke software solutions designed specifically around your unique business workflows, ensuring maximum efficiency, robust security, and seamless integration with your existing systems.',
    imageIcon: FiSettings,
    benefits: [
      { title: 'Perfect Fit', description: 'Software built entirely around your exact business processes.' },
      { title: 'Highly Scalable', description: 'Microservices architecture that grows effortlessly with your business.' },
      { title: 'Seamless Integration', description: 'Easily connects with your existing CRM, ERP, and payment tools.' },
    ],
    offerings: [
      'Enterprise Resource Planning (ERP)',
      'Customer Relationship Management (CRM)',
      'SaaS Product Development',
      'API Development & Integration',
      'Legacy System Modernization',
      'Automated Billing Systems'
    ],
    technologies: ['Node.js', 'Python', 'Java', 'Docker', 'Kubernetes', 'MySQL'],
    techIcons: [SiNodedotjs, SiPython, FiDatabase],
  },
  'robotics-and-automation': {
    title: 'Robotics & Automation',
    subtitle: 'Smart Hardware and IoT Solutions for the Future',
    description: 'Bridge the gap between the physical and digital worlds. We develop innovative IoT systems, smart automation networks, and educational robotics projects that bring hardware to life through intelligent software integration.',
    imageIcon: FiCpu,
    benefits: [
      { title: 'Real-time Monitoring', description: 'Track physical assets and environmental data in real-time.' },
      { title: 'Hardware Integration', description: 'Seamless communication between software applications and physical sensors.' },
      { title: 'Increased Efficiency', description: 'Automate physical tasks to reduce manual labor costs.' },
    ],
    offerings: [
      'IoT Device Integration',
      'Smart Home Automation',
      'Industrial IoT (IIoT)',
      'Custom Robotics Programming',
      'Educational Robotics Kits',
      'Embedded Systems Development'
    ],
    technologies: ['C++', 'Python', 'Arduino', 'Raspberry Pi', 'MQTT', 'ROS'],
    techIcons: [SiPython, FiCpu, FiDatabase],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Intuitive, Beautiful, and User-Centric Interface Design',
    description: 'Great software starts with great design. Our creative team designs stunning, accessible, and highly intuitive user interfaces that boost engagement, increase conversion rates, and make your customers love interacting with your brand.',
    imageIcon: FiPenTool,
    benefits: [
      { title: 'Higher Conversions', description: 'User-centric flows designed specifically to drive business goals.' },
      { title: 'Brand Consistency', description: 'Cohesive design systems that perfectly reflect your brand identity.' },
      { title: 'Accessibility First', description: 'Interfaces designed to be usable by everyone across all devices.' },
    ],
    offerings: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'High-Fidelity Visual Design',
      'Design Systems & Style Guides',
      'Usability Testing',
      'Website & App Redesigns'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Protopie', 'Webflow'],
    techIcons: [SiFigma, FiPenTool, FiMonitor],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Data-Driven Strategies to Grow Your Brand Online',
    description: 'Maximize your digital footprint and reach your target audience exactly where they are. We provide comprehensive digital marketing services that combine creative branding with data-driven SEO and advertising strategies to drive exponential growth.',
    imageIcon: FiTrendingUp,
    benefits: [
      { title: 'Increased Traffic', description: 'Dominate search rankings and drive high-intent organic visitors.' },
      { title: 'Better ROI', description: 'Hyper-targeted ad campaigns that maximize every marketing dollar.' },
      { title: 'Brand Authority', description: 'Build trust with your audience through compelling content strategies.' },
    ],
    offerings: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Management',
      'Content Marketing',
      'Email Campaigns & Automation',
      'Brand Identity & Strategy'
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Meta Ads', 'SEMrush', 'Mailchimp', 'HubSpot'],
    techIcons: [FiTrendingUp, FiMonitor, FiDatabase],
  }
};
