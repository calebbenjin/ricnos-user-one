import { useState, useEffect, useContext } from 'react';
import OrdersTable from '@/components/OrdersTable';
import Layout from '@/components/Layout';
import { API_URL } from '@/lib/index';
import { parseCookies } from '@/helpers/index';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';

export default function OrdersPage() {
  const [filterBtn, setFilterBtn] = useState('all');
  const { user } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Layout title="Shipments orders">
      <OrdersTable orders={user.orders} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: null,
    },
  };
}
