import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Showcase.module.css'
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
} from '@chakra-ui/react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import ButtonDark from '@/components/ButtonDark'
import { useRouter } from 'next/router'

export default function Dashboard({ user }) {
  const [paymentStatus, setPaymentStatus] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  })

  if (!user) {
    return null
  }

  return (
    <Layout title='Dashboard' data={user}>
      <Container maxWidth='container.xl'>
        <Box className={styles.showcase}>
          <Box width={['100%', '70%']}>
            <Heading className={styles.title}>Become An Agent</Heading>
            <Text className={styles.subtitle}>
              Partner With Us And Earn By Delivering Items Going your Way.
            </Text>
            <Link href='/'>
              <a>
                <Flex alignItems='center' color='red'>
                  <BsArrowRight className={styles.icon} />
                  Learn More
                </Flex>
              </a>
            </Link>
          </Box>
        </Box>

        <Flex my='3' justify='space-between' wrap='wrap'>
          <Box
            width={['100%', '40%']}
            boxShadow='lg'
            bg='white'
            borderRadius='md'
            p='5'
            mt='4'
          >
            <Heading size='sm' color='grey' mb='2'>
              Activities
            </Heading>
            <hr />
            {/* <Heading mt='8' color='grey' size='sm' textAlign='center'>
              You have no available orders
            </Heading> */}

            {user &&
              user.orders.map((order) => (
                <>
                  <Box
                    p='8'
                    bg='black'
                    color='white'
                    my='6'
                    borderRadius='md'
                    key={order.id}
                  >
                    <Text textTransform='uppercase'>
                      {order.reference}
                      <Badge
                        variant='solid'
                        ml='3'
                        colorScheme='red'
                        fontWeight='normal'
                      >
                        Active Order
                      </Badge>
                    </Text>
                    <Heading mb='3' size='md'>
                      Office Shifting{' '}
                    </Heading>
                    <hr />
                    <Flex
                      alignItems='center'
                      className={styles.location}
                      mt='6'
                    >
                      <Box className={styles.line}>
                        <Box className={styles.dotTop}></Box>
                        <Box className={styles.dotBottom}></Box>
                      </Box>
                      <Box>
                        <Box className={styles.from}>
                          <Text>From</Text>
                          <Text textTransform='uppercase'>
                            {order.departure}
                          </Text>
                        </Box>
                        <Box className={styles.to} mt='8'>
                          <Text>To</Text>
                          <Text textTransform='uppercase'>{order.arrival}</Text>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                  <Box
                    p='3'
                    bg='white'
                    color='grey'
                    border='2px'
                    borderColor='gray.200'
                    my='6'
                    borderRadius='md'
                  >
                    <Text mb='2' textTransform='uppercase'>
                      {order.reference}
                      <Badge variant='solid' ml='3' fontWeight='normal'>
                        {paymentStatus ? 'Completed Order' : 'Pending Order'}
                      </Badge>
                    </Text>
                    <hr />
                    <Heading my='2' size='md'>
                      Office Shifting{' '}
                    </Heading>
                  </Box>
                </>
              ))}
          </Box>

          <Box
            width={['100%', '55%']}
            boxShadow='md'
            bg='white'
            borderRadius='md'
            p='5'
            mt='4'
            className={styles.editCard}
          >
            <Heading size='sm' color='grey' mb='2'>
              Your Profile
            </Heading>
            <hr />

            <Flex justify='space-between' wrap='wrap'>
              <Box width={['100%', '47%']}>
                <List spacing={4} mt='8'>
                  {user && user.name ? (
                    <ListItem>
                      <Text fontSize='sm' fontWeight='bold' color='grey'>
                        Name
                      </Text>
                      <hr />
                      <Text mt='2'>{user.name && user.name}</Text>
                    </ListItem>
                  ) : null}
                  <ListItem>
                    <Text fontSize='sm' fontWeight='bold' color='grey'>
                      Email
                    </Text>
                    <hr />
                    <Text mt='2'>{user.email}</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize='sm' fontWeight='bold' color='grey'>
                      Phone Number
                    </Text>
                    <hr />
                    <Text mt='2'>{user.phone}</Text>
                  </ListItem>
                </List>
              </Box>
              <Box width={['100%', '47%']}>
                <Flex alignItems='center' justify='center'>
                  <Box textAlign='center'>
                    {user.name ? (
                      <Avatar
                        size='2xl'
                        mt='10'
                        className={styles.avatar}
                        name={user.name}
                        src={user.passport_thumbnail}
                      />
                    ) : null}
                    <Box
                      bg='black'
                      color='white'
                      p='4'
                      borderRadius='md'
                      mt='10'
                      textAlign='left'
                    >
                      <Text mb='4'>
                        Please complete your profile Registration{' '}
                      </Text>
                      <Link href='/dashboard/settings/'>
                        <a>
                          <ButtonDark>Edit Profile</ButtonDark>
                        </a>
                      </Link>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if (token) {
    const res = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const userData = await res.json()

    const { user } = userData.data

    return {
      props: {
        user,
        token,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}
