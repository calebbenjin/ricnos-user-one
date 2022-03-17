import { useState, useEffect, useContext } from "react";
import OrdersTable from "@/components/OrdersTable";
import Layout from "@/components/Layout";
import { API_URL } from "@/lib/index";
import { parseCookies } from "@/helpers/index";
import PageLoader from "@/components/PageLoader";
import BlankMessageLayout from "@/components/BlankMessageLayout";

export default function OrdersPage({ user }) {
  if (!user) {
    return <PageLoader />;
  }

  return (
    <Layout title="Shipment Orders" data={user}>
      {user.orders?.length > 0 ? (
        <OrdersTable orderData={user.orders} />
      ) : (
        <BlankMessageLayout error={true} message="You don't have any orders" />
      )}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (token) {
    const res = await fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = await res.json();

    const { user } = userData.data;

    return {
      props: {
        user,
        token,
      },
    };
  }
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
