import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const DashboardSidebar = ({ admin = false }) => {
  const { logout } = useAuth();
  const location = useLocation();

  const adminLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Inquiries', path: '/admin/inquiries' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Analytics', path: '/admin/analytics' },
  ];

  const userLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'My Inquiries', path: '/dashboard/inquiries' },
    { name: 'New Inquiry', path: '/contact' },
    { name: 'Profile', path: '/dashboard/profile' },
  ];

  const links = admin ? adminLinks : userLinks;

  return (
    <motion.aside
      className="w-64 bg-gradient-to-b from-dark-card to-dark-bg border-r border-dark-border h-screen sticky top-0 p-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <Link to={admin ? '/admin' : '/dashboard'} className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="text-white font-bold">{admin ? 'Admin' : 'User'} Panel</span>
      </Link>

      {/* Navigation Links */}
      <nav className="space-y-2 mb-12">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === link.path
                ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white'
                : 'text-gray-300 hover:text-white hover:bg-dark-card'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <motion.button
        onClick={logout}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-brand-cyan transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FiLogOut size={18} />
        Logout
      </motion.button>
    </motion.aside>
  );
};

export default DashboardSidebar;

