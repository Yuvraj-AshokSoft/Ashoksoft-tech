import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext();

const clearStoredSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const saveSession = ({ token, user }) => {
  if (!token || !user) {
    throw new Error('Invalid auth response');
  }

  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          const response = await authService.getCurrentUser();
          const currentUser = response.data.user;

          localStorage.setItem('user', JSON.stringify(currentUser));
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          clearStoredSession();
        }
      } catch (error) {
        console.error('Auth check error:', error);
        clearStoredSession();
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login({ email: email.trim(), password });
      const { token, user } = response.data;

      saveSession({ token, user });
      setUser(user);
      setIsAuthenticated(true);
      
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await authService.register({ name, email, password });
      const { token, user } = response.data;

      saveSession({ token, user });
      setUser(user);
      setIsAuthenticated(true);
      
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const logout = () => {
    clearStoredSession();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isAuthenticated,
      login,
      register,
      logout,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

