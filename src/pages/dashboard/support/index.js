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
import Button from '@/components/Button'
import banner from '@/styles/Policy.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import navs from '@/styles/Settings.module.css'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { useRouter } from 'next/router'

export default function SettingsPage({ user, token }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    category_id: '',
    email: '',
    message: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // selectedFile(fileInput.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(formData)
    const res = await fetch(`${API_URL}/support/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      setIsLoading(false)
      toast.error('Something went Wrong')
    } else {
      setIsLoading(false)
      toast.success('Message Sent, We Will Respond as Soon As We Can')
      setFormData({
        name: '',
        subject: '',
        category_id: '',
        email: '',
        message: ''
      })
    }
  }

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
    <Layout data={user}>
      <ToastContainer />
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
                  <form onSubmit={handleSubmit}>
                    <FormControl my='3'>
                      <Input
                        type='text'
                        borderColor='grey'
                        size='lg'
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        required
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl my='3'>
                      <Input
                        type='email'
                        borderColor='grey'
                        size='lg'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        required
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl my='3'>
                      <Select
                        placeholder='Category'
                        value={formData.category_id}
                        required
                        onChange={handleChange}
                        borderColor='grey'
                        size='lg'
                        id='category'
                        name='category_id'
                      >
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                      </Select>
                    </FormControl>
                    <FormControl my='3'>
                      <Input
                        type='text'
                        borderColor='grey'
                        size='lg'
                        id='subject'
                        name='subject'
                        placeholder='Subject'
                        value={formData.subject}
                        required
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl my='3'>
                      <Textarea
                        placeholder='Please enter details of your request'
                        borderColor='grey'
                        size='lg'
                        h='100px'
                        value={formData.message}
                        required
                        id="message"
                        name="message"
                        onChange={handleChange}
                      ></Textarea>
                    </FormControl>
                    <Box textAlign='right'>
                      <Button
                        type='submit'
                        loading={isLoading}
                        title='SENDING...'
                      >
                        Send
                      </Button>
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
