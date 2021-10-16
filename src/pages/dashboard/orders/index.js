import { useEffect, useCallback } from 'react';

import OrdersTable from '@/components/OrdersTable';
import Layout from '@/components/Layout';
import { API_URL } from '@/lib/index';
import { parseCookies } from '@/helpers/index';

export default function OrdersPage({ orders }) {

  return (
    <Layout title="Shipments orders">
      <OrdersTable orders={orders} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const res = await fetch(`${API_URL}/user/order/orders`, requestOptions);
  const data = await res.json();

  console.log(token);

  return {
    props: {
      orders: data.data?.user.orders,
    },
  };
}
