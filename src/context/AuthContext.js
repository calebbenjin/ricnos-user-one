import { createContext, useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '@/lib/index';
import PageLoader from '@/components/PageLoader';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const isMounted = useRef(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      return checkUserLoggedIn();
    } else {
      isMounted.current = true;
    }
  }, []);

  useEffect(() => {
    checkUserLoggedIn();
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
      setUser(resData.user);
      router.push('/login');
    } else {
      setIsError(resData.message);
      setIsError(null);
    }
  };

  // Login user
  // =====================================
  const login = async ({ email, password }) => {
    setIsLoading(true);
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setIsLoading(false);
      router.push('/dashboard/');
    } else {
      setIsLoading(false);
      setIsError(data.message);
      setIsError(null);
    }
  };

  // Check if user is logged in
  // ================================================
  const checkUserLoggedIn = useCallback(async () => {
    setInitialLoading(true);
    try {
      const res = await fetch(`${NEXT_URL}/api/user`);
      const data = await res.json();
      setUser(data.user.data.user);
      setInitialLoading(false);
    } catch (error) {
      fetch(`${NEXT_URL}/api/logout`, {
        method: 'POST',
      })
        .then((res) => {
          setUser(null);
          setInitialLoading(false);
        })
        .catch((err) => console.error('Error removing bad token'));
    }
  }, []);

  // Logout user
  // =====================================

  const logout = async () => {
    fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })
      .then((res) => {
        setUser(null);
        router.push('/login');
      })
      .catch((error) => {
        console.error('error logging out user');
      });
  };

  // Password reset
  // =====================================

  // Track item
  // =====================================

  // Get request pickup
  // =====================================

  return (
    <AuthContext.Provider
      value={{ user, isError, logout, signup, login, isLoading }}
    >
      {initialLoading ? <PageLoader /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
