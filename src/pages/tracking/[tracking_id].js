import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/HomeLayout';
import Link from 'next/link';
import TrackForm from '@/components/TrackForm';
import { Container, Heading, Text, Flex, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { API_URL } from '@/lib/index';
// import { GoCheck } from 'react-icons/go'
// import { FaLongArrowAltRight } from 'react-icons/fa'
// import AccordonComp from '@/components/Accordon'
// import Button from '@/components/Button'
import ShippingDisplay from '@/components/ShippmentDisplay';
// import {API_URL} from '@/lib/index'
// import FetchContext from '@/context/FetchContext'

export default function TrackingPage({ tracking_data }) {
  return (
    <Layout>
      <Div>
        <Container maxWidth="container.md">
          <Heading textAlign="center" fontWeight="normal">
            TRACK:EXPRESS
          </Heading>
          <TrackForm bg="white" />

          {tracking_data.length === 0 && (
            <Heading textAlign="center">NO Shippment</Heading>
          )}

          {tracking_data.map((item) => (
            <ShippingDisplay data={tracking_data} key={item.id} items={item} />
          ))}

          {/* <DisplayCard>
            <Heading textAlign='center'>Please wait data is Loading...</Heading>
          </DisplayCard> */}

          <Text color="grey" textAlign="center">
            If you would prefer to speak to someone personally about the
            location of your shipment, please contact Ricnos logistics{' '}
            <Link href="/login">
              <a>Customer Service</a>
            </Link>
          </Text>
        </Container>
      </Div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { tracking_id } = context.query;
  let tracking_data;
  try {
    const res = await fetch(`${API_URL}/tracking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tracking_id: tracking_id }),
    });
    tracking_data = await res.json();
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      tracking_data: tracking_data.data.order,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/tracking`)
//   const orders = await res.json()

//   console.log(orders)

//   return {
//     props: { orders },
//   }
// }

const Div = styled.div`
  margin: 10rem 0;

  a {
    color: red;
    text-decoration: none;
  }

  .icon {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    .icon {
      font-size: 3.5rem;
    }
  }
`;

const DisplayCard = styled.div`
  margin: 5rem 0;
  padding: 1rem;
  background: #fff;

  @media screen and (min-width: 1024px) {
    padding: 3rem;
    margin: 5rem 0;
    background: #fff;
  }
`;

const FlexContainer = styled.div``;
const DateBox = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: solid 2px #ccc;
`;

const Line = styled.div`
  width: 35%;
  height: 6px;
  margin-top: 1rem;
  margin-right: 1rem;
  background: green;
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 10px;
    margin-top: 1rem;
    margin-right: 1rem;
    background: green;
  }
`;
