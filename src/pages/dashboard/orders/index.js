import { useEffect } from 'react'

import OrdersTable from '@/components/OrdersTable'
import Layout from '@/components/Layout'
import { API_URL } from '@/lib/index'
import { parseCookies } from '@/helpers/index'
import { useRouter } from 'next/router'

export default function OrdersPage({ user }) {
  const router = useRouter()

  useEffect(() => {
    if(!user) {
      router.push('/login')
    }
  })

  if(!user) {
    return null
  }

  return (
    <Layout
      title='Shipments orders'
      data={user}
    >
      <OrdersTable orders={user && user.orders} />
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if(token) {
    const resUser = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  
    const userData = await resUser.json()
  
    const { user } = userData.data
  
    return {
      props: {
        user,
      },
    }
  } else {
    return {
      props: {}
    }
  }
}
