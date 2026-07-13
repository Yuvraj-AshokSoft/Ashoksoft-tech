import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Button from '../components/Button.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);
    setLoading(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    if (result.data.user?.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 bg-dark-bg px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-3xl mx-auto bg-dark-card/70 border border-dark-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-brand-blue">
        <SectionTitle title="Login" subtitle="Access your account and manage your projects." />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-slate-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-dark-border bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-brand-blue"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button type="submit" loading={loading} size="lg" className="sm:w-full">
            Sign In
          </Button>

          <p className="text-sm text-slate-600">
            Don&apos;t have an account?{' '}
            <Link className="text-brand-blue hover:text-brand-cyan" to="/register">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

