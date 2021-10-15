import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/HomeLayout';
import Link from 'next/link';
import TrackForm from '@/components/TrackForm';
import { Container, Heading, Text, Flex, Box } from '@chakra-ui/react';
import styled from 'styled-components';
// import { GoCheck } from 'react-icons/go'
// import { FaLongArrowAltRight } from 'react-icons/fa'
// import AccordonComp from '@/components/Accordon'
// import Button from '@/components/Button'
import ShippingDisplay from '@/components/ShippmentDisplay';
// import {API_URL} from '@/lib/index'
// import FetchContext from '@/context/FetchContext'

const shippingData = [
  {
    id: 1,
    userName: 'Joseph',
    location: 'April, 14 2021 16:10 Local time | LAGOS',
    trackingCode: '7302559294',
    from: 'Choba Port Harcourt',
    to: 'Ikeji Lagos',
    items: [
      { id: 1, name: 'Shoe', quantity: 2 },
      { id: 2, name: 'Hands Bag', quantity: 1 },
      { id: 3, name: 'Books', quantity: 5 },
      { id: 4, name: 'Laptop', quantity: 4 },
    ],
    shippments: [
      {
        id: 1,
        date: 'April, 14 2021',
        time: '16:10',
        status: 'Delivered',
      },
      {
        id: 2,
        date: 'April, 14 2021',
        time: '16:10',
        status: 'Delivered',
      },
      {
        id: 3,
        date: 'April, 14 2021',
        time: '16:10',
        status: 'Delivered',
      },
    ],
  },
];

export default function TrackingPage() {
  const [shipmentData, setShipmentData] = useState(shippingData);
  const [isLoading, setIsLoading] = useState(true);
  // const {login} = useContext(FetchContext)

  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      setShipmentData(router.query.tracking_data);
    }

    console.log(router.query.tracking_data);
  }, []);

  return (
    <Layout>
      <Div>
        <Container maxWidth="container.md">
          <Heading textAlign="center" fontWeight="normal">
            TRACK:EXPRESS
          </Heading>
          <TrackForm bg="white" />

          {shipmentData.length === 0 && (
            <Heading textAlign="center">NO Shippment</Heading>
          )}

          {shipmentData.map((item) => (
            <ShippingDisplay key={item.id} items={item} />
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

// export async function getServerSideProps({query: {tracking_id}}) {
//   const res = await fetch(`${API_URL}/tracking/${tracking_id}`)
//   const trackData = await res.json()

//   return {
//     props: {
//       track: trackData[0]
//     }
//   }
// }

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
