import { useState } from 'react'
import Layout from '@/components/Layout'
import NoticeBoard from '@/components/NoticeBoard'
import Button from '@/components/Button'
import { Box, Container, Text, Flex, Heading } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const productsData = {
  orderID: '#008426',
  date: '06.22.2021 at 10:14am',
  name: 'Joush Mike',
  email: 'Joushmike@gmail.com',
  phone: '+2348777265650',
  items: [
    {
      id: '1',
      image: 'ProductImage',
      itemName: 'Bage',
      quantity: 3,
      amount: '20,8700',
    },
    {
      id: '2',
      image: 'ProductImage',
      itemName: 'Bage',
      quantity: 3,
      amount: '20,8700',
    },
    {
      id: '2',
      image: 'ProductImage',
      itemName: 'Bage',
      quantity: 3,
      amount: '20,8700',
    },
  ],
}

export default function ConfirmOrderPage() {
  const [toggleItem, setToggleItem] = useState(true)
  const [products, setProducts] = useState(productsData)

  console.log(products.items)

  return (
    <Layout>
      <Container maxWidth='container.xl'>
        <Flex justify='space-between' wrap='wrap'>
          <Box width={['100%', '68%']} p='2' mt='10' mb='20'>
            <Flex justify='space-between' alignItems='center' mb='4'>
              <Heading size='lg'>{products.orderID}</Heading>
              <span>{products.date}</span>
            </Flex>
            <Box p='7' boxShadow='md' borderRadius='md' backgroundColor='white'>
              <Heading size="md">Personal Data</Heading>

              <Box mt='5'>
                <Flex justify='space-between' wrap='wrap'>
                  <Box width={['100%', '30%']}>
                    <Text color='red' fontWeight='bold'>
                      Name
                    </Text>
                    <Text>{products.name}</Text>
                  </Box>
                  <Box width={['100%', '30%']}>
                    <Text color='red' fontWeight='bold'>
                      Email
                    </Text>
                    <Text>{products.email}</Text>
                  </Box>
                  <Box width={['100%', '30%']}>
                    <Text color='red' fontWeight='bold'>
                      Phone Number
                    </Text>
                    <Text>{products.phone}</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Heading size='md' mt='20'>
              Items
            </Heading>

            {products.items.map((item) => {
              return (
                <>
                  {toggleItem ? (
                    <Link href='/dashboard/pickup/' key={item.id}>
                      <Box
                        mt='5'
                        boxShadow='md'
                        borderRadius='md'
                        backgroundColor='white'
                        p='6'
                        key={item.id}
                      >
                        <Flex
                          justify='space-between'
                          alignItems='center'
                          wrap='wrap'
                        >
                          <Box width={['100%', '20%']} bg='gray'>
                            <Image
                              src='/Home.svg'
                              alt='productImage'
                              width='100'
                              height='100'
                            />
                          </Box>
                          <Box width={['100%', '20%']}>
                            <Text color='red' fontWeight='bold'>
                              Item Name
                            </Text>
                            <Text>{item.itemName}</Text>
                          </Box>
                          <Box width={['100%', '20%']}>
                            <Text color='red' fontWeight='bold'>
                              Quantity
                            </Text>
                            <Text>{item.quantity}</Text>
                          </Box>
                          <Box width={['100%', '20%']}>
                            <Text color='red' fontWeight='bold'>
                              Amount
                            </Text>
                            <Text>{item.amount}</Text>
                          </Box>
                          <FaTimes
                            onClick={() => setToggleItem(false)}
                            style={{ color: '#ccc', fontSize: '1.3rem' }}
                          />
                        </Flex>
                      </Box>
                    </Link>
                  ) : null}
                </>
              )
            })}

            <Box
              boxShadow='md'
              borderRadius='md'
              backgroundColor='white'
              p='8'
              my='5'
            >
              <Text fontWeight='bold'>Order Summary</Text>

              <Flex justify='space-between' alignItems='center' mt='6' mb='2'>
                <Text>
                  <b>Subtotal</b> (all items)
                </Text>
                <Text>N3000.00</Text>
              </Flex>
              <hr />
              <Flex justify='space-between' alignItems='center' mt='6' mb='2'>
                <Text>
                  <b>Tax</b> PDV20%(include)
                </Text>
                <Text>N2000.00</Text>
              </Flex>
              <Flex justify='space-between' alignItems='center' mt='6' mb='2'>
                <Text>
                  <b>Shipping Discount</b> (all items)
                </Text>
                <Text>N00.00</Text>
              </Flex>
              <Flex justify='space-between' alignItems='center' mt='6' mb='2'>
                <Heading size='lg'>
                  <b>Total</b>
                </Heading>
                <Heading size='lg'>N4300.00</Heading>
              </Flex>
            </Box>
            <Button type='button'>Proceed Payment</Button>
          </Box>
          <Box width={['100%', '30%']} p='2' mt='5' className='displaySm'>
            <Box textAlign='right' my='4'>
              <Button>Edit</Button>
            </Box>
            <NoticeBoard />
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
