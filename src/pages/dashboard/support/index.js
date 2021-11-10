import { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Flex,
  Container,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Select,
} from '@chakra-ui/react'
import Link from '@/components/Link'
import Layout from '@/components/Layout'
import styles from '@/styles/Support.module.css'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { MdPhoneAndroid } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import banner from '@/styles/Policy.module.css'
import navs from '@/styles/Settings.module.css'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { useRouter } from 'next/router'

export default function SettingsPage({ user }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  });
 
  if (!user) {
    return null;
  }

  return (
    <Layout data={user} 
    >
      <Flex justify='space-between' wrap='wrap'>
        <Box width={['100%', '20%']} className={navs.sideNav}>
          {/* <Container maxWidth='container.xl'> */}
          <nav className={navs.nav}>
            <Link href='/dashboard/support/'>
              <a fontWeight='bold' className={navs.link}>
                Send Message
              </a>
            </Link>
            <Link href='/dashboard/support/openTicket'>
              <a className={navs.link}>Open Ticket</a>
            </Link>
            <Link href='/dashboard/support/closeTicket'>
              <a className={navs.link}>Close Ticket</a>
            </Link>
          </nav>
          {/* </Container> */}
        </Box>

        <Box width={['100%', '80%']} className={banner.profileSetting}>
          <Container maxWidth='container.lg'>
            <Box className={banner.showcase}>
              <Box width={['100%', '70%']}>
                <Heading className={banner.title}>
                  Customers are the focus of everything
                </Heading>
                <Text className={banner.subtitle}>
                  Continual improvement is essential to our success
                </Text>
              </Box>
            </Box>

            <Flex justify='space-between' wrap='wrap'>
              <Box maxWidth={['100%', '35%']}>
                <Box bg='red' p='6' color='white' my='10' borderRadius='md'>
                  <Heading size='md' fontWeight='bold'>
                    Need Support?
                  </Heading>
                  <Text my='4'>Contact us if you need further assistance</Text>
                  <Flex alignItems='center' mb='6'>
                    {' '}
                    <MdPhoneAndroid className={styles.icon} />{' '}
                    <Text ml='3'>+234-00-000-0000</Text>{' '}
                  </Flex>
                  <Flex alignItems='center' mb='6'>
                    {' '}
                    <FaEnvelope className={styles.icon} />{' '}
                    <Text ml='3'>ricnologistics@info.com</Text>{' '}
                  </Flex>
                  <Flex alignItems='center' mb='6'>
                    {' '}
                    <FaMapMarkerAlt className={styles.icon} />{' '}
                    <Text ml='3'>kilometer 16 Lag fog Plaza </Text>{' '}
                  </Flex>
                </Box>
              </Box>
              <Box maxWidth={['100%', '60%']}>
                <Box p='10' my='5'>
                  <Text mb='3' textAlign='left' fontSize='sm' color='grey'>
                    Fill up the form and our team will get back to you with in
                    24hours.
                  </Text>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.name} my='3'>
                      <Input
                        type='text'
                        borderColor='grey'
                        size='lg'
                        id="name"
                        placeholder='Name'
                        {...register('name', { required: 'Name is Empty' })}
                      />
                      <FormErrorMessage>
                        {errors.name && errors.name.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.email} my='3'>
                      <Input
                        type='email'
                        borderColor='grey'
                        size='lg'
                        id="email"
                        placeholder='Email'
                        {...register('email', { required: 'Email is Empty' })}
                      />
                      <FormErrorMessage>
                        {errors.email && errors.email.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.category} my='3'>
                      <Select
                        placeholder='Category'
                        {...register('category')}
                        borderColor='grey'
                        size='lg'
                        id="category"
                      >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.category && errors.category.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.subject} my='3'>
                      <Input
                        type='text'
                        borderColor='grey'
                        size='lg'
                        id="subject"
                        placeholder='Subject'
                        {...register('subject', { required: 'Subject is Empty' })}
                      />
                      <FormErrorMessage>
                        {errors.subject && errors.subject.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.message} my='3'>
                      <Textarea
                        placeholder='Please enter details of your request'
                        borderColor='grey'
                        size='lg'
                        h='100px'
                        {...register('message', {
                          required: 'Message is Empty',
                        })}
                      ></Textarea>
                      <FormErrorMessage>
                        {errors.phone && errors.phone.message}
                      </FormErrorMessage>
                    </FormControl>
                    <Box textAlign='right'>
                      <Button>Send</Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}


export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if(token) {
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
        token
      },
    }
  } else {
    return {
      props: {}
    }
  }
}