import { useAuth } from '../context/AuthContext';

export const useProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  return { isAuthenticated, loading };
};
