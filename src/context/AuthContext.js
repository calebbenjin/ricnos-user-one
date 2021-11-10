import { createContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/lib/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isError, setIsError] = useState(null)
  const isMounted = useRef(false)

  const router = useRouter()

  useEffect(() => {
    if (isMounted.current) {
      console.log('use effect in auth context running')
      return checkUserLoggedIn()
    } else {
      isMounted.current = true
    }
  }, [])

  // Resister user
  // ====================================
  const signup = async ({ email, phone, password, password_confirmation }) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phone, password, password_confirmation }),
    })

    const resData = await res.json()

    if (res.ok) {
      setUser(resData.user)
      router.push('/login')
    } else {
      setIsError(resData.message)
      setIsError(null)
    }
  }

  // Login user
  // =====================================
  const login = async ({ email, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/dashboard/')
    } else {
      setIsError(data.message)
      setIsError(null)
    }
  }

  // Check if user is logged in
  // ================================================
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user.data.user)
    } else {
      setUser(null)
    }
  }

  // Logout user
  // =====================================

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      setUser(null)
      router.push('/login')
    }
  }

  // Password reset
  // =====================================

  // Track item
  // =====================================

  // Get request pickup
  // =====================================

  return (
    <AuthContext.Provider value={{ user, isError, logout, signup, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
