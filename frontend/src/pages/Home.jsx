

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import SectionTitle from "../components/SectionTitle";
// import ServiceCard from "../components/ServiceCard";
// import TestimonialCard from "../components/TestimonialCard";
// import FAQ from "../components/FAQ";
// import Button from "../components/Button";

// import { serviceService } from "../services/api";

// import {
//   FiArrowRight,
//   FiCode,
//   FiPenTool,
//   FiCpu,
//   FiBarChart,
// } from "react-icons/fi";

// import h2 from "../assets/h2.jpg";

// const iconMap = {
//   code: FiCode,
//   design: FiPenTool,
//   cpu: FiCpu,
//   chart: FiBarChart,
// };

// const fallbackServices = [
//   {
//     icon: "code",
//     slug: "web-development",
//     title: "Web Development",
//     description:
//       "Create stunning, responsive websites that engage users and drive conversions with modern technologies.",
//   },
//   {
//     icon: "code",
//     slug: "app-development",
//     title: "App Development",
//     description:
//       "Build powerful mobile and web applications tailored to your business needs and user expectations.",
//   },
//   {
//     icon: "design",
//     slug: "ui-ux-design",
//     title: "UI/UX Design",
//     description:
//       "Design beautiful, intuitive interfaces that enhance user experience and boost engagement metrics.",
//   },
//   {
//     icon: "cpu",
//     slug: "ai-automation",
//     title: "AI Automation",
//     description:
//       "Leverage artificial intelligence to automate processes and unlock new business opportunities.",
//   },
//   {
//     icon: "chart",
//     slug: "branding",
//     title: "Branding",
//     description:
//       "Build a strong brand identity that resonates with your target audience and stands out.",
//   },
// ];

// const Home = () => {
//   const [services, setServices] = useState(fallbackServices);

//   useEffect(() => {
//     const loadServices = async () => {
//       try {
//         const response = await serviceService.getServices();
//         setServices(response.data.services || fallbackServices);
//       } catch (error) {
//         setServices(fallbackServices);
//       }
//     };

//     loadServices();
//   }, []);

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO",
//       company: "TechStart Inc",
//       content:
//         "AshokSoft delivered an exceptional digital transformation that exceeded our expectations and doubled our revenue.",
//     },
//     {
//       name: "Mike Chen",
//       role: "Founder",
//       company: "InnovateTech",
//       content:
//         "The team was professional, responsive, and delivered quality work on time. Highly recommended!",
//     },
//     {
//       name: "Emma Williams",
//       role: "Product Manager",
//       company: "GlobalBrand Co",
//       content:
//         "Outstanding service and support. They truly understand modern design principles and user experience.",
//     },
//   ];

//   const faqItems = [
//     {
//       question: "How long does a typical project take?",
//       answer:
//         "Project timelines vary based on complexity. Small websites take 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines during the consultation phase.",
//     },
//     {
//       question: "Do you provide ongoing support?",
//       answer:
//         "Yes, we offer comprehensive support packages including maintenance, updates, and technical support. All plans include at least 3 months of support.",
//     },
//     {
//       question: "Can you work with existing systems?",
//       answer:
//         "Absolutely! We can integrate with your existing systems, migrate data, and ensure seamless transitions without disrupting your operations.",
//     },
//     {
//       question: "What technologies do you use?",
//       answer:
//         "We use modern, industry-standard technologies including React, Vue, Node.js, Python, and various cloud platforms. We choose the best tech stack for your specific needs.",
//     },
//   ];

//   return (
//    <div className="min-h-screen bg-white text-brand-heading overflow-hidden">
          

//    <section className="relative min-h-screen overflow-hidden bg-white">

//         {/* Background */}
//         <div className="absolute inset-0">

//           {/* Purple Glow */}
//           <motion.div
//             className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[140px]"
//             animate={{
//               x: [0, 80, 0],
//               y: [0, 60, 0],
//             }}
//             transition={{
//               duration: 18,
//               repeat: Infinity,
//             }}
//           />

//           {/* Blue Glow */}
//           <motion.div
//             className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-secondary/10 blur-[140px]"
//             animate={{
//               x: [0, -60, 0],
//               y: [0, -40, 0],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//             }}
//           />

//           {/* Grid */}
//           <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28">

//           <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

//             {/* LEFT SIDE */}

//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: .8 }}
//             >

              

//                 <h1 className="text-brand-heading text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05]">
//              Welcome to

//            <span className="block mt-3 bg-gradient-to-rfrom-brand-primary to-brand-secondary bg-clip-text text-transparent">
//            AshokSoft Technologies
//            </span>
//           </h1>

//               <p className="mt-8 text-lg md:text-xl text-brand-text leading-9 max-w-2xl">

//                 Transform your vision into reality with cutting-edge digital
//                 solutions. We build extraordinary digital experiences for
//                 ambitious businesses.

//               </p>

//               {/* Buttons */}

//               <div className="flex flex-wrap gap-5 mt-10">

//                 <Link to="/contact">

//                   <Button size="lg">

//                     Start Your Project

//                     <FiArrowRight className="ml-2"/>

//                   </Button>

//                 </Link>

//                 <Link to="/services">

//                   <Button
//                     variant="secondary"
//                     size="lg"
//                   >

//                     Explore Services

//                   </Button>

//                 </Link>

//               </div>

//               {/* Statistics */}

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

//                 {[
//                   {
//                     value: "50+",
//                     label: "Projects Delivered",
//                   },
//                   {
//                     value: "40+",
//                     label: "Satisfied Clients",
//                   },
//                   {
//                     value: "5+",
//                     label: "Years Experience",
//                   },
//                 ].map((stat, idx) => (

//                   <motion.div
//                     key={idx}
//                     whileHover={{
//                       y: -8,
//                     }}
//                     className="rounded-3xl border bg-white
// border
// border-brand-border
// shadow-card p-6"
//                   >

//                     <h2 className="text-4xl font-bold text-brand-primary">

//                       {stat.value}

//                     </h2>

//                     <p className="text-brand-text mt-2 text-sm">

//                       {stat.label}

//                     </p>

//                   </motion.div>

//                 ))}

//               </div>

//             </motion.div>

//             {/* RIGHT SIDE */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: .9,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: .8,
//               }}
//               className="relative"
//             >

//               {/* Glow */}

//               <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary blur-3xl opacity-25"></div>

//               {/* Glass Card */}

//               <div className="relative rounded-[36px] overflow-hidden border bg-white
// border
// border-brand-border
// shadow-card shadow-[0_25px_80px_rgba(0,0,0,.45)]">

//                 <img
//                   src={h2}
//                   alt="Digital Solutions Showcase"
//                   className="w-full object-cover transition duration-700 hover:scale-105"
//                 />

//               </div>

//               {/* Floating Badge */}

//               <motion.div
//                 animate={{
//                   y: [0, -12, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                 }}
//                 className="absolute -bottom-8 -left-8  bg-white
// border
// border-brand-border
// shadow-card rounded-3xl px-6 py-5 shadow-xl"
//               >

//                 <p className="text-brand-primary font-bold">

//                   Modern Solutions

//                 </p>

//                 <p className="text-sm text-brand-text mt-1">

//                   Web • Mobile • AI • Branding

//                 </p>

//               </motion.div>

//             </motion.div>

//           </div>

//         </div>

//       </section>



    
//             {/* ===================== SERVICES ===================== */}

//       <section className="relative py-32 overflow-hidden">

//         {/* Background Glow */}

//         <div className="absolute inset-0">

//           <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-[120px]" />

//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[140px]" />

//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: .7 }}
//             viewport={{ once: true }}
//           >

//             <SectionTitle
//               title="Our Services"
//               subtitle="Comprehensive digital solutions tailored to your business needs"
//             />

//           </motion.div>

//           {/* Service Cards */}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

//             {services.map((service, index) => (

//               <motion.div
//                 key={service.slug || index}
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: .5,
//                   delay: index * .1,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="group relative"
//               >

//                 {/* Glow Border */}

//                 <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-from-brand-primary via-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

//                 {/* Glass Container */}

//                 <div className="relative h-full rounded-[30px] bg-white
// border
// border-brand-border
// shadow-card p-3 transition-all duration-500">

//                   <ServiceCard
//                     {...service}
//                     icon={iconMap[service.icon] || FiCode}
//                     delay={0}
//                   />

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//           {/* Bottom CTA */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: .3,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="mt-16 text-center"
//           >

//             <Link to="/services">

//               <Button
//                 size="lg"
//                 className="rounded-2xl px-10"
//               >

//                 View All Services

//                 <FiArrowRight className="ml-2" />

//               </Button>

//             </Link>

//           </motion.div>

//         </div>

//       </section>

//             {/* ================= WHY CHOOSE US ================= */}

//       <section className="relative py-32 overflow-hidden">

//         {/* Background */}

//         <div className="absolute inset-0">

//           <div className="absolute left-0 top-0 w-[450px] h-[450px] rounded-full bg-brand-primary/10 blur-[160px]" />

//           <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/10 blur-[160px]" />

//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: .6 }}
//             viewport={{ once: true }}
//           >

//             <SectionTitle
//               title="Why Choose Us"
//               subtitle="What sets us apart from the competition"
//             />

//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

//             {[
//               {
//                 title: "Expert Team",
//                 description:
//                   "Our team consists of seasoned professionals with years of experience in digital transformation and technology solutions.",
//               },
//               {
//                 title: "Quality Assurance",
//                 description:
//                   "We follow strict quality standards and best practices to ensure every project meets the highest industry standards.",
//               },
//               {
//                 title: "Client-Focused",
//                 description:
//                   "Your success is our success. We work closely with you to understand your goals and deliver exceptional results.",
//               },
//               {
//                 title: "Innovative Solutions",
//                 description:
//                   "We stay ahead of industry trends and leverage cutting-edge technologies to provide innovative solutions.",
//               },
//               {
//                 title: "On-Time Delivery",
//                 description:
//                   "We respect your time and budget. Our projects are delivered on schedule without compromising quality.",
//               },
//               {
//                 title: "Long-term Support",
//                 description:
//                   "We provide comprehensive ongoing support and maintenance to ensure your digital assets perform optimally.",
//               },
//             ].map((item, index) => (

//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: index * 0.08,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.02,
//                 }}
//                 className="group relative"
//               >

//                 {/* Gradient Border */}

//                 <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary  opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

//                 {/* Card */}

//                 <div className="relative h-full rounded-[32px] bg-white
// border
// border-brand-border
// shadow-card p-8 transition-all duration-500">

//                   {/* Number */}

//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-brand-heading shadow-lg shadow-violet-500/20">

//                     0{index + 1}

//                   </div>

//                   <h3 className="mt-8 text-2xl font-bold text-brand-heading">

//                     {item.title}

//                   </h3>

//                   <p className="mt-5 text-brand-text leading-8">

//                     {item.description}

//                   </p>

//                   {/* Bottom Line */}

//                   <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* ===================== TESTIMONIALS ===================== */}

//       <section className="relative py-32 overflow-hidden">

//         <div className="absolute inset-0">

//           <div className="absolute top-20 left-0 w-[350px] h-[350px] rounded-full bg-brand-primary/10 blur-[140px]" />

//           <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-brand-secondary/10 blur-[140px]" />

//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: .6 }}
//             viewport={{ once: true }}
//           >

//             <SectionTitle
//               title="Client Testimonials"
//               subtitle="What our clients say about us"
//             />

//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

//             {testimonials.map((testimonial, index) => (

//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: index * .12,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 whileHover={{
//                   y: -12,
//                 }}
//                 className="group relative"
//               >

//                 <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

//                 <div className="relative rounded-[30px]bg-white
//                border
// border-brand-border
// shadow-card p-3">

//                   <TestimonialCard
//                     {...testimonial}
//                     delay={0}
//                   />

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </section>



//       {/* ===================== FAQ ===================== */}

//       <section className="relative py-28">

//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent"></div>

//         <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: .6,
//             }}
//             viewport={{
//               once: true,
//             }}
//           >

//             <SectionTitle
//               title="Frequently Asked Questions"
//               subtitle="Get answers to common questions"
//             />

//           </motion.div>

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: .2,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="mt-16"
//           >

//             <div className="rounded-[35px] border border-brand-border bg-white backdrop-blur-2xl p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.35)]">

//               <FAQ items={faqItems} />

//             </div>

//           </motion.div>

//         </div>

//       </section>


//       {/* ===================== CTA SECTION ===================== */}

//       <section className="relative py-32 overflow-hidden">

//         {/* Background */}

//         <div className="absolute inset-0">

//           <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-500/20 blur-[180px]" />

//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:45px_45px]" />

//         </div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: .7,
//           }}
//           viewport={{
//             once: true,
//           }}
//           className="relative max-w-7xl mx-auto px-6 lg:px-8"
//         >

//           <div className="relative overflow-hidden rounded-[40px] border border-brand-border">

//             {/* Gradient */}

//             <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary"></div>

//             <div className="absolute inset-0  backdrop-blur-xl"></div>

//             <div className="relative px-10 py-24 text-center">

//               <motion.h2
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: .2,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="text-4xl md:text-6xl font-black text-brand-heading"
//               >

//                 Ready to Start Your Project?

//               </motion.h2>

//               <motion.p
//                 initial={{
//                   opacity: 0,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                 }}
//                 transition={{
//                   delay: .35,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="mt-8 text-lg md:text-xl text-branded  max-w-3xl mx-auto leading-9"
//               >

//                 Let's work together to bring your ideas to life.
//                 Contact us today for a free consultation.

//               </motion.p>

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: .5,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="mt-12 flex justify-center"
//               >

//                 <Link to="/contact">

//                   <Button
//                     size="lg"
//                     className="rounded-2xl px-10 shadow-2xl shadow-violet-900/40"
//                   >

//                     Get Started Now

//                     <FiArrowRight className="ml-2"/>

//                   </Button>

//                 </Link>

//               </motion.div>

//             </div>

//           </div>

//         </motion.div>

//       </section>

//     </div>

//   );

// };

// export default Home;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";

import { serviceService } from "../services/api";

import {
  FiArrowRight,
  FiCode,
  FiSearch,
  FiMonitor,
  FiPenTool,
  FiCpu,
  FiBarChart,
} from "react-icons/fi";

import h2 from "../assets/h2.jpg";

const iconMap = {
  code: FiCode,
  design: FiPenTool,
  cpu: FiCpu,
  chart: FiBarChart,
};

const fallbackServices = [
  {
    icon: "code",
    slug: "web-development",
    title: "Web Development",
    description:
      "Create stunning, responsive websites that engage users and drive conversions with modern technologies.",
  },
  {
    icon: "code",
    slug: "app-development",
    title: "App Development",
    description:
      "Build powerful mobile and web applications tailored to your business needs and user expectations.",
  },
  {
    icon: "design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Design beautiful, intuitive interfaces that enhance user experience and boost engagement metrics.",
  },
  {
    icon: "cpu",
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Leverage artificial intelligence to automate processes and unlock new business opportunities.",
  },
  {
    icon: "chart",
    slug: "branding",
    title: "Branding",
    description:
      "Build a strong brand identity that resonates with your target audience and stands out.",
  },
];
const ourServices = [
  {
    icon: FiSearch,
    title: "Hire & Offshore",
    description:
      "Looking for trusted experienced and professional services take our offshore services or hire developers from us for your development.",
    items: [
      "Offshore Development Services",
      "Hire Dedicated Developers",
      "QA / Testing Services",
      "IT Consulting",
    ],
  },
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Incorporate the latest of interactivity, multimedia and user interface on your website.",
    items: [
      "Angular JS Development",
      "React JS Development",
      "Vue JS Development",
      "Node JS Development",
      "Progressive Web App Development",
    ],
  },
  {
    icon: FiMonitor,
    title: "Software & Web Development",
    description:
      "Get custom software development and web development services with modern technologies.",
    items: [
      "ASP.Net / MVC Development",
      "C# / WPF Development",
      "Windows Azure Development",
      "PHP Web Development",
    ],
  },
];
const technologies = [
  { name: "Angular JS", icon: FaAngular },
  { name: "Python", icon: FaPython },
  { name: "React JS", icon: FaReact },
  { name: "ASP.NET MVC", icon: SiDotnet },
  { name: "Vue JS", icon: FaVuejs },

  { name: "C#", icon: SiCsharp },
  { name: "Aurelia", icon: SiAurelia },
  { name: "PHP", icon: FaPhp },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Node.js", icon: FaNodeJs },

  { name: "Android", icon: FaAndroid },
  { name: "Laravel", icon: FaLaravel },
  { name: "iOS", icon: FaApple },
  { name: "Magento", icon: SiMagento },
  { name: "WordPress", icon: FaWordpress },

  { name: "Xamarin", icon: SiXamarin },
  { name: "Ember", icon: SiEmberdotjs },
  { name: "MEAN", icon: FaReact },
  { name: "Azure", icon: SiMicrosoftazure },
  { name: "CodeIgniter", icon: SiCodeigniter },
];

const Home = () => {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await serviceService.getServices();
        setServices(response.data.services || fallbackServices);
      } catch (error) {
        setServices(fallbackServices);
      }
    };

    loadServices();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content:
        "AshokSoft delivered an exceptional digital transformation that exceeded our expectations and doubled our revenue.",
    },
    {
      name: "Mike Chen",
      role: "Founder",
      company: "InnovateTech",
      content:
        "The team was professional, responsive, and delivered quality work on time. Highly recommended!",
    },
    {
      name: "Emma Williams",
      role: "Product Manager",
      company: "GlobalBrand Co",
      content:
        "Outstanding service and support. They truly understand modern design principles and user experience.",
    },
  ];

  const faqItems = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Small websites take 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines during the consultation phase.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive support packages including maintenance, updates, and technical support. All plans include at least 3 months of support.",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely! We can integrate with your existing systems, migrate data, and ensure seamless transitions without disrupting your operations.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-standard technologies including React, Vue, Node.js, Python, and various cloud platforms. We choose the best tech stack for your specific needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-brand-heading overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Purple Glow */}
          <motion.div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[140px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
            }}
          />

          {/* Blue Glow */}
          <motion.div
            className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-secondary/10 blur-[140px]"
            animate={{
              x: [0, -60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
          />

          {/* Grid */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-brand-heading text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05]">
                Welcome to
                <span className="block mt-3 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  AshokSoft Technologies
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-brand-text leading-9 max-w-2xl">
                Transform your vision into reality with cutting-edge digital
                solutions. We build extraordinary digital experiences for
                ambitious businesses.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10">
                <Link to="/contact">
                  <Button size="lg">
                    Start Your Project
                    <FiArrowRight className="ml-2" />
                  </Button>
                </Link>

                <Link to="/services">
                  <Button variant="secondary" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">
                {[
                  {
                    value: "50+",
                    label: "Projects Delivered",
                  },
                  {
                    value: "40+",
                    label: "Satisfied Clients",
                  },
                  {
                    value: "5+",
                    label: "Years Experience",
                  },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-3xl border bg-white border-brand-border shadow-card p-6"
                  >
                    <h2 className="text-4xl font-bold text-brand-primary">
                      {stat.value}
                    </h2>

                    <p className="text-brand-text mt-2 text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary blur-3xl opacity-25"></div>

              {/* Glass Card */}
              <div className="relative rounded-[36px] overflow-hidden border bg-white border-brand-border shadow-card shadow-[0_25px_80px_rgba(0,0,0,.45)]">
                <img
                  src={h2}
                  alt="Digital Solutions Showcase"
                  className="w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-8 -left-8 bg-white border border-brand-border shadow-card rounded-3xl px-6 py-5 shadow-xl"
              >
                <p className="text-brand-primary font-bold">
                  Modern Solutions
                </p>

                <p className="text-sm text-brand-text mt-1">
                  Web • Mobile • AI • Branding
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Our Services"
              subtitle="Comprehensive digital solutions tailored to your business needs"
            />
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {services.map((service, index) => (
              <motion.div
                key={service.slug || index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative"
              >
                {/* Glow Border */}
                <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

                {/* Glass Container */}
                <div className="relative h-full rounded-[30px] bg-white border border-brand-border shadow-card p-3 transition-all duration-500">
                  <ServiceCard
                    {...service}
                    icon={iconMap[service.icon] || FiCode}
                    delay={0}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
            className="mt-16 text-center"
          >
            <Link to="/services">
              <Button size="lg" className="rounded-2xl px-10">
                View All Services
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ===================== CONSULTATION ===================== */}

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-[450px] h-[450px] rounded-full bg-brand-primary/10 blur-[160px]" />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-secondary/10 blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Why Choose Us"
              subtitle="What sets us apart from the competition"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of seasoned professionals with years of experience in digital transformation and technology solutions.",
              },
              {
                title: "Quality Assurance",
                description:
                  "We follow strict quality standards and best practices to ensure every project meets the highest industry standards.",
              },
              {
                title: "Client-Focused",
                description:
                  "Your success is our success. We work closely with you to understand your goals and deliver exceptional results.",
              },
              {
                title: "Innovative Solutions",
                description:
                  "We stay ahead of industry trends and leverage cutting-edge technologies to provide innovative solutions.",
              },
              {
                title: "On-Time Delivery",
                description:
                  "We respect your time and budget. Our projects are delivered on schedule without compromising quality.",
              },
              {
                title: "Long-term Support",
                description:
                  "We provide comprehensive ongoing support and maintenance to ensure your digital assets perform optimally.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative"
              >
                {/* Gradient Border */}
                <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

                {/* Card */}
                <div className="relative h-full rounded-[32px] bg-white border border-brand-border shadow-card p-8 transition-all duration-500">
                  {/* Number */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-brand-heading shadow-lg shadow-violet-500/20">
                    0{index + 1}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-brand-heading">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-brand-text leading-8">
                    {item.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-[350px] h-[350px] rounded-full bg-brand-primary/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-brand-secondary/10 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Client Testimonials"
              subtitle="What our clients say about us"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>

                <div className="relative rounded-[30px] bg-white border border-brand-border shadow-card p-3">
                  <TestimonialCard {...testimonial} delay={0} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="mt-16"
          >
            <div className="rounded-[35px] border border-brand-border bg-white backdrop-blur-2xl p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.35)]">
              <FAQ items={faqItems} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-500/20 blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="relative max-w-7xl mx-auto px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-brand-border">
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary"></div>
            <div className="absolute inset-0 backdrop-blur-xl"></div>

            <div className="relative px-10 py-24 text-center">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className="text-4xl md:text-6xl font-black text-white"
              >
                Ready to Start Your Project?
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.35,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-9"
              >
                Let's work together to bring your ideas to life. Contact us
                today for a free consultation.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-12 flex justify-center"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="rounded-2xl px-10 shadow-2xl shadow-violet-900/40"
                  >
                    Get Started Now
                    <FiArrowRight className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
