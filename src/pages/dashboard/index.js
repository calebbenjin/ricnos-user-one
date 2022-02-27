import { useState, useContext, useEffect } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Showcase.module.css";
import {
  Heading,
  Box,
  Text,
  Flex,
  List,
  ListItem,
  Avatar,
  Badge,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/lib/index";
import ButtonDark from "@/components/ButtonDark";
import { useRouter } from "next/router";
import PageLoader from "@/components/PageLoader";

export default function Dashboard({ user }) {
  const [paymentStatus, setPaymentStatus] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  if (!user) {
    return <PageLoader />;
  }

  return (
    <Layout title="Dashboard" data={user}>
      <Container maxWidth="container.xl">
        <Box className={styles.showcase}>
          <Box width={["100%", "70%"]}>
            <Heading className={styles.title}>Become An Agent</Heading>
            <Text className={styles.subtitle}>
              Partner With Us And Earn By Delivering Items Going your Way.
            </Text>
            <Link href="/">
              <a>
                <Flex alignItems="center" color="red">
                  <BsArrowRight className={styles.icon} />
                  Learn More
                </Flex>
              </a>
            </Link>
          </Box>
        </Box>

        <Flex my="3" justify="space-between" wrap="wrap">
          <Box
            width={["100%", "40%"]}
            boxShadow="lg"
            bg="white"
            borderRadius="md"
            p="5"
            mt="4"
          >
            <Heading size="sm" color="grey" mb="2">
              Activities
            </Heading>
            <hr />
            {user.orders?.length > 0 ? (
              <fragment>
                <Box p="8" bg="black" color="white" my="6" borderRadius="md">
                  <Text textTransform="uppercase">
                    {user.orders[0].tracking_id}
                    <Badge
                      variant="solid"
                      ml="3"
                      colorScheme="red"
                      fontWeight="normal"
                    >
                      {user.orders[0].status}
                    </Badge>
                  </Text>
                  <Heading mb="3" size="md">
                    {(user.orders[0].integer_status === "-1" ||
                      user.orders[0].integer_status === "0") &&
                      "Pending"}
                    {(user.orders[0].integer_status === "2" ||
                      user.orders[0].integer_status === "3" ||
                      user.orders[0].integer_status === "4" ||
                      user.orders[0].integer_status === "5" ||
                      user.orders[0].integer_status === "6" ||
                      user.orders[0].integer_status === "7") &&
                      "Active"}
                    {user.orders[0].integer_status === "1" && "Completed"}
                  </Heading>
                  <hr />
                  <Flex alignItems="center" className={styles.location} mt="6">
                    <Box className={styles.line}>
                      <Box className={styles.dotTop}></Box>
                      <Box className={styles.dotBottom}></Box>
                    </Box>
                    <Box>
                      <Box className={styles.from}>
                        <Text>From</Text>
                        <Text textTransform="uppercase">
                          {user.orders[0].departure}
                        </Text>
                      </Box>
                      <Box className={styles.to} mt="8">
                        <Text>To</Text>
                        <Text textTransform="uppercase">
                          {user.orders[0].arrival}
                        </Text>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                {user.orders[0].items.map((item) => (
                  <Box
                    key={item.id}
                    p="3"
                    bg="white"
                    color="grey"
                    border="2px"
                    borderColor="gray.200"
                    my="6"
                    borderRadius="md"
                  >
                    <Text mb="2" textTransform="uppercase">
                      {user.orders[0].tracking_id}
                      <Badge variant="solid" ml="3" fontWeight="normal">
                        {user.orders[0].status}
                      </Badge>
                    </Text>
                    <hr />
                    <Heading my="2" size="md">
                      {item.item}
                    </Heading>
                  </Box>
                ))}
                <Box display="flex" width="100%" justifyContent="center">
                  <Link href="/dashboard/orders">
                    <ChakraLink>View More</ChakraLink>
                  </Link>
                </Box>
              </fragment>
            ) : (
              <Heading mt="8" color="grey" size="sm" textAlign="center">
                You have no available orders
              </Heading>
            )}
          </Box>

          <Box
            width={["100%", "55%"]}
            boxShadow="md"
            bg="white"
            borderRadius="md"
            p="5"
            mt="4"
            className={styles.editCard}
          >
            <Heading size="sm" color="grey" mb="2">
              Your Profile
            </Heading>
            <hr />

            <Flex justify="space-between" wrap="wrap">
              <Box width={["100%", "47%"]}>
                <List spacing={4} mt="8">
                  {user && user.name ? (
                    <ListItem>
                      <Text fontSize="sm" fontWeight="bold" color="grey">
                        Name
                      </Text>
                      <hr />
                      <Text mt="2">{user.name && user.name}</Text>
                    </ListItem>
                  ) : null}
                  <ListItem>
                    <Text fontSize="sm" fontWeight="bold" color="grey">
                      Email
                    </Text>
                    <hr />
                    <Text mt="2">{user.email}</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm" fontWeight="bold" color="grey">
                      Phone Number
                    </Text>
                    <hr />
                    <Text mt="2">{user.phone}</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="sm" fontWeight="bold" color="grey">
                      Billing Address
                    </Text>
                    <hr />
                    <Text mt="2">{user.addresses?.address}</Text>
                    <Text mt="2">
                      {user.addresses?.city}, {user.addresses?.state}
                    </Text>
                  </ListItem>
                </List>
              </Box>
              <Box width={["100%", "47%"]}>
                <Flex alignItems="center" justify="center">
                  <Box textAlign="center">
                    {user.name ? (
                      <Avatar
                        size="2xl"
                        mt="10"
                        className={styles.avatar}
                        name={user.name}
                        src={user.passport_thumbnail}
                      />
                    ) : null}
                    {(!user.name ||
                      user.passport.length < 1 ||
                      user.addresses?.city.length < 1 ||
                      user.addresses?.state.length < 1) && (
                      <Box
                        bg="black"
                        color="white"
                        p="4"
                        borderRadius="md"
                        mt="10"
                        textAlign="left"
                      >
                        <Text mb="4">
                          Please complete your profile Registration{" "}
                        </Text>
                        <Link href="/dashboard/settings/">
                          <a>
                            <ButtonDark>Edit Profile</ButtonDark>
                          </a>
                        </Link>
                      </Box>
                    )}
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
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
