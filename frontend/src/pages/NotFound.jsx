import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import Button from '../components/Button.jsx';

const NotFound = () => (
  <div className="min-h-screen pt-28 bg-dark-bg px-4 sm:px-6 lg:px-8 text-slate-900 flex items-center justify-center">
    <div className="max-w-4xl mx-auto text-center bg-dark-card/80 border border-dark-border rounded-3xl p-14 shadow-brand-blue">
      <SectionTitle title="Page Not Found" subtitle="The page you are looking for does not exist." />
      <p className="text-slate-600 mb-10">Please return to the homepage or explore our services.</p>
      <Link to="/">
        <Button size="lg">Back to Home</Button>
      </Link>
    </div>
  </div>
);

export default NotFound;

