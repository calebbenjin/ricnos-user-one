import Layout from '@/components/Layout'
import React, { useState } from 'react'
import {
  Box,
  Container,
  Text,
  Heading,
  FormControl,
  Flex,
  Stack,
  Checkbox,
} from '@chakra-ui/react'
// import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function dashboard({ user, token }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    recieverName: '',
    recieverPhone: '',
    recieverEmail: '',
    recieverAddress: '',
    recieverCity: '',
    recieverState: '',
    description: '',
    departure: '',
    arrival: '',
  })

  // const [addItem, setAddItem] = useState([
  //   {
  //     index: Math.random(),
  //     itemName: '',
  //     itemQuantity: '',
  //     weight: '',
  //     deliveryMethod: '',
  //     itemValueAmount: '',
  //   },
  // ])

  // const data = {
  //   name,
  //   email,
  //   phone,
  //   address,
  //   recieverName,
  //   recieverEmail,
  //   recieverAddress,
  //   recieverCity,
  //   recieverState,
  //   description,
  //   departure,
  //   arrival,
  //   addItem,
  // }

  // const handleChange = (e) => {
  //   if (
  //     ['name', 'author', 'type', 'dateOfPublish', 'price'].includes(
  //       e.target.name
  //     )
  //   ) {
  //     // let bookDetails = [...this.state.bookDetails]
  //     addItem[e.target.dataset.id][e.target.name] = e.target.value
  //   } else {
  //     setState({ [e.target.name]: e.target.value })
  //   }
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(values)

    const res = await fetch(`${API_URL}/user/order/createOrder`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      toast.error('Something went Wrong')
    } else {
      const userData = await res.json()
      toast.success('Resquest Pick order')
      console.log(userData)
    }

    // router.push('/dashboard/pickup/confirmOrder')
  }

  const addNewRow = () => {
    setAddItem((prevState) => [
      ...prevState,
      {
        index: Math.random(),
        itemName: '',
        authoritemQuantity: '',
        weight: '',
        deliveryMethod: '',
        itemValueAmount: '',
      },
    ])
  }

  const clickOnDelete = (record) => {
    let inputs = [...addItem]
    setAddItem(inputs.filter((r) => r !== record))
  }

  return (
    <Layout
      title='Request for Pickup'
      email={user.email}
      notification={user.general_notification}
      imgProfile={user.passport_thumbnail}
      name={user.name}
    >
      <Container maxWidth='container.lg'>
        <Box>
          <Heading size='lg' my='10'>
            Order a Pickup
          </Heading>

          <ToastContainer />

          <form
            onSubmit={handleSubmit}
            style={{
              background: '#fff',
              padding: '20px',
              marginBottom: '5rem',
            }}
          >
            <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
              Personal Data
            </Text>
            <Flex wrap='wrap' justify='space-between'>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    id='name'
                    placeholder='Name'
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    id='phone'
                    placeholder='Phone Number'
                    name='phone'
                    value={values.phone}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
            </Flex>

            <Box mb='3' mt='5' width={['100%', '100%']}>
              <FormControl>
                <input
                  type='text'
                  id='address'
                  placeholder='Address'
                  name='address'
                  value={values.address}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </Box>

            <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
              Shipping Data
            </Text>
            <Flex wrap='wrap' justify='space-between'>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    id='recieverName'
                    placeholder='Recievers Name'
                    name='recieverName'
                    value={values.recieverName}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    name='recieverEmail'
                    value={values.recieverEmail}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    id='phone'
                    placeholder='Phone Number'
                    name='recieverPhone'
                    value={values.recieverPhone}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
            </Flex>
            <Box mb='3' width={['100%', '100%']}>
              <FormControl>
                <input
                  type='text'
                  id='description'
                  placeholder='Description'
                  name='description'
                  value={values.description}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            </Box>
            <Flex wrap='wrap' justify='space-between' mt='4'>
              <Box mb='3' width={['100%', '45%']}>
                <FormControl>
                  <input
                    type='text'
                    id='departure'
                    placeholder='Departure'
                    name='departure'
                    value={values.departure}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '45%']}>
                <FormControl>
                  <input
                    type='text'
                    id='arrival'
                    placeholder='Arrival'
                    name='arrival'
                    value={values.arrival}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
            </Flex>
            <Flex wrap='wrap' justify='space-between' mt='4'>
              <Box mb='3' width={['100%', '65%']}>
                <FormControl>
                  <input
                    type='text'
                    id='address'
                    placeholder='Address'
                    name='address'
                    value={values.address}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    placeholder='reciever City'
                    id='recieverCity'
                    name='recieverCity'
                    value={values.recieverCity}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
            </Flex>
            <Flex wrap='wrap' justify='space-between' mt='4'>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    placeholder='reciever State'
                    id='recieverState'
                    name='recieverState'
                    value={values.recieverState}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Box>
              {/* <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <select placeholder='Region' name='recieverState'
                    value={values.recieverRegion}
                    onChange={handleInputChange} required>
                    <option>Select Regoin</option>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </select>
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <select placeholder='vehicles' required>
                    <option value='option1'>Select vehicles</option>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </select>
                </FormControl>
              </Box> */}
            </Flex>

            <Text textAlign='left' mb='4' mt='10' fontWeight='bold'>
              Add Items
            </Text>

            <Flex justify=''>
              <Stack spacing={5} direction={['column', 'row']} my='6'>
                <Checkbox colorScheme='red'>Fragile</Checkbox>
                <Checkbox colorScheme='red'>Expres Delivery</Checkbox>
              </Stack>
            </Flex>

            <Button>Checkout</Button>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  // console.log(res)

  const resData = await res.json()
  const { user } = resData.data

  return {
    props: {
      user,
      token,
    },
  }
}
