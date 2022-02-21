import { useState, useEffect, useContext } from "react";
import OrdersTable from "@/components/OrdersTable";
import Layout from "@/components/Layout";
import { API_URL } from "@/lib/index";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import PageLoader from "@/components/PageLoader";
import BlankMessageLayout from "@/components/BlankMessageLayout";

export default function OrdersPage() {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // });

  if (!user) {
    return <PageLoader />;
  }

  return (
    <Layout title="Shipment Orders">
      {user.orders?.length > 0 ? (
        <OrdersTable />
      ) : (
        <BlankMessageLayout error={true} message="You don't have any orders" />
      )}
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
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
