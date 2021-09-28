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

export default function dashboard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [recieverName, setRecieverName] = useState('')
  const [recieverPhone, setRecieverPhone] = useState('')
  const [recieverEmail, setRecieverEmail] = useState('')
  const [recieverAddress, setRecieverAddress] = useState('')
  const [recieverCity, setRecieverCity] = useState('')
  const [recieverState, setRecieverState] = useState('')
  const [description, setDescription] = useState('')
  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [addItem, setAddItem] = useState([
    {
      index: Math.random(),
      itemName: '',
      itemQuantity: '',
      weight: '',
      deliveryMethod: '',
      itemValueAmount: '',
    },
  ])

  const data = {
    name,
    email,
    phone,
    address,
    recieverName,
    recieverEmail,
    recieverAddress,
    recieverCity,
    recieverState,
    description,
    departure,
    arrival,
    addItem,
  }

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

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(data)

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
    <Layout title='Request for Pickup'>
      <Container maxWidth='container.lg'>
        <Box>
          <Heading size='lg' my='10'>
            Order a Pickup
          </Heading>

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                    value={recieverName}
                    onChange={(e) => setRecieverName(e.target.value)}
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
                    value={recieverEmail}
                    onChange={(e) => setRecieverEmail(e.target.value)}
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
                    value={recieverPhone}
                    onChange={(e) => setRecieverPhone(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
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
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
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
                    value={recieverAddress}
                    onChange={(e) => setRecieverAddress(e.target.value)}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <input
                    type='text'
                    placeholder='City'
                    id='city'
                    value={recieverCity}
                    onChange={(e) => setRecieverCity(e.target.value)}
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
                    id='state'
                    placeholder='State'
                    value={recieverState}
                    onChange={(e) => setRecieverState(e.target.value)}
                    required
                  />
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl>
                  <select placeholder='Region' required>
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
              </Box>
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
