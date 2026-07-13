import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-28 bg-dark-bg px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-5xl mx-auto bg-dark-card/80 border border-dark-border rounded-3xl p-10 shadow-brand-blue">
        <SectionTitle title="Dashboard" subtitle="Manage your profile and review recent activity." />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-dark-border bg-dark-bg/70 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Welcome back, {user?.name || 'Partner'}.</h2>
            <p className="text-slate-600 mb-4">
              Your account is set up. Use the dashboard to track inquiries, see project updates, and manage your profile.
            </p>
            <div className="space-y-3 text-slate-600">
              <p><span className="font-semibold text-slate-900">Email:</span> {user?.email}</p>
              <p><span className="font-semibold text-slate-900">Role:</span> {user?.role}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-dark-border bg-dark-bg/70 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Next steps</h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Submit a project inquiry from the Contact page.</li>
              <li>• Update your profile and contact details any time.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

