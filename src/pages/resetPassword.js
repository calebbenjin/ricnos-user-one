import { useState } from 'react'
import Layout from '@/components/HomeLayout'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import styles from '@/styles/Login.module.css'
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Container,
  InputGroup,
  InputRightElement,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
// import PinInput from '../components/PinInput'

export default function signupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [show, setShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)

  const handleClick = () => setShow(!show)
  const confirmHandleClick = () => setConfirmShow(!confirmShow)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <Box className={styles.cardBg}>

        <Box className={styles.form}>
          <Container maxWidth='container.xl'>
            <Box width={['100%', '50%']}></Box>
            <Box>
              <Heading mt='20' mb='10' size="lg">
                Reset Your Password
              </Heading>

              {/* <Text>Please Enter The Digital Code Sent TO</Text> */}
              <form onSubmit={handleSubmit(onSubmit)}>

                <FormControl isInvalid={errors.password} my='5'>
                  <FormLabel fontWeight='normal'> New Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor='grey'
                      pr='2rem'
                      id="newPassword"
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      {...register('newPassword', {
                        required: 'New Password is Required',
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

                <FormControl isInvalid={errors.confirmpassword} my='5'>
                  <FormLabel fontWeight='normal'>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor='grey'
                      id="confirmpassword"
                      pr='2rem'
                      type={confirmShow  ? 'text' : 'password'}
                      placeholder='Confirm password'
                      {...register('confirmpassword', {
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
                    {errors.confirmpassword && errors.confirmpassword.message}
                  </FormErrorMessage>
                </FormControl>

                

                <Button type="submit">VERIFY</Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
