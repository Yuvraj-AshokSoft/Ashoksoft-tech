import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQ from "../components/FAQ";
import Button from "../components/Button";
import { inquiryService } from "../services/api";



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
  FaHtml5,
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
    icon: "cpu",
    slug: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    description: "AI-powered applications, chatbots, automation systems, machine learning solutions, and intelligent business tools."
  },
  {
    icon: "code",
    slug: "website-development",
    title: "Website Development",
    description: "Modern, responsive, SEO-friendly websites built using the latest technologies."
  },
  {
    icon: "code",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Android and iOS applications designed for performance, scalability, and exceptional user experience."
  },
  {
    icon: "design",
    slug: "software-development",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with secure and scalable architecture."
  },
  {
    icon: "cpu",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Cloud deployment, hosting, DevOps, server management, and scalable infrastructure."
  },
  {
    icon: "chart",
    slug: "robotics-automation",
    title: "Robotics & Automation",
    description: "AI-powered robotics, IoT projects, smart automation systems, and educational robotics solutions."
  },
  {
    icon: "design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Creative and user-focused interface designs that improve engagement and usability."
  },
  {
    icon: "chart",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media marketing, branding, and digital growth strategies."
  }
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
    question: "What services do you provide?",
    answer: "We provide AI solutions, software development, website development, mobile applications, cloud solutions, robotics, and digital transformation services."
  },
  {
    question: "Do you build custom software?",
    answer: "Yes, every solution is customized according to business requirements."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, we offer ongoing support, updates, and maintenance after deployment."
  },
  {
    question: "Which technologies do you use?",
    answer: "React, Node.js, MongoDB, Python, AI technologies, AWS, Firebase, and many more."
  }
];
const Home = () => {


  const [consultationData, setConsultationData] = useState({
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");


const handleConsultationChange = (e) => {
  const { name, value } = e.target;

  setConsultationData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleConsultationSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");
  setSuccess("");

  try {
    await inquiryService.createInquiry({
      name: consultationData.name,
      email: consultationData.email,
      phone: consultationData.phone,

      // Existing Inquiry model fields
      companyName: "Consultation Request",
      projectType: "Other",
      budget: "Rs 500 - Rs 1,000",
      timeline: "1-3 months",

      description: `
Meeting Date: ${consultationData.date}
Meeting Time: ${consultationData.time}

Message:
${consultationData.message}
      `,
    });

    setSuccess("Consultation request submitted successfully.");

    setConsultationData({
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (err) {
    setError(
      err.response?.data?.message || "Unable to submit consultation request."
    );
  }

  setLoading(false);
};
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
        const response = await serviceService.getServices();
        if (response && response.data && Array.isArray(response.data.services)) {
          setServices(response.data.services);
        } else if (response && response.data) {
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
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="text-sm font-medium text-white/90">
                  Modern Solutions: Web • Mobile • AI • Branding
                </span>
              </div>
              <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl xl:text-[80px] h-[180px] md:h-[240px] xl:h-[300px]">
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
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl font-medium">
                AshokSoft Solutions is a leading offshore development partner. Our deep
                understanding about offshore software outsourcing makes us a unique
                solution provider. With our high quality services, we provide you a cost-
                effective and highly flexible hiring models.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <Link to="/services">
                  <button className="flex items-center rounded-full bg-red-600 px-8 py-3.5 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30">
                    Read More <FiArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {[
                  { value: "50+", label: "Projects Completed" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "15+", label: "Team Members" },
                  { value: "25+", label: "Technologies" },
                  { value: "98%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <h2 className="text-4xl font-bold text-[#0C8DA1]">
                      {stat.value}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">


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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-32"
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
              <form
                className="space-y-6"
               onSubmit={handleConsultationSubmit}
                                       >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium">Date</label>
                    <input
                   type="date"
                    name="date"
value={consultationData.date}
onChange={handleConsultationChange}
className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
required
/>
                  </div>
                  <div>
                    <label className="mb-2 block font-medium">Time</label>
                 <input
type="time"
name="time"
value={consultationData.time}
onChange={handleConsultationChange}
className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
required
/>             </div>
                </div>
                <div>
                  <label className="mb-2 block font-medium">Name</label>
                 <input
type="text"
name="name"
value={consultationData.name}
onChange={handleConsultationChange}
placeholder="Enter your name"
className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
required
/>
                </div>
                <div>
                  <label className="mb-2 block font-medium">Email</label>
                 <input
type="email"
name="email"
value={consultationData.email}
onChange={handleConsultationChange}
placeholder="Enter your email"
className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
required
/>
                </div>
                <div>
                  <label className="mb-2 block font-medium">Phone</label>
                  <input
type="tel"
name="phone"
value={consultationData.phone}
onChange={handleConsultationChange}
placeholder="Enter your phone number"
className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
required
/>
                </div>
                <div>
                  <label className="mb-2 block font-medium">Message</label>
                 <textarea
rows="4"
name="message"
value={consultationData.message}
onChange={handleConsultationChange}
placeholder="Write your message..."
className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
required
/>
                </div>

                {error && (
  <p className="text-red-500 text-sm">
    {error}
  </p>
)}

{success && (
  <p className="text-green-600 text-sm">
    {success}
  </p>
)}

               <button
  type="submit"
  disabled={loading}
  className="rounded-full bg-gradient-to-r from-red-500 to-red-400 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit"}
</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">

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
              { title: "Experienced Development Team", description: "Our team consists of seasoned professionals with years of experience." },
              { title: "AI-Driven Solutions", description: "We incorporate AI to make your systems smarter and more efficient." },
              { title: "Scalable Architecture", description: "We build architectures that can grow with your business needs." },
              { title: "Modern Technologies", description: "We utilize the latest stacks like React, Next.js, Node, Python, and AWS." },
              { title: "Affordable Pricing", description: "High-quality solutions tailored to fit within your reasonable budget." },
              { title: "On-Time Delivery", description: "We stick to strict timelines to ensure your project goes live when planned." },
              { title: "Continuous Support", description: "Ongoing maintenance and updates to keep your systems running smoothly." },
              { title: "Customer-Centric Approach", description: "Your goals are our priority, and we ensure transparent communication." },
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


      {/* ================= TECHNOLOGIES ================= */}
      <section className="relative py-28 bg-[#020b18] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0C8DA1]">
              Technologies We Use
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              We build with modern, scalable, and secure technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
            {[
              { name: "Angular", icon: <FaAngular className="w-8 h-8 text-white" /> },
              { name: "React JS", icon: <FaReact className="w-8 h-8 text-white" /> },
              { name: "Node", icon: <FaNodeJs className="w-8 h-8 text-white" /> },
              { name: "Vue.Js", icon: <FaVuejs className="w-8 h-8 text-white" /> },
              { name: "MEAN", icon: (
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-3zm-1 17.9C7.4 18.7 5 15.1 5 11V6.4l6-2v15.5zm8-8.9c0 4.1-2.4 7.7-6 8.9V4.4l6 2V11z"/>
                </svg>
              )},
              { name: "PHP", icon: <FaPhp className="w-8 h-8 text-white" /> },
              { name: "Laravel", icon: <FaLaravel className="w-8 h-8 text-white" /> },
              { name: "ASP.NET MVC", icon: <SiDotnet className="w-8 h-8 text-white" /> },
              { name: "React Native", icon: <FaReact className="w-8 h-8 text-white" /> },
              { name: "IOS", icon: <FaApple className="w-8 h-8 text-white" /> },
              { name: "Android", icon: <FaAndroid className="w-8 h-8 text-white" /> },
              { name: "Azure", icon: <SiMicrosoftazure className="w-8 h-8 text-white" /> },
              { name: "Magento", icon: <SiMagento className="w-8 h-8 text-white" /> },
              { name: "Wordpress", icon: <FaWordpress className="w-8 h-8 text-white" /> },
              { name: "Bootstrap", icon: <FaBootstrap className="w-8 h-8 text-white" /> },
              { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-white" /> },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex items-center bg-[#051329] border border-[#0d2242] rounded-xl overflow-hidden shadow-md hover:border-[#0C8DA1]/50 hover:shadow-[0_0_15px_rgba(12,141,161,0.2)] transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#091b36] border-r border-[#0d2242] flex items-center justify-center shrink-0">
                  {tech.icon}
                </div>
                <div className="flex-1 px-4 sm:px-6 py-4 text-left">
                  <span className="text-white font-bold text-base sm:text-lg block tracking-wide">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionTitle title="Our Process" subtitle="How we turn your ideas into reality" />
          
          <div className="mt-16 flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6">
            {[
              { step: "1", title: "Discovery", desc: "Understanding business requirements." },
              { step: "2", title: "Planning", desc: "Creating the project roadmap." },
              { step: "3", title: "Design", desc: "Building intuitive UI/UX." },
              { step: "4", title: "Development", desc: "Writing scalable and secure code." },
              { step: "5", title: "Testing", desc: "Ensuring quality and reliability." },
              { step: "6", title: "Deployment", desc: "Launching the product." },
              { step: "7", title: "Support", desc: "Continuous maintenance and updates." },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 min-w-[200px] bg-slate-50 border border-gray-200 rounded-2xl p-6 relative group hover:bg-[#0C8DA1] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0C8DA1] group-hover:bg-white text-white group-hover:text-[#0C8DA1] flex items-center justify-center font-bold text-xl mx-auto mb-4 transition-colors">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2">{process.title}</h4>
                <p className="text-sm text-gray-600 group-hover:text-white/90">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative py-32 overflow-hidden">


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
                className="group relative h-full"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-[#0C8DA1] opacity-0 blur-md transition duration-500 group-hover:opacity-20" />
                <div className="relative h-full">
                  <TestimonialCard {...testimonial} delay={0} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
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