import { useState } from 'react';
import Layout from '@/components/Layout';
import NoticeBoard from '@/components/NoticeBoard';
import Button from '@/components/Button';
import { Box, Container, Text, Flex, Heading } from '@chakra-ui/react';
// import { FaTimes } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';

import { API_URL } from '@/lib/index';
import { parseCookies } from '@/helpers/index';

export default function ConfirmOrderPage({ token, user, order }) {
  const [toggleItem, setToggleItem] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handlePayment = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    const res = await fetch(`${API_URL}/user/order/pay/1`, requestOptions);
    const data = await res.json();

    const paymentURL = data.data.payment.data.link;

    router.push(paymentURL);
  };

  return (
    <Layout>
      <Container maxWidth="container.xl">
        <Flex justify="space-between" wrap="wrap">
          <Box width={['100%', '68%']} p="2" mt="10" mb="20">
            <Flex justify="space-between" alignItems="center" mb="4">
              <Heading size="lg">{order.reference}</Heading>
              <span>{order?.date}</span>
            </Flex>
            <Box p="7" boxShadow="md" borderRadius="md" backgroundColor="white">
              <Heading size="md">Personal Data</Heading>

              <Box mt="5">
                <Flex justify="space-between" wrap="wrap">
                  <Box width={['100%', '30%']}>
                    <Text color="red" fontWeight="bold">
                      Name
                    </Text>
                    <Text>{user.name}</Text>
                  </Box>
                  <Box width={['100%', '30%']}>
                    <Text color="red" fontWeight="bold">
                      Email
                    </Text>
                    <Text>{user.email}</Text>
                  </Box>
                  <Box width={['100%', '30%']}>
                    <Text color="red" fontWeight="bold">
                      Phone Number
                    </Text>
                    <Text>{user.phone}</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              mt="5"
              boxShadow="md"
              borderRadius="md"
              backgroundColor="white"
              p="6"
            >
              <Heading size="md" my="4">
                Shippment Data
              </Heading>
              <Flex justify="space-between" wrap="wrap">
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Recievers Name
                  </Text>
                  <Text>{order.reciever_name}</Text>
                </Box>
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Email
                  </Text>
                  <Text>{order.reciever_email}</Text>
                </Box>
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Phone Number
                  </Text>
                  <Text>{order.reciever_phone}</Text>
                </Box>
              </Flex>
              <Flex justify="space-between" wrap="wrap" mt="4">
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Description
                  </Text>
                  <Text>{order.description}</Text>
                </Box>
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Departure
                  </Text>
                  <Text>{order.departure}</Text>
                </Box>
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Arrival
                  </Text>
                  <Text>{order.arrival}</Text>
                </Box>
              </Flex>
              <Flex justify="space-between" wrap="wrap" mt="4">
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    Address
                  </Text>
                  <Text>{order.address}</Text>
                </Box>
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    City
                  </Text>
                  <Text>{order.city}</Text>
                </Box>
                <Box width={['100%', '30%']}>
                  <Text color="red" fontWeight="bold">
                    State
                  </Text>
                  <Text>{order.state}</Text>
                </Box>
              </Flex>
              <Flex justify="space-between" wrap="wrap" mt="4">
                <Box width={['100%', '50%']}>
                  <Text color="red" fontWeight="bold">
                    Delivery Method
                  </Text>
                  <Text>{order.delivery_method}</Text>
                </Box>
                <Box width={['100%', '50%']}>
                  <Text color="red" fontWeight="bold">
                    Selected Ride
                  </Text>
                  <Text>{order.vehicle_type}</Text>
                </Box>
              </Flex>
              <Heading size="sm" my="4">
                Items
              </Heading>

              {order.items.map((item) => (
                <Flex key={item.id} justify="space-between" wrap="wrap" mt="4">
                  <Box width={['100%', '30%']}>
                    <Text color="red" fontWeight="bold">
                      Item Name
                    </Text>
                    <Text>{item.item}</Text>
                  </Box>
                  <Box width={['100%', '30%']}>
                    <Text color="red" fontWeight="bold">
                      Quantity
                    </Text>
                    <Text>{item.quantity}</Text>
                  </Box>
                  <Box width={['100%', '30%']}>
                    <Text color="red" fontWeight="bold">
                      Weight
                    </Text>
                    <Text>{item.weight}kg</Text>
                  </Box>
                </Flex>
              ))}
            </Box>

            <Box
              boxShadow="md"
              borderRadius="md"
              backgroundColor="white"
              p="8"
              my="5"
            >
              <Text fontWeight="bold">Order Summary</Text>

              <Flex justify="space-between" alignItems="center" mt="6" mb="2">
                <Text>
                  <b>Subtotal</b> (all items)
                </Text>
                <Text>N{order.shipment_fee}</Text>
              </Flex>
              <hr />
              <Flex justify="space-between" alignItems="center" mt="6" mb="2">
                <Text>
                  <b>Tax</b> PDV20%(include)
                </Text>
                <Text>N2000.00</Text>
              </Flex>
              <Flex justify="space-between" alignItems="center" mt="6" mb="2">
                <Text>
                  <b>Shipping Discount</b> (all items)
                </Text>
                <Text>N00.00</Text>
              </Flex>
              <Flex justify="space-between" alignItems="center" mt="6" mb="2">
                <Heading size="lg">
                  <b>Total</b>
                </Heading>
                <Heading size="lg">N{order.amount}</Heading>
              </Flex>
            </Box>
            <div onClick={handlePayment}>
              <Button disabled={loading}>
                {loading ? 'Loading...' : 'Proceed to Payment'}
              </Button>
            </div>
          </Box>
          <Box width={['100%', '30%']} p="2" mt="5" className="displaySm">
            <Box textAlign="right" my="4">
              <Button>Edit</Button>
            </Box>
            <NoticeBoard user={user} order={order} />
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { token } = parseCookies(req);
  const { pickupid } = query;

  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const res = await fetch(
    `${API_URL}/user/order/order/${pickupid}`,
    requestOptions
  );
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      token,
      user: data.data.user,
      order: data.data.order,
    },
  };
}
