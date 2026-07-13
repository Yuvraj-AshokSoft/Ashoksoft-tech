import { FiCode, FiSmartphone, FiLayout, FiServer, FiShoppingCart, FiMonitor } from 'react-icons/fi';
import { SiReact, SiFlutter, SiApple, SiAndroid, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiPython, SiPhp, SiShopify, SiWoocommerce } from 'react-icons/si';

export const hireData = {
  'react-native-developers': {
    title: 'React Native Developers',
    roleTitle: 'Hire Expert React Native Developers',
    subtitle: 'Build cross-platform mobile apps with native performance.',
    description: 'Our top-tier React Native developers build robust, scalable, and high-performance mobile applications for both iOS and Android from a single codebase, drastically reducing your time-to-market and development costs.',
    imageIcon: FiSmartphone,
    benefits: [
      { title: 'Cross-Platform Efficiency', description: 'Write once, deploy everywhere. Save up to 40% on development costs.' },
      { title: 'Native-like Performance', description: 'Fluid animations and hardware acceleration for a premium feel.' },
      { title: 'Rapid Prototyping', description: 'Fast refresh allows for incredibly quick iteration and UI testing.' },
    ],
    skills: ['React Native', 'Redux', 'TypeScript', 'GraphQL', 'Native Modules', 'Jest'],
    techIcon: SiReact
  },
  'flutter-developers': {
    title: 'Flutter Developers',
    roleTitle: 'Hire Top Flutter Developers',
    subtitle: 'Craft beautiful, natively compiled applications for mobile, web, and desktop.',
    description: 'Hire our experienced Flutter developers to create visually stunning and highly customized UI components. With Flutter’s powerful rendering engine, we deliver pixel-perfect experiences across all platforms without compromising on speed.',
    imageIcon: FiSmartphone,
    benefits: [
      { title: 'Pixel-Perfect UI', description: 'Custom rendering engine ensures absolute consistency across devices.' },
      { title: 'Exceptional Speed', description: 'Compiles directly to native ARM code for 60fps performance.' },
      { title: 'Unified Codebase', description: 'Target iOS, Android, Web, and Desktop from one project.' },
    ],
    skills: ['Flutter', 'Dart', 'Provider/Riverpod', 'Firebase', 'REST APIs', 'Animations'],
    techIcon: SiFlutter
  },
  'ios-developers': {
    title: 'iOS Developers',
    roleTitle: 'Hire Dedicated iOS App Developers',
    subtitle: 'Build premium, secure, and scalable applications for the Apple ecosystem.',
    description: 'Our Swift and Objective-C experts craft native iOS applications that strictly adhere to Apple’s Human Interface Guidelines. We build high-end applications that pass strict App Store reviews and delight enterprise users.',
    imageIcon: FiSmartphone,
    benefits: [
      { title: 'Maximum Security', description: 'Leverage enterprise-grade security features native to iOS.' },
      { title: 'Flawless UX', description: 'Deep integration with the Apple ecosystem and hardware.' },
      { title: 'High ROI Audience', description: 'Target premium demographics in the Apple App Store.' },
    ],
    skills: ['Swift', 'Objective-C', 'CoreData', 'UIKit/SwiftUI', 'XCode', 'Combine'],
    techIcon: SiApple
  },
  'android-developers': {
    title: 'Android Developers',
    roleTitle: 'Hire Expert Android App Developers',
    subtitle: 'Reach a global audience with scalable Android applications.',
    description: 'Hire our seasoned Android developers to build native apps using Kotlin and Java. We ensure your application performs flawlessly across the vast fragmentation of Android devices, screen sizes, and OS versions.',
    imageIcon: FiSmartphone,
    benefits: [
      { title: 'Global Reach', description: 'Deploy to the platform with the largest global market share.' },
      { title: 'Deep Customization', description: 'Leverage Android’s open ecosystem for complex system integrations.' },
      { title: 'Hardware Access', description: 'Unrestricted access to device hardware and background processes.' },
    ],
    skills: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Coroutines', 'Room DB'],
    techIcon: SiAndroid
  },
  'react-developers': {
    title: 'React Developers',
    roleTitle: 'Hire Dedicated React.js Developers',
    subtitle: 'Build highly interactive, dynamic, and blazing-fast web frontends.',
    description: 'Our React specialists excel at building complex single-page applications (SPAs) and interactive enterprise dashboards. We write clean, reusable, and thoroughly tested components that scale beautifully as your application grows.',
    imageIcon: FiCode,
    benefits: [
      { title: 'Component Reusability', description: 'Accelerate development by sharing UI components across the app.' },
      { title: 'Virtual DOM Performance', description: 'Effortlessly handle thousands of UI updates per second.' },
      { title: 'Predictable State', description: 'Robust state management using Redux, Zustand, or Context API.' },
    ],
    skills: ['React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Next.js', 'React Query'],
    techIcon: SiReact
  },
  'nextjs-developers': {
    title: 'Next.js Developers',
    roleTitle: 'Hire Expert Next.js Developers',
    subtitle: 'Enterprise-grade React applications optimized for SEO and performance.',
    description: 'Looking to combine the power of React with phenomenal SEO? Our Next.js developers utilize Server-Side Rendering (SSR) and Static Site Generation (SSG) to build blazing fast, highly optimized websites that dominate search rankings.',
    imageIcon: FiLayout,
    benefits: [
      { title: 'Flawless SEO', description: 'Server-side rendering ensures search engines can read every page.' },
      { title: 'Instant Page Loads', description: 'Automatic route prefetching and highly optimized static assets.' },
      { title: 'Full-Stack Capabilities', description: 'Build API routes and backend logic within the same repository.' },
    ],
    skills: ['Next.js', 'React', 'Server Components', 'API Routes', 'Vercel Deployment', 'Prisma'],
    techIcon: SiNextdotjs
  },
  'vuejs-developers': {
    title: 'Vue.js Developers',
    roleTitle: 'Hire Experienced Vue.js Developers',
    subtitle: 'Progressive, lightweight, and highly adaptable JavaScript framework.',
    description: 'Our Vue.js developers create lightweight, performant, and elegant user interfaces. Whether you need to sprinkle interactivity into an existing legacy app or build a massive SPA from scratch, Vue is the perfect tool.',
    imageIcon: FiCode,
    benefits: [
      { title: 'Gentle Learning Curve', description: 'Easy onboarding for new developers joining the project.' },
      { title: 'Incredible Performance', description: 'One of the smallest and fastest modern JS frameworks available.' },
      { title: 'Elegant Syntax', description: 'Clean, readable template syntax that speeds up development.' },
    ],
    skills: ['Vue.js', 'Vuex/Pinia', 'Nuxt.js', 'Vue Router', 'Composition API', 'Vite'],
    techIcon: SiVuedotjs
  },
  'nodejs-developers': {
    title: 'Node.js Developers',
    roleTitle: 'Hire Top Node.js Backend Developers',
    subtitle: 'Fast, scalable, and event-driven backend architectures.',
    description: 'Hire our backend engineers to build extremely fast, non-blocking network applications. We use Node.js to construct high-throughput APIs, real-time chat engines, and microservices architectures that handle massive traffic spikes.',
    imageIcon: FiServer,
    benefits: [
      { title: 'High Throughput', description: 'Event-driven architecture easily handles thousands of concurrent requests.' },
      { title: 'Full-Stack JS', description: 'Unify your frontend and backend teams using a single language.' },
      { title: 'Massive Ecosystem', description: 'Access to the largest package registry in the world (NPM).' },
    ],
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'Redis', 'Socket.io'],
    techIcon: SiNodedotjs
  },
  'python-developers': {
    title: 'Python Developers',
    roleTitle: 'Hire Expert Python & Django Developers',
    subtitle: 'Versatile backend solutions, data processing, and AI integrations.',
    description: 'Our Python developers excel at building robust enterprise backends, data pipelines, and integrating machine learning models. Using frameworks like Django and FastAPI, we deliver secure and highly scalable backend infrastructure.',
    imageIcon: FiServer,
    benefits: [
      { title: 'AI & ML Ready', description: 'Seamlessly integrate Python-based AI models into your web app.' },
      { title: 'Rapid Development', description: 'Highly expressive syntax allows for fast prototyping and MVP builds.' },
      { title: 'Enterprise Security', description: 'Django provides built-in protection against common vulnerabilities.' },
    ],
    skills: ['Python', 'Django', 'FastAPI', 'Pandas', 'PostgreSQL', 'Celery'],
    techIcon: SiPython
  },
  'php-developers': {
    title: 'PHP Developers',
    roleTitle: 'Hire Dedicated PHP & Laravel Developers',
    subtitle: 'Reliable, cost-effective, and widely supported web backends.',
    description: 'We supply elite PHP developers who specialize in modern frameworks like Laravel and Symfony. We build secure, modular, and maintainable backend systems that power high-traffic enterprise platforms and CMS ecosystems.',
    imageIcon: FiServer,
    benefits: [
      { title: 'Ubiquitous Support', description: 'PHP is supported by almost every hosting provider globally.' },
      { title: 'Laravel Ecosystem', description: 'Leverage the most elegant and feature-rich PHP framework available.' },
      { title: 'Cost Effective', description: 'Highly efficient development cycle keeps backend costs manageable.' },
    ],
    skills: ['PHP', 'Laravel', 'Symfony', 'MySQL', 'RESTful APIs', 'PHPUnit'],
    techIcon: SiPhp
  },
  'shopify-developers': {
    title: 'Shopify Developers',
    roleTitle: 'Hire Expert Shopify E-Commerce Developers',
    subtitle: 'Custom themes, apps, and high-converting storefronts.',
    description: 'Transform your retail business with our Shopify experts. We build custom themes from scratch, develop private Shopify apps, and optimize your storefront for maximum conversion rates, speed, and mobile responsiveness.',
    imageIcon: FiShoppingCart,
    benefits: [
      { title: 'Conversion Optimized', description: 'Custom UX flows designed specifically to increase sales and AOV.' },
      { title: 'Custom Functionality', description: 'Build bespoke features via Shopify’s powerful API and Liquid.' },
      { title: 'Headless Commerce', description: 'Separate the frontend via Next.js for ultimate speed and flexibility.' },
    ],
    skills: ['Shopify Liquid', 'Hydrogen/Oxygen', 'React', 'GraphQL', 'Shopify APIs', 'Tailwind'],
    techIcon: SiShopify
  },
  'woocommerce-developers': {
    title: 'WooCommerce Developers',
    roleTitle: 'Hire Specialized WooCommerce Developers',
    subtitle: 'Flexible, open-source e-commerce built on WordPress.',
    description: 'Our WooCommerce developers build highly customized, scalable online stores without the restrictions of a SaaS platform. We handle custom plugin development, payment gateway integrations, and massive product catalog migrations.',
    imageIcon: FiShoppingCart,
    benefits: [
      { title: 'Ultimate Ownership', description: 'You retain 100% ownership of your store data and source code.' },
      { title: 'Infinite Customization', description: 'Modify every single aspect of the checkout and shopping experience.' },
      { title: 'No Monthly Fees', description: 'Avoid the high recurring platform fees associated with SaaS competitors.' },
    ],
    skills: ['WooCommerce', 'WordPress', 'PHP', 'Custom Plugins', 'MySQL', 'REST API'],
    techIcon: SiWoocommerce
  }
};
