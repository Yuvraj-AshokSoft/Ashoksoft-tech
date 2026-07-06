<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";



import { serviceService } from "../services/api";
import h2 from "../assets/consultation.svg";



import {
  FiArrowRight,
  FiCode,
  FiSearch,
  FiMonitor,
  FiPenTool,
  FiCpu,
  FiBarChart,
  FiHeart,
  FiBookOpen,
  FiShoppingBag,
  FiBriefcase,
  FiTruck,
} from "react-icons/fi";

import {
  FaAngular,
  FaPython,
  FaReact,
  FaVuejs,
  FaPhp,
  FaBootstrap,
  FaNodeJs,
  FaAndroid,
  FaLaravel,
  FaApple,
  FaWordpress,
} from "react-icons/fa";

import {
  SiDotnet,
  SiCsharp,
  SiAurelia,
  SiMagento,
  SiXamarin,
  SiEmberdotjs,
  SiMicrosoftazure,
  SiCodeigniter,
} from "react-icons/si";



const iconMap = {
  code: FiCode,
  design: FiPenTool,
  cpu: FiCpu,
  chart: FiBarChart,
};


const industries = [
  {
    icon: <FiHeart />,
    title: "Healthcare",
    description:
      "Secure healthcare management systems, patient portals, telemedicine solutions, and hospital management software.",
  },
  {
    icon: <FiBookOpen />,
    title: "Education",
    description:
      "Learning Management Systems, Campus to Corporate platforms, online examinations, and student ERP solutions.",
  },
  {
    icon: <FiShoppingBag />,
    title: "E-Commerce",
    description:
      "Scalable online stores, payment gateway integration, inventory management, and customer engagement platforms.",
  },
  {
    icon: <FiBriefcase />,
    title: "Enterprise",
    description:
      "ERP, CRM, HRMS, payroll management, workflow automation, and enterprise digital transformation.",
  },
  {
    icon: <FiTruck />,
    title: "Logistics",
    description:
      "Fleet management, shipment tracking, warehouse management, and transportation automation solutions.",
  },
  {
    icon: <FiBriefcase />,
    title: "Finance",
    description:
      "Accounting software, financial reporting, invoicing systems, and secure fintech applications.",
  },
];


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
      "Looking for trusted, experienced, and professional services? Take our offshore services or hire developers from us for your development.",
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
      "Incorporate the latest interactivity, multimedia, and user interface patterns on your website.",
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
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const Home = () => {
  const [services, setServices] = useState(fallbackServices);

  const heroHeadlines = [
    <>Offshore <br /> Development <br /> Company in India</>,
    <>Build Your <br /> Dedicated Remote <br /> Development Team</>,
    <>Scale Your <br /> Business with <br /> Expert IT Solutions</>
  ];
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceService.getAllServices();
        if (response && response.data) {
          setServices(response.data);
        } else if (Array.isArray(response)) {
          setServices(response);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-heading overflow-hidden">
      <section className="relative min-h-screen overflow-hidden bg-white">
        
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/hero-video .mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-48 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroItemVariants} className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="text-sm font-medium text-white/90">
                  Modern Solutions: Web • Mobile • AI • Branding
                </span>
              </motion.div>
              <motion.h1 variants={heroItemVariants} className="text-5xl font-bold leading-tight text-white md:text-7xl xl:text-[80px] h-[180px] md:h-[240px] xl:h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {heroHeadlines[headlineIndex]}
                  </motion.div>
                </AnimatePresence>
              </motion.h1>

              <motion.p variants={heroItemVariants} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl font-medium">
                AshokSoft Solutions is a leading offshore development partner. Our deep
                understanding about offshore software outsourcing makes us a unique
                solution provider. With our high quality services, we provide you a cost-
                effective and highly flexible hiring models.
              </motion.p>

              <motion.div variants={heroItemVariants} className="mt-10 flex flex-wrap gap-5">
                <Link to="/services">
                  <button className="flex items-center rounded-full bg-red-600 px-8 py-3.5 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
                    Read More <FiArrowRight className="ml-2" />
                  </button>
                </Link>
              </motion.div>

              <motion.div variants={heroItemVariants} className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "40+", label: "Satisfied Clients" },
                  { value: "5+", label: "Years Experience" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <h2 className="text-4xl font-bold text-[#0C8DA1]">
                      {stat.value}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
=======
﻿  import React, { useEffect, useState } from "react";
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import SectionTitle from "../components/SectionTitle";
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
    FiCheckCircle,
    FiAward,
    FiUsers,
    FiTrendingUp,
  } from "react-icons/fi";
  import {
    FaAngular,
    FaPython,
    FaReact,
    FaVuejs,
    FaBootstrap,
    FaNodeJs,
    FaPhp,
    FaAndroid,
    FaApple,
    FaWordpress,
    FaLaravel,
  } from "react-icons/fa";
  import {
    SiDotnet,
    SiCsharp,
    SiAurelia,
    SiMagento,
    SiXamarin,
    SiEmberdotjs,
    SiMicrosoftazure,
    SiCodeigniter,
  } from "react-icons/si";

  const ourServices = [
    {
      icon: FiSearch,
      title: "Hire & Offshore",
      description:
        "Looking for trusted, experienced, and professional services? Take our offshore services or hire developers from us for your development.",
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
        "Incorporate the latest interactivity, multimedia, and user interface patterns on your website.",
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

  const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      const loadServices = async () => {
        try {
          const response = await serviceService.getServices();
          setServices(response.data.services || []);
        } catch (error) {
          setServices([]);
        }
      };

      loadServices();
    }, []);

    const displayServices =
      services.length > 0
        ? services
        : ourServices.map((service) => ({
            ...service,
            serviceList: service.items,
          }));

    return (
      <div className="min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#F8F5FF] to-[#F3F8FF] text-gray-900">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/hero-NT-Video .mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/75" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-48 pt-32 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-black leading-[1.05] text-white md:text-7xl xl:text-8xl">
                  Welcome to
                  <span className="mt-3 block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                    AshokSoft Technologies
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
                  Transform your vision into reality with cutting-edge digital
                  solutions. We build extraordinary digital experiences for
                  ambitious businesses.
                </p>

                <div className="mt-10 flex flex-wrap gap-5">
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

                <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "40+", label: "Satisfied Clients" },
                    { value: "5+", label: "Years Experience" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -8 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    >
                      <h2 className="text-4xl font-bold text-violet-300">
                        {stat.value}
                      </h2>
                      <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 opacity-25 blur-3xl" />

                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-xl">
                
                </div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-[#0F172A]/90 px-6 py-5 shadow-xl backdrop-blur-xl"
                >
                  <p className="font-bold text-violet-300">Modern Solutions</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Web • Mobile • AI • Branding
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 z-20 hidden w-full translate-y-1/2 lg:block">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-6">
                {[
                  { icon: <FiCpu size={24} />, title: "Time Zone Advantages" },
                  { icon: <FiBarChart size={24} />, title: "Better ROI" },
                  { icon: <FiPenTool size={24} />, title: "Cost Benefits" },
                  { icon: <FiCode size={24} />, title: "Continuity Of Business" },
                ].map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group flex cursor-pointer items-center space-x-4 rounded-xl border border-white/10 bg-black/40 p-5 shadow-xl backdrop-blur-md transition-all hover:border-white/20 hover:bg-black/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-300 transition-transform group-hover:scale-110">
                      {card.icon}
                    </div>
                    <span className="text-sm font-semibold leading-tight text-white">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


         <section className="relative overflow-hidden bg-white py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Technologies" subtitle="Our Technologies" />
            </motion.div>

            <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group rounded-xl border border-dashed border-[#D8E8FF] bg-white p-4 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-[#F3F9FF]"
                      >
                        <Icon size={34} className="text-[#2E3A63]" />
                      </motion.div>
                      <h4 className="text-[20px] font-medium text-[#2B2B2B]">{tech.name}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        

        <section className="relative overflow-hidden bg-brand-light py-28">
          <div className="absolute inset-0">
            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-secondary/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              title="About Us"
              subtitle="Empowering businesses with innovative digital solutions that drive growth, efficiency, and long-term success."
            />

            <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[32px] border border-brand-border bg-white p-10 shadow-card">
                  <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
                    Who We Are
                  </span>
                  <h2 className="mt-6 text-4xl font-black leading-tight text-brand-heading">
                    Building Digital Experiences That Inspire Growth
                  </h2>
                  <p className="mt-6 leading-8 text-brand-text">
                    AshokSoft Technologies helps businesses transform ideas into
                    powerful digital products. From modern websites and scalable
                    applications to AI-driven solutions and branding, we deliver
                    technology that creates real business value.
                  </p>
                  <p className="mt-5 leading-8 text-brand-text">
                    Our experienced team combines creativity, innovation, and
                    technical expertise to develop solutions that are fast,
                    secure, scalable, and designed for long-term success.
                  </p>

                  <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {[
                      { icon: FiCheckCircle, title: "Quality Driven", text: "Every project follows modern development standards." },
                      { icon: FiAward, title: "Industry Expertise", text: "Experienced professionals delivering premium solutions." },
                      { icon: FiUsers, title: "Client First", text: "We collaborate closely with every client." },
                      { icon: FiTrendingUp, title: "Growth Focused", text: "Helping businesses scale with technology." },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex items-start gap-4">
                          <Icon className="mt-1 text-2xl text-brand-primary" />
                          <div>
                            <h4 className="font-semibold text-brand-heading">{item.title}</h4>
                            <p className="mt-1 text-sm text-brand-text">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20 blur-3xl" />

                <div className="relative rounded-[36px] border border-brand-border bg-white p-10 shadow-card">
                  <div className="grid grid-cols-2 gap-6">
                    {[["50+", "Projects Completed"], ["40+", "Happy Clients"], ["5+", "Years Experience"], ["24/7", "Technical Support"]].map(([value, label]) => (
                      <div key={label} className="rounded-3xl bg-brand-light p-8 text-center">
                        <h3 className="text-5xl font-black text-brand-primary">{value}</h3>
                        <p className="mt-3 text-brand-text">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-[1px]">
                    <div className="rounded-3xl bg-white p-8">
                      <h3 className="text-2xl font-bold text-brand-heading">Our Mission</h3>
                      <p className="mt-4 leading-8 text-brand-text">
                        To empower startups, enterprises, and growing businesses with innovative digital solutions that improve efficiency, enhance customer experiences, and accelerate sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

       

        <section className="relative overflow-hidden bg-brand-light py-28">
          <div className="absolute inset-0">
            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-secondary/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              title="Industry Experience"
              subtitle="We serve multiple industries with tailored solutions"
            />

            <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[32px] border border-brand-border bg-white p-10 shadow-card">
                  <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
                    Experience
                  </span>
                  <h2 className="mt-6 text-4xl font-black leading-tight text-brand-heading">
                    Sectors We Serve
                  </h2>
                  <p className="mt-6 leading-8 text-brand-text">
                    We have delivered solutions across multiple industries, helping organizations modernize systems and improve customer experiences.
                  </p>

                  <ul className="mt-6 grid gap-2 text-sm text-brand-text sm:grid-cols-2">
                    <li>Healthcare &amp; Wellness</li>
                    <li>Fintech &amp; Payments</li>
                    <li>eCommerce &amp; Retail</li>
                    <li>Enterprise SaaS</li>
                    <li>Education &amp; EdTech</li>
                    <li>Media &amp; Entertainment</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20 blur-3xl" />

                <div className="relative rounded-[36px] border border-brand-border bg-white p-10 shadow-card">
                  <div className="grid grid-cols-2 gap-6">
                    {[["50+", "Projects Completed"], ["40+", "Happy Clients"], ["5+", "Years Experience"], ["24/7", "Technical Support"]].map(([value, label]) => (
                      <div key={label} className="rounded-3xl bg-brand-light p-8 text-center">
                        <h3 className="text-5xl font-black text-brand-primary">{value}</h3>
                        <p className="mt-3 text-brand-text">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-[1px]">
                    <div className="rounded-3xl bg-white p-8">
                      <h3 className="text-2xl font-bold text-brand-heading">Our Approach</h3>
                      <p className="mt-4 leading-8 text-brand-text">
                        We combine domain expertise with modern engineering practices to deliver reliable, scalable solutions for each industry.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-light py-28">
          <div className="absolute inset-0">
            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-secondary/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              title="Our Vision"
              subtitle="The direction that drives our product strategy"
            />

            <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[32px] border border-brand-border bg-white p-10 shadow-card">
                  <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
                    Vision
                  </span>
                  <h2 className="mt-6 text-4xl font-black leading-tight text-brand-heading">
                    A Future Powered by Responsible Tech
                  </h2>
                  <p className="mt-6 leading-8 text-brand-text">
                    To be a trusted technology partner that empowers organizations to innovate responsibly and scale with confidence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20 blur-3xl" />

                <div className="relative rounded-[36px] border border-brand-border bg-white p-10 shadow-card">
                  <div className="grid grid-cols-2 gap-6">
                    {[["Sustainability", "Responsible Design"], ["Scalability", "Future Proof"], ["Security", "Built-in"], ["Accessibility", "Inclusive"]].map(([value, label]) => (
                      <div key={label} className="rounded-3xl bg-brand-light p-8 text-center">
                        <h3 className="text-2xl font-black text-brand-primary">{value}</h3>
                        <p className="mt-3 text-brand-text">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-[1px]">
                    <div className="rounded-3xl bg-white p-8">
                      <h3 className="text-2xl font-bold text-brand-heading">Vision in Action</h3>
                      <p className="mt-4 leading-8 text-brand-text">
                        We invest in R&D, partnerships, and continuous learning to turn our vision into measurable outcomes for clients.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-light py-28">
          <div className="absolute inset-0">
            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-secondary/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              title="Our Mission"
              subtitle="What we do every day to deliver value"
            />

            <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[32px] border border-brand-border bg-white p-10 shadow-card">
                  <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
                    Mission
                  </span>
                  <h2 className="mt-6 text-4xl font-black leading-tight text-brand-heading">
                    Deliver Meaningful Digital Outcomes
                  </h2>
                  <p className="mt-6 leading-8 text-brand-text">
                    Deliver high-quality, user-centered digital solutions that create measurable business value and lasting impact.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20 blur-3xl" />

                <div className="relative rounded-[36px] border border-brand-border bg-white p-10 shadow-card">
                  <div className="grid grid-cols-2 gap-6">
                    {[["Impact", "Business Results"], ["Quality", "Best Practices"], ["Speed", "Fast Delivery"], ["Support", "Long Term"]].map(([value, label]) => (
                      <div key={label} className="rounded-3xl bg-brand-light p-8 text-center">
                        <h3 className="text-2xl font-black text-brand-primary">{value}</h3>
                        <p className="mt-3 text-brand-text">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-[1px]">
                    <div className="rounded-3xl bg-white p-8">
                      <h3 className="text-2xl font-bold text-brand-heading">How We Deliver</h3>
                      <p className="mt-4 leading-8 text-brand-text">
                        Lean processes, iterative delivery, and close collaboration ensure we deliver value quickly and consistently.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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

            <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {displayServices.map((service, index) => {
                const Icon = service.icon || ourServices[index]?.icon || FiCode;
                const title = service.title || ourServices[index]?.title || "Service";
                const description = service.description || ourServices[index]?.description || "";
                const serviceItems = service.items || service.serviceList || ourServices[index]?.items || [];

                return (
                  <motion.div
                    key={service.slug || title || index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
                    <div className="relative h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl transition-all duration-500">
                      <div className="h-full rounded-[28px] border border-white/10 bg-[#101828]/80 p-8 text-white shadow-card">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-cyan-300">
                          <Icon size={30} />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                        <p className="mt-4 leading-8 text-slate-300">{description}</p>
                        {serviceItems.length > 0 && (
                          <ul className="mt-6 space-y-3 text-sm text-slate-200">
                            {serviceItems.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

       

        <section className="relative overflow-hidden bg-white py-32">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-violet-100 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-100 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="font-semibold uppercase tracking-[4px] text-red-500">
                Consultation
              </span>
              <h2 className="mt-4 text-5xl font-bold text-[#161C2D]">
                Schedule A Free Consultation
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
                Contact us today to schedule a free consultation and discover how AshokSoft Technologies can help transform your business with modern digital solutions.
              </p>
            </motion.div>

            <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-[35px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]"
              >
                <h3 className="mb-8 text-3xl font-bold">Schedule Meeting</h3>
                <form className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-medium">Date</label>
                      <input type="date" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                    </div>
                    <div>
                      <label className="mb-2 block font-medium">Time</label>
                      <input type="time" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Phone</label>
                    <input type="tel" placeholder="Enter your phone number" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Message</label>
                    <textarea rows="4" placeholder="Write your message..." className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                  </div>
                  <button type="submit" className="rounded-full bg-gradient-to-r from-red-500 to-red-400 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                    Submit
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "Expert Team", description: "Our team consists of seasoned professionals with years of experience in digital transformation and technology solutions." },
                { title: "Quality Assurance", description: "We follow strict quality standards and best practices to ensure every project meets the highest industry standards." },
                { title: "Client-Focused", description: "Your success is our success. We work closely with you to understand your goals and deliver exceptional results." },
                { title: "Innovative Solutions", description: "We stay ahead of industry trends and leverage cutting-edge technologies to provide innovative solutions." },
                { title: "On-Time Delivery", description: "We respect your time and budget. Our projects are delivered on schedule without compromising quality." },
                { title: "Long-term Support", description: "We provide comprehensive ongoing support and maintenance to ensure your digital assets perform optimally." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
                  <div className="relative h-full rounded-[32px] border border-white/10 bg-[#101828]/80 p-8 text-white backdrop-blur-xl transition-all duration-500">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-violet-500/20">
                      0{index + 1}
                    </div>
                    <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-5 leading-8 text-slate-300">{item.description}</p>
                    <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-0 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Client Testimonials" subtitle="What our clients say about us" />
            </motion.div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
                  <div className="relative rounded-[30px] border border-white/10 bg-[#0F172A]/80 p-3 backdrop-blur-xl">
                    <TestimonialCard {...testimonial} delay={0} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Frequently Asked Questions" subtitle="Get answers to common questions" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="rounded-[35px] border border-white/10 bg-[#101828]/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl md:p-10">
                <FAQ items={faqItems} />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-500/20 blur-[180px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
          </div>

>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
<<<<<<< HEAD
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
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                {/* Glow Border */}
                <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

                {/* Glass Container */}
                <div className="relative h-full rounded-[30px] bg-white border border-brand-border shadow-card p-3 transition-all duration-500 group-hover:shadow-hover group-hover:border-brand-primary">
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="font-semibold uppercase tracking-[4px] text-red-500">
              Consultation
            </span>
            <h2 className="mt-4 text-5xl font-bold text-[#161C2D]">
              Schedule A Free Consultation
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
              Contact us today to schedule a free consultation and discover how AshokSoft Technologies can help transform your business with modern digital solutions.
            </p>
          </motion.div>

          <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={h2} alt="Consultation" className="w-full rounded-[32px] shadow-card" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[35px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]"
            >
              <h3 className="mb-8 text-3xl font-bold">Schedule Meeting</h3>
              <form className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium">Date</label>
                    <input type="date" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Time</label>
                    <input type="time" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-medium">Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                </div>
                <div>
                  <label className="mb-2 block font-medium">Email</label>
                  <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                </div>
                <div>
                  <label className="mb-2 block font-medium">Phone</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                </div>
                <div>
                  <label className="mb-2 block font-medium">Message</label>
                  <textarea rows="4" placeholder="Write your message..." className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500" />
                </div>
                <button type="submit" className="rounded-full bg-gradient-to-r from-red-500 to-red-400 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: "Expert Team", description: "Our team consists of seasoned professionals with years of experience in digital transformation and technology solutions." },
              { title: "Quality Assurance", description: "We follow strict quality standards and best practices to ensure every project meets the highest industry standards." },
              { title: "Client-Focused", description: "Your success is our success. We work closely with you to understand your goals and deliver exceptional results." },
              { title: "Innovative Solutions", description: "We stay ahead of industry trends and leverage cutting-edge technologies to provide innovative solutions." },
              { title: "On-Time Delivery", description: "We respect your time and budget. Our projects are delivered on schedule without compromising quality." },
              { title: "Long-term Support", description: "We provide comprehensive ongoing support and maintenance to ensure your digital assets perform optimally." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-[32px] bg-[#0C8DA1] opacity-0 blur-sm transition duration-500 group-hover:opacity-40" />
                <div className="relative h-full rounded-[32px] border border-gray-100 bg-white p-8 text-gray-800 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0C8DA1] text-2xl font-bold text-white shadow-lg shadow-[#0C8DA1]/30">
                    0{index + 1}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {item.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-8 h-[2px] w-0 bg-[#0C8DA1] transition-all duration-500 group-hover:w-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY EXPERIENCE ================= */}

<section className="relative py-28 bg-white overflow-hidden" >

  {/* Background Glow */}

  <div className="absolute inset-0">

    <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-brand-primary/10 blur-[140px]" />

    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-secondary/10 blur-[140px]" />

  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <SectionTitle
      title="Industry Experience"
      subtitle="Delivering innovative software solutions across diverse industries with deep domain expertise and modern technologies."
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {industries.map((industry, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group bg-white rounded-[28px] border border-brand-border shadow-card p-8 hover:shadow-hover transition-all duration-500 "
        >

          {/* Icon */}

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white text-3xl group-hover:scale-110 transition">

            {industry.icon}

          </div>

          {/* Title */}

          <h3 className="mt-8 text-2xl font-bold text-brand-heading">

            {industry.title}

          </h3>

          {/* Description */}

          <p className="mt-5 text-brand-text leading-8">

            {industry.description}

          </p>

          {/* Link */}

          <button className="mt-8 flex items-center gap-2 font-semibold text-brand-primary group-hover:gap-4 transition-all">

            Learn More

            <FiArrowRight />

          </button>

        </motion.div>

      ))}

    </div>

  </div>

</section>


      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Client Testimonials" subtitle="What our clients say about us" />
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-[#0C8DA1] opacity-0 blur-md transition duration-500 group-hover:opacity-20" />
                <div className="relative">
                  <TestimonialCard {...testimonial} delay={0} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle title="Frequently Asked Questions" subtitle="Get answers to common questions" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="rounded-[35px] border border-gray-200 bg-white p-8 shadow-xl md:p-10">
              <FAQ items={faqItems} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-500/20 blur-[180px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <div className="absolute inset-0 bg-[#0C8DA1]" />
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />

            <div className="relative px-10 py-24 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-black text-white md:text-6xl"
              >
                Ready to Start Your Project?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                viewport={{ once: true }}
                className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-100 md:text-xl"
              >
                Let&apos;s work together to bring your ideas to life. Contact us today for a free consultation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center"
              >
                <Link to="/contact">
                  <button className="flex items-center rounded-full bg-white px-10 py-4 text-lg font-bold text-[#0C8DA1] transition-all hover:bg-gray-100 shadow-2xl shadow-black/20">
                    Get Started Now
                    <FiArrowRight className="ml-2" />
                  </button>
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
=======
            className="relative mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-600" />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />

              <div className="relative px-10 py-24 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-black text-white md:text-6xl"
                >
                  Ready to Start Your Project?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  viewport={{ once: true }}
                  className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-100 md:text-xl"
                >
                  Let&apos;s work together to bring your ideas to life. Contact us today for a free consultation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12 flex justify-center"
                >
                  <Link to="/contact">
                    <Button size="lg" className="rounded-2xl px-10 shadow-2xl shadow-violet-900/40">
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
>>>>>>> 81ed0365c0a3c6fe86b92557faa7a3287069b71d
