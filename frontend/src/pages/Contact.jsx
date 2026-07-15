import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import Button from '../components/Button.jsx';
import { inquiryService } from '../services/api.js';

const inquiryTabs = [
  'General Contact',
  'Sales Inquiry',
  'Partnership Inquiry',
  'Careers',
  'Support'
];

const projectTypes = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'AI Automation',
  'Branding',
  'Digital marketing',
  'AI workshop',
  'robotics lab setup for schools',
  'Other',
];

const budgetRanges = [
  'Rs 10,000 - Rs 25,000',
  'Rs 25,000 - Rs 50,000',
  'Rs 50,000+',
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
  portfolioUrl: '', // For careers
});

const Contact = () => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(inquiryTabs[0]);
  const [formData, setFormData] = useState(getInitialForm(user));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Check URL parameters for pre-selecting a tab
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type') || location.state?.type;
    
    if (typeParam) {
      const match = inquiryTabs.find(tab => 
        tab.toLowerCase().includes(typeParam.toLowerCase()) || 
        tab.toLowerCase().replace(' ', '-') === typeParam.toLowerCase()
      );
      if (match) {
        setActiveTab(match);
      }
    }
  }, [location]);

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      name: current.name || user?.name || '',
      email: current.email || user?.email || '',
    }));
  }, [user]);

  const getWordCount = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let finalValue = value;

    if (name === 'phone') {
      // Keep only digits and the plus sign
      let cleanValue = value.replace(/[^\d+]/g, '');
      // Ensure '+' is only allowed at the beginning
      if (cleanValue.includes('+')) {
        cleanValue = '+' + cleanValue.replace(/\+/g, '');
      }
      // Enforce maximum of 10 digits for the main number (excluding the leading +)
      const digitsOnly = cleanValue.replace(/\+/g, '');
      if (digitsOnly.length > 10) {
        const truncatedDigits = digitsOnly.slice(0, 10);
        cleanValue = cleanValue.startsWith('+') ? '+' + truncatedDigits : truncatedDigits;
      }
      finalValue = cleanValue;
    }

    setFormData((current) => ({
      ...current,
      [name]: finalValue,
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
    // Optionally clear form or keep data
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);

    // Form validations
    if (activeTab === 'Sales Inquiry') {
      if (formData.description.trim().length < 20) {
        setError('Your message must be at least 20 characters long.');
        setSubmitting(false);
        return;
      }
    }

    if (activeTab === 'Careers') {
      const urlTrimmed = formData.portfolioUrl.trim();
      // Regex for matching valid absolute URL starting with http:// or https://
      const absoluteUrlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
      // Regex for matching LinkedIn profile URL (can be absolute or just linkedin.com/...)
      const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|company)\/[A-Za-z0-9_-]+/i;

      const isValidLinkedIn = linkedInRegex.test(urlTrimmed);
      const isValidAbsolute = absoluteUrlRegex.test(urlTrimmed);

      if (!isValidLinkedIn && !isValidAbsolute) {
        setError('Please enter a valid LinkedIn profile URL or a valid absolute URL (starting with http:// or https://).');
        setSubmitting(false);
        return;
      }

      const coverLetterWords = getWordCount(formData.description);
      if (coverLetterWords > 300) {
        setError('Your cover letter/experience description must not exceed 300 words.');
        setSubmitting(false);
        return;
      }
    }

    // Format the description to include the inquiry type and any specific fields
    let finalDescription = `[${activeTab.toUpperCase()}] ${formData.description.trim()}`;
    if (activeTab === 'Careers' && formData.portfolioUrl) {
      finalDescription += `\n\nPortfolio/LinkedIn: ${formData.portfolioUrl.trim()}`;
    }

    try {
      await inquiryService.createInquiry({
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        // Fallback for fields that might be hidden based on tab
        companyName: activeTab === 'Careers' ? 'Individual/Applicant' : (formData.companyName.trim() || 'N/A'),
        description: finalDescription,
      });

      setSuccess(`Your ${activeTab.toLowerCase()} was sent successfully. We will get back to you shortly.`);
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

  // Logic for what fields to show based on the active tab
  const showCompany = ['Sales Inquiry', 'Partnership Inquiry', 'General Contact'].includes(activeTab);
  const showProjectDetails = ['Sales Inquiry'].includes(activeTab);
  const showPortfolio = ['Careers'].includes(activeTab);

  return (
    <div className="min-h-screen pt-28 bg-slate-50 px-3 sm:px-6 lg:px-8 text-slate-900 overflow-x-hidden pb-20">
      <div className="w-full max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
        <SectionTitle title="Contact Us" subtitle="Let's Build Something Amazing Together" />

        <div className="grid min-w-0 gap-6 md:gap-8 md:grid-cols-12">
          <div className="min-w-0 space-y-5 sm:space-y-6 md:col-span-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
              <p className="text-slate-600 mt-3">
                Have an idea? Need a website? Looking for a partnership or a career? Select the appropriate inquiry type and we'll route you to the right team.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 min-w-0">
              <p className="text-slate-600">Email</p>
              <p className="text-slate-900 font-semibold break-words">Ashoksoft.technologies@gmail.com</p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 min-w-0">
              <p className="text-slate-600">Phone</p>
              <p className="text-slate-900 font-semibold">+91 8218294664</p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 min-w-0">
              <p className="text-slate-600">Location</p>
              <p className="text-slate-900 font-semibold">Noida, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl sm:rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 lg:p-8 md:col-span-7">
            
            {/* Inquiry Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {inquiryTabs.map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#0C8DA1] text-white shadow-md' 
                      : 'bg-white border border-gray-200 text-slate-600 hover:border-[#0C8DA1] hover:text-[#0C8DA1]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isAuthenticated && (
                <p className="text-slate-600 mb-6 text-sm">
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

                {showCompany && (
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
                )}

                {showPortfolio && (
                  <div className="space-y-2">
                    <label className="block text-sm text-slate-600" htmlFor="portfolioUrl">LinkedIn / Portfolio URL</label>
                    <input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                      placeholder="https://linkedin.com/in/..."
                      required
                    />
                  </div>
                )}
              </div>

              {showProjectDetails && (
                <>
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
                </>
              )}

              <div className="space-y-2">
                <label className="block text-sm text-slate-600" htmlFor="description">
                  {activeTab === 'Careers' ? 'Cover Letter / Experience' : 'Message'}
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
                  rows="5"
                  maxLength="2000"
                  placeholder={activeTab === 'Careers' ? 'Tell us why you are a great fit' : 'Tell us about your project or inquiry'}
                  required
                />
                {activeTab === 'Careers' && (
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className={getWordCount(formData.description) > 300 ? "text-rose-600 font-semibold" : "text-slate-500"}>
                      {getWordCount(formData.description)} / 300 words
                    </span>
                    {getWordCount(formData.description) > 300 && (
                      <span className="text-rose-600 font-semibold">Exceeds 300 word limit!</span>
                    )}
                  </div>
                )}
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
