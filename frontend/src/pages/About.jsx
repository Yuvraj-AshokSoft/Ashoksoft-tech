import React from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import { motion } from 'framer-motion';

const About = () => (
  <div className="min-h-screen pt-24 sm:pt-28 bg-dark-bg px-4 sm:px-6 lg:px-8 text-slate-800">
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-14">
      <section className="bg-dark-card/80 border border-dark-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-brand-blue">
        <SectionTitle title="About AshokSoft" subtitle="We design digital experiences that help brands stand out and grow." />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-slate-600 leading-relaxed text-base sm:text-lg">
          AshokSoft Tech is a full-service digital agency focused on building modern websites, mobile apps, automation, and brand
          solutions. Our team combines technical expertise, creative design, and business strategy to deliver measurable results.
        </motion.p>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: 'Creative Solutions',
            description: 'We craft tailored digital strategies that bring your brand to life and connect with your audience.',
          },
          {
            title: 'Technical Excellence',
            description: 'Our developers build scalable, secure applications using modern web and cloud technologies.',
          },
          {
            title: 'Customer Focus',
            description: 'We keep communication transparent and deliver every project with quality and speed.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl sm:rounded-3xl border border-dark-border bg-dark-bg/70 p-5 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default About;

