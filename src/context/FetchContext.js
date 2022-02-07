import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '../lib/index'

const FetchContext = createContext()

export const FetchProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [showResult, setShowResult] = useState(null)

  const router = useRouter()

  // Tracking Fetch Requests

  // Contact Form Fetch Requests

  // Get quote Fetch Request
  const quote = async ({
    weight,
    value,
    vehicle,
    region,
    // arrival,
    // departure,
    // description,
    // email,
    // name,
    phone,
  }) => {
    const res = await fetch(`${NEXT_URL}/api/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        weight,
        value,
        vehicle,
        region,
        // arrival,
        // departure,
        // description,
        // email,
        // name,
        // phone,
      }),
    })

    const quote = await res.json()

    if (res.ok) {
      setIsLoading(true)
      setShowResult(true)
      setUser(user)
    } else {
      setIsLoading(false)
      setShowResult(false)
      setIsError(data.message)
      setIsError(null)
    }
  }

  return (
    <FetchContext.Provider value={{ quote, isLoading, showResult, isError }}>
      {children}
    </FetchContext.Provider>
  )
}

export default FetchContext
