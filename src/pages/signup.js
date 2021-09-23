import { useState, useContext } from 'react'
import Layout from "@/components/HomeLayout";
import Link from 'next/link'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import login from '@/styles/Login.module.css'
import {useRouter} from 'next/router'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Container,
  InputGroup,
  InputRightElement,
  Flex,
  Checkbox,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import AuthContext from '@/context/AuthContext'

export default function signupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [show, setShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)
  const {signup, error} = useContext(AuthContext)

  const handleClick = () => setShow(!show)
  const confirmHandleClick = () => setConfirmShow(!confirmShow)

  const router = useRouter()

  const onSubmit = (data, e) => {
    e.preventDefault()

    console.log(data)


    signup(data)
  }

  return (
    <Layout>
      <Box className={login.signupBg}>
        {/* <Banner className={styles.about} /> */}

        <Box className={login.form}>
          <Container maxWidth='container.xl'>
            <Box width={['100%', '50%']}></Box>
            <Box>
              <Heading mt='20' mb='10' size="lg">
                Sign Up
              </Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel fontWeight='normal'>Email</FormLabel>
                  <input
                    type='email'
                    id='email'
                    placeholder='Enter Email'
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.phone} mt='6'>
                  <FormLabel fontWeight='normal'>Phone Number</FormLabel>
                  <input
                    type='text'
                    id='phone'
                    placeholder='Enter Phone Number'
                    {...register('phone', { required: 'Phone is required' })}
                  />
                  <FormErrorMessage>
                    {errors.phone && errors.phone.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password} my='5'>
                  <FormLabel fontWeight='normal'>Password</FormLabel>
                  <InputGroup>
                    <input
                      id="password"
                      pr='2rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      {...register('password', {
                        required: 'Password is Required',
                      })}
                    />
                    <InputRightElement>
                      {show ? (
                        <BsEye onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </BsEye>
                      ) : (
                        <BsEyeSlash onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </BsEyeSlash>
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.confirmPassword} my='5'>
                  <FormLabel fontWeight='normal'>Confirm Password</FormLabel>
                  <InputGroup>
                    <input
                      id="password_confirmation"
                      pr='2rem'
                      type={confirmShow  ? 'text' : 'password'}
                      placeholder='Confirm password'
                      {...register('password_confirmation', {
                        required: 'Confirm Password is Required',
                      })}
                    />

                    <InputRightElement>
                      {confirmShow ? (
                        <BsEye onClick={confirmHandleClick}>
                          {confirmShow  ? 'Hide' : 'Show'}
                        </BsEye>
                      ) : (
                        <BsEyeSlash onClick={confirmHandleClick}>
                          {confirmShow  ? 'Hide' : 'Show'}
                        </BsEyeSlash>
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password_confirmation && errors.password_confirmation.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl mb='5'>
                  <Flex>
                    <Checkbox isRequired={true} colorScheme='red'>
                      i agree to the terms and conditions of{' '} 
                      <Text as='span' color='red'>
                        Private policies
                      </Text>
                    </Checkbox>
                  </Flex>
                </FormControl>
                <hr />
                <Box my='5'>
                  <Link href='/login'>Already have an account? Login</Link>
                </Box>

                <Button>Sign up</Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
