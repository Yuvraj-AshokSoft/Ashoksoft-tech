import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Loader from '../components/Loader';
import { serviceService } from '../services/api';

const detailTemplates = {
  'web-development': {
    price: 'Rs 999 - Rs 9,999',
    timeline: '4-12 weeks',
    features: ['Responsive Design', 'Fast Performance', 'Secure & Scalable', 'Mobile First', 'CMS Integration', 'Clean Deployment'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS'],
  },
  'app-development': {
    price: 'Rs 1,999 - Rs 14,999',
    timeline: '8-16 weeks',
    features: ['Native & Cross-platform', 'Real-time Sync', 'Offline Support', 'Push Notifications', 'Analytics', 'Cloud Integration'],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'MongoDB'],
  },
  'ui-ux-design': {
    price: 'Rs 799 - Rs 6,999',
    timeline: '2-8 weeks',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping', 'Usability Testing', 'Design System'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'Webflow'],
  },
  'ai-automation': {
    price: 'Rs 1,499 - Rs 12,999',
    timeline: '3-10 weeks',
    features: ['Workflow Automation', 'AI Chatbots', 'Data Processing', 'CRM Integration', 'Reporting Dashboards', 'Process Optimization'],
    technologies: ['Python', 'Node.js', 'OpenAI API', 'Zapier', 'MongoDB'],
  },
  branding: {
    price: 'Rs 799 - Rs 7,999',
    timeline: '2-6 weeks',
    features: ['Logo Direction', 'Brand Guidelines', 'Color System', 'Typography', 'Social Media Kit', 'Launch Assets'],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'Canva', 'Webflow'],
  },
};

const fallbackService = {
  title: 'Service',
  description: 'A focused digital solution tailored for your business goals.',
  imageData: '',
};

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(fallbackService);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadService = async () => {
      try {
        const response = await serviceService.getService(id);
        setService(response.data.service || fallbackService);
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load this service.');
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  const details = useMemo(() => detailTemplates[id] || {
    price: 'Custom Quote',
    timeline: 'Based on scope',
    features: ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Support'],
    technologies: ['Modern Stack', 'Responsive UI', 'Secure APIs'],
  }, [id]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 bg-dark-bg px-4 text-center">
        <p className="text-rose-600 mb-6">{error}</p>
        <Link to="/">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark-bg">
      <section className="pt-32 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl">{service.description}</p>

              <div className="grid gap-5 sm:grid-cols-3 mb-8">
                <div className="rounded-2xl border border-dark-border bg-white p-5">
                  <p className="text-slate-500 text-sm mb-2">Price Range</p>
                  <p className="text-xl font-bold text-brand-blue">{details.price}</p>
                </div>
                <div className="rounded-2xl border border-dark-border bg-white p-5">
                  <p className="text-slate-500 text-sm mb-2">Timeline</p>
                  <p className="text-xl font-bold text-brand-cyan">{details.timeline}</p>
                </div>
                <div className="flex items-center">
                  <Link to="/contact" className="w-full">
                    <Button>Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-dark-border bg-white shadow-brand-cyan">
              {service.imageData ? (
                <img
                  src={service.imageData}
                  alt={service.title}
                  className="h-72 w-full object-cover sm:h-96"
                />
              ) : (
                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-brand-blue/15 to-brand-cyan/15 px-8 text-center sm:h-96">
                  <p className="text-xl font-semibold text-slate-700">{service.title}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-gradient-to-b from-dark-card/50 to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Key Features" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.features.map((feature, idx) => (
              <motion.div
                key={feature}
                className="flex items-center gap-4 p-4 bg-dark-card/80 border border-dark-border rounded-lg hover:border-brand-blue transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-brand-blue rounded-full flex-shrink-0" />
                <span className="text-slate-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Technologies Used" align="left" />

          <div className="flex flex-wrap gap-4">
            {details.technologies.map((tech, idx) => (
              <motion.div
                key={tech}
                className="px-5 py-3 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 border border-brand-blue rounded-lg text-brand-blue font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 text-center">
        <motion.div
          className="max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8">
            Let's discuss how we can help you achieve your business goals with our {service.title.toLowerCase()} service.
          </p>
          <Link to="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetail;
