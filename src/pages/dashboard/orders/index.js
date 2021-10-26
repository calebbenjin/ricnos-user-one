import { useEffect, useCallback } from 'react'

import OrdersTable from '@/components/OrdersTable'
import Layout from '@/components/Layout'
import { API_URL } from '@/lib/index'
import { parseCookies } from '@/helpers/index'

export default function OrdersPage({ user }) {

console.log(user)

  return (
    <Layout
      title='Shipments orders'
      email={user.email}
      notification={user.general_notification}
      imgProfile={user.passport_thumbnail}
      name={user.name}
    >
      <OrdersTable orders={user.orders} />
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

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
}
