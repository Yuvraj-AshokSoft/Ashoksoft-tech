import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";
import { serviceService } from "../services/api";
import h2 from "../assets/h2.jpg";
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
                <img
                  src={h2}
                  alt="Digital Solutions Showcase"
                  className="w-full object-cover transition duration-700 hover:scale-105"
                />
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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