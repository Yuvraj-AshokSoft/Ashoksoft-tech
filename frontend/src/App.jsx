import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import TechnologyDetail from './pages/TechnologyDetail.jsx';
import HireDeveloper from './pages/HireDeveloper.jsx';
import Team from './pages/Team.jsx';
import Partners from './pages/Partners.jsx';
import Career from './pages/Career.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';
import Blogs from './pages/Blogs.jsx';
import { ProtectedRoute } from './utils/ProtectedRoute.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const App = () => (
  <div className="min-h-screen bg-dark-bg text-slate-900 light-theme">
    <Navbar />
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Navigate to="/" />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/technology/:id" element={<TechnologyDetail />} />
        <Route path="/hire/:id" element={<HireDeveloper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default App;

