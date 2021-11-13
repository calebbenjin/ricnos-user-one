import SideNav from '@/components/SideNav'
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Heading,
  Switch,
} from '@chakra-ui/react'
import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'
import { BsEye } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import styles from '@/styles/Settings.module.css'
import Button from '@/components/Button'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { useRouter } from 'next/router'


export default function SecurityPage({ user }) {
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleClick = () => setShow(!show)
  const confirmHandleClick = () => setConfirmShow(!confirmShow)

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
    <Layout title="Security Settings" data={user}>
      <Flex bg='white'>
        <SideNav />

        <Box className={styles.profileSetting}>
          <Container maxWidth='container.md'>
            <Heading size="md" mt='10' pb="4">
              Security Settings
            </Heading>
            <hr />

            <Text color='grey' fontWeight='bold' fontSize='md' mt='10'>
              Change Password
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb='4' width={['100%']}>
                <FormControl isInvalid={errors.currentPassword} my='5'>
                  <FormLabel fontWeight='normal'>Current Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor='grey'
                      pr='2rem'
                      id="currentPassword"
                      size='lg'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter Current password'
                      {...register('currentPassword', {
                        required: 'Current Password is Required',
                      })}
                    />
                    <InputRightElement pr='15px' pt='1'>
                      <BsEye size='30px' color='grey' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.currentPassword && errors.currentPassword.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.newPassword} my='5'>
                  <FormLabel fontWeight='normal'>New Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor='grey'
                      pr='2rem'
                      id="newPassword"
                      size='lg'
                      type={confirmShow ? 'text' : 'password'}
                      placeholder='New Password'
                      {...register('newPassword', {
                        required: 'New Password is Required',
                      })}
                    />

                    <InputRightElement pr='15px' pt='1'>
                      <BsEye
                        size='30px'
                        color='grey'
                        onClick={confirmHandleClick}
                      >
                        {confirmShow ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.newPassword && errors.newPassword.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.confirmPassword} my='5'>
                  <FormLabel fontWeight='normal'>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor='grey'
                      pr='2rem'
                      size='lg'
                      type={confirmShow ? 'text' : 'password'}
                      placeholder='Confirm password'
                      {...register('confirmPassword', {
                        required: 'Confirm Password is Required',
                      })}
                    />

                    <InputRightElement pr='15px' pt='1'>
                      <BsEye
                        size='30px'
                        color='grey'
                        onClick={confirmHandleClick}
                      >
                        {confirmShow ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>

              <Box textAlign='right' my='10'>
                <Button type="submit" loading={isLoading}>Save Changes</Button>
              </Box>
            </form>
          </Container>

          <hr />

          <Container maxWidth='container.md' my="10">
            <Flex justify='space-between'>
              <Box maxWidth={['100%', '45%']}>
                <Heading fontSize='sm' colorScheme='grey'>
                  TWO FACTOR AUTHENTICATION
                </Heading>
                <Text color='red'>RECOMMENDED</Text>
              </Box>
              <Box maxWidth={['100%', '50%']}>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='email-alerts' colorScheme='red' mr='3' />
                  <FormLabel
                    htmlFor='email-alerts'
                    mb='2'
                    fontWeight='normal'
                    color='red'
                  >
                    Try me.
                  </FormLabel>
                </FormControl>
                <Text>
                  To help keep your account secured we’ll using a new device to
                  login. We’ll send the code via Sms, Email, Or Ricno’s
                  notification.
                </Text>
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