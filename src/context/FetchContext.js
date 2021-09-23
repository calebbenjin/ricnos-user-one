import {useState, useEffect, createContext} from 'react'
import { useRouter } from 'next/router'
import {NEXT_URL} from '../lib/index'


const FetchContext = createContext()

export const FetchProvider = ({children}) => {
  const router = useRouter();

  // Tracking Fetch Requests

  // Contact Form Fetch Requests

  // Get quote Fetch Request
  const quote = async ({ weight, value, vehicle, region }) => {
    const res = await fetch(`${NEXT_URL}/api/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weight, value, vehicle, region }),
    })

    const quote = await res.json()

    console.log(quote)

    // if(res.ok) {
    //   setIsLoading(true)
    //   setUser(user)
    //   router('/dashboard/');
    // } else {
    //   setIsLoading(false)
    //   setError(data.message)
    //   setError(null)
    // }
  }



  return (
    <FetchContext.Provider value={{quote}}>
      {children}
    </FetchContext.Provider>
  )
}

export default FetchContext
