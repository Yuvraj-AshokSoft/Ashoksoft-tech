import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import Button from '../components/Button.jsx';
import { inquiryService } from '../services/api.js';

const projectTypes = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'AI Automation',
  'Branding',
  'Other',
];

const budgetRanges = [
  'Rs 500 - Rs 1,000',
  'Rs 1,000 - Rs 2,500',
  'Rs 2,500 - Rs 5,000',
  'Rs 5,000 - Rs 10,000',
  'Rs 10,000+',
];

const timelines = ['1-3 months', '3-6 months', '6-12 months', '12+ months'];

const getInitialForm = (user) => ({
  name: user?.name || '',
  email: user?.email || '',
  phone: '',
  companyName: '',
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  timeline: timelines[0],
  description: '',
});

const Contact = () => {
  const { isAuthenticated, user } = useAuth();
  const [formData, setFormData] = useState(getInitialForm(user));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      name: current.name || user?.name || '',
      email: current.email || user?.email || '',
    }));
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);

    try {
      await inquiryService.createInquiry({
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim(),
        description: formData.description.trim(),
      });

      setSuccess('Your inquiry was sent successfully. We will get back to you shortly.');
      setFormData({
        ...getInitialForm(user),
        name: formData.name.trim() || user?.name || '',
        email: formData.email.trim() || user?.email || '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to send your inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 bg-slate-50 px-3 sm:px-6 lg:px-8 text-slate-900 overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
        <SectionTitle title="Contact Us" subtitle="Let's Build Something Amazing Together" />

        <div className="grid min-w-0 gap-6 md:gap-8 md:grid-cols-2">
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
              <p className="text-slate-600 mt-3">
                Have an idea? Need a website? Looking for AI solutions? Want custom software? We're here to help.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 min-w-0">
              <p className="text-slate-600">Email</p>
              <p className="text-slate-900 font-semibold break-words">Ashoksoft.technologies@gmail.com</p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 min-w-0">
              <p className="text-slate-600">Phone</p>
              <p className="text-slate-900 font-semibold">+91 72499 53396</p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 min-w-0">
              <p className="text-slate-600">Location</p>
              <p className="text-slate-900 font-semibold">India</p>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 lg:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {isAuthenticated && (
                <p className="text-slate-600 mb-6">
                  You are logged in as {user?.name || 'user'}. Your inquiry will be linked to your account.
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm text-slate-600" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-slate-600" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm text-slate-600" htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-slate-600" htmlFor="companyName">Company</label>
                  <input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                    placeholder="Company or brand name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-slate-600" htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                  required
                >
                  {projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>{projectType}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm text-slate-600" htmlFor="budget">Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                    required
                  >
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-slate-600" htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                    required
                  >
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-slate-600" htmlFor="description">Message</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                  rows="5"
                  maxLength="2000"
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              {error && <p className="text-sm text-rose-600">{error}</p>}
              {success && <p className="text-sm text-emerald-600">{success}</p>}

              <Button type="submit" size="lg" loading={submitting}>Send Request</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

