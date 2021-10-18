import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL, API_URL } from '@/lib/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const router = useRouter();

  useEffect(() => {
    console.log('use effect in auth context running');
    return checkUserLoggedIn();
  }, []);

  // Resister user
  // ====================================

  const signup = async ({ email, phone, password, password_confirmation }) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phone, password, password_confirmation }),
    });

    const resData = await res.json();

    if (res.ok) {
      setIsLoading(true);
      setUser(resData.user);
      router.push('/dashboard/');
    } else {
      setIsLoading(false);
      setError(resData.message);
      setError(null);
    }
  };

  // Login user
  // =====================================
  const login = async ({ email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setIsLoading(true);
      setUser(data.user);
      router.push('/dashboard/');
    } else {
      setIsLoading(false);
      setIsError(data.message);
      setIsError(null);
    }
  };



  // Check if user is logged in
  // ================================================
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  console.log(user)

  // Logout user
  // =====================================

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      router.push('/login');
    }
  };

  // Password reset
  // =====================================

  // Track item
  // =====================================

  // Get request pickup
  // =====================================

  return (
    <AuthContext.Provider
      value={{ user, isError, isLoading, logout, signup, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
