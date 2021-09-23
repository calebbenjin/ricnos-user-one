import OrdersTable from '@/components/OrdersTable'
import Layout from '@/components/Layout'

export default function OrdersPage() {
  return (
    <Layout title='Shipments orders'>
      <OrdersTable />
    </Layout>
  )
}
