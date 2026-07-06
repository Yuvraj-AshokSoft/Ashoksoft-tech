import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { adminService } from '../services/api.js';
import SectionTitle from '../components/SectionTitle.jsx';
import Loader from '../components/Loader.jsx';
import PortfolioManager from '../components/PortfolioManager.jsx';

const defaultStats = {
  totalUsers: 0,
  totalInquiries: 0,
  pendingProjects: 0,
  completedProjects: 0,
};

const statusClasses = {
  Pending: 'bg-amber-100 text-amber-700',
  Reviewed: 'bg-sky-100 text-sky-700',
  'In Progress': 'bg-violet-100 text-violet-700',
  Completed: 'bg-emerald-100 text-emerald-700',
  Rejected: 'bg-rose-100 text-rose-700',
};

const formatDate = (value) => {
  if (!value) return 'Not available';

  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
};

const Admin = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [serviceMessage, setServiceMessage] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [savingService, setSavingService] = useState('');
  const [inquiries, setInquiries] = useState([]);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    const loadAdminData = async () => {
      try {
        const [inquiryRes, userRes, statsRes, serviceRes] = await Promise.all([
          adminService.getAllInquiries({ limit: 100 }),
          adminService.getAllUsers({ limit: 100 }),
          adminService.getDashboardStats(),
          adminService.getServices(),
        ]);

        setInquiries(inquiryRes.data.inquiries || []);
        setUsers(userRes.data.users || []);
        setStats(statsRes.data.stats || defaultStats);
        setServices(serviceRes.data.services || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load admin data.');
      } finally {
        setLoading(false);
      }
    };

    loadAdminData();
  }, []);

  const updateServiceInState = (updatedService) => {
    setServices((current) =>
      current.map((service) =>
        service.slug === updatedService.slug ? updatedService : service
      )
    );
  };

  const handleServiceUpload = async (service, file) => {
    if (!file) return;

    setServiceError('');
    setServiceMessage('');

    if (!file.type.startsWith('image/')) {
      setServiceError('Please choose a valid image file.');
      return;
    }

    if (file.size > 1.5 * 1024 * 1024) {
      setServiceError('Image size 1.5 MB se kam rakho.');
      return;
    }

    setSavingService(service.slug);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const response = await adminService.updateService(service.slug, {
          imageData: reader.result,
          imageName: file.name,
          isActive: true,
        });
        updateServiceInState(response.data.service);
        setServiceMessage(`${service.title} photo updated.`);
      } catch (err) {
        setServiceError(err.response?.data?.message || 'Unable to update service photo.');
      } finally {
        setSavingService('');
      }
    };
    reader.onerror = () => {
      setSavingService('');
      setServiceError('Unable to read selected image.');
    };
    reader.readAsDataURL(file);
  };

  const handleServiceActiveToggle = async (service) => {
    setServiceError('');
    setServiceMessage('');
    setSavingService(service.slug);

    try {
      const response = await adminService.updateService(service.slug, {
        isActive: !service.isActive,
      });
      updateServiceInState(response.data.service);
      setServiceMessage(`${service.title} is now ${response.data.service.isActive ? 'active' : 'inactive'}.`);
    } catch (err) {
      setServiceError(err.response?.data?.message || 'Unable to update service.');
    } finally {
      setSavingService('');
    }
  };

  if (loading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="min-h-screen pt-28 bg-dark-bg px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-dark-card/90 border border-dark-border p-10 shadow-brand-cyan mb-10">
          <SectionTitle title="Admin Panel" subtitle="Access user inquiries, profile details, and submission data all in one place." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-dark-border bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Total Users</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stats.totalUsers}</p>
            </div>
            <div className="rounded-3xl border border-dark-border bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Total Inquiries</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stats.totalInquiries}</p>
            </div>
            <div className="rounded-3xl border border-dark-border bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Pending</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stats.pendingProjects}</p>
            </div>
            <div className="rounded-3xl border border-dark-border bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Completed</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stats.completedProjects}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white border border-dark-border p-8 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">User Messages</h2>
              <p className="text-sm text-slate-500">{inquiries.length} loaded</p>
            </div>
            {error && <p className="text-sm text-rose-600 mb-4">{error}</p>}
            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <p className="text-slate-600">No inquiries found yet.</p>
              ) : (
                inquiries.map((inquiry) => (
                  <div key={inquiry._id} className="rounded-3xl border border-dark-border bg-slate-50 p-5">
                    <div className="flex flex-wrap justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-500">User Account</p>
                        <p className="text-lg font-semibold text-slate-900">{inquiry.userId?.name || inquiry.name}</p>
                        <p className="text-sm text-slate-600">{inquiry.userId?.email || inquiry.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">Status</p>
                        <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${statusClasses[inquiry.status] || statusClasses.Pending}`}>
                          {inquiry.status}
                        </span>
                        <p className="mt-2 text-xs text-slate-500">{formatDate(inquiry.createdAt)}</p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact Name</p>
                        <p className="text-sm text-slate-700">{inquiry.name}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact Email</p>
                        <p className="text-sm text-slate-700">{inquiry.email}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Phone</p>
                        <p className="text-sm text-slate-700">{inquiry.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Company</p>
                        <p className="text-sm text-slate-700">{inquiry.companyName}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Project Type</p>
                        <p className="text-sm text-slate-700">{inquiry.projectType}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Budget</p>
                        <p className="text-sm text-slate-700">{inquiry.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Timeline</p>
                        <p className="text-sm text-slate-700">{inquiry.timeline}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Account Role</p>
                        <p className="text-sm text-slate-700">{inquiry.userId?.role || 'user'}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Message</p>
                      <p className="text-sm leading-6 text-slate-700">{inquiry.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl bg-white border border-dark-border p-8 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Services</h2>
                <p className="text-sm text-slate-500">{services.length} active options</p>
              </div>
              <p className="text-slate-600 mb-5">
                Upload service photos here. Users will see the selected photo after clicking a service card.
              </p>
              {serviceError && <p className="text-sm text-rose-600 mb-4">{serviceError}</p>}
              {serviceMessage && <p className="text-sm text-emerald-600 mb-4">{serviceMessage}</p>}

              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.slug} className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="flex gap-4">
                      <div className="h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                        {service.imageData ? (
                          <img src={service.imageData} alt={service.title} className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center px-2 text-center text-xs text-slate-500">
                            No photo
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-slate-900">{service.title}</p>
                            <p className="text-xs text-slate-500">{service.imageName || 'Photo not uploaded yet'}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleServiceActiveToggle(service)}
                            disabled={savingService === service.slug}
                            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                              service.isActive
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {service.isActive ? 'Active' : 'Inactive'}
                          </button>
                        </div>
                        <label className="mt-4 inline-flex cursor-pointer rounded-xl bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:shadow-brand-blue">
                          {savingService === service.slug ? 'Uploading...' : 'Upload Photo'}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            disabled={savingService === service.slug}
                            onChange={(event) => handleServiceUpload(service, event.target.files?.[0])}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-dark-border p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Profile</h2>
              <p className="text-slate-600">Logged in as the administrator. This section allows you to review all submitted user details in one place.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p><span className="font-semibold text-slate-900">Name:</span> {user?.name}</p>
                <p><span className="font-semibold text-slate-900">Email:</span> {user?.email}</p>
                <p><span className="font-semibold text-slate-900">Role:</span> {user?.role}</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-dark-border p-8 shadow-sm">
              <PortfolioManager />
            </div>

            <div className="rounded-3xl bg-white border border-dark-border p-8 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Registered Users</h2>
                <p className="text-sm text-slate-500">{users.length} loaded</p>
              </div>
              {users.length === 0 ? (
                <p className="text-slate-600">No user accounts found.</p>
              ) : (
                <ul className="space-y-4">
                  {users.map((account) => (
                    <li key={account._id} className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                      <p className="font-semibold text-slate-900">{account.name}</p>
                      <p className="text-sm text-slate-600">{account.email}</p>
                      <div className="mt-3 grid gap-2 text-sm text-slate-700">
                        <p><span className="font-semibold text-slate-900">Role:</span> {account.role}</p>
                        <p><span className="font-semibold text-slate-900">Joined:</span> {formatDate(account.createdAt)}</p>
                        <p><span className="font-semibold text-slate-900">Inquiries:</span> {account.inquiryCount}</p>
                        {account.latestInquiry && (
                          <>
                            <p><span className="font-semibold text-slate-900">Latest Phone:</span> {account.latestInquiry.phone}</p>
                            <p><span className="font-semibold text-slate-900">Latest Company:</span> {account.latestInquiry.companyName}</p>
                            <p><span className="font-semibold text-slate-900">Latest Project:</span> {account.latestInquiry.projectType}</p>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

