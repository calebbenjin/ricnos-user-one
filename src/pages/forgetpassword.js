import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/HomeLayout';
// import Link from 'next/link'
// import { BsEye } from 'react-icons/bs'
import styles from '@/styles/Login.module.css';
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Container,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');

    var formdata = new FormData();
    formdata.append('email', data.email);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://alpha.ricnoslogistics.com/api/forgot_password',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setIsLoading(false);
          router.push('/resetPassword');
          toast.success(result.message);
        } else {
          setIsLoading(false);
          toast.error(result.message);
        }
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box className={styles.cardBg}>
        <Box className={styles.form}>
          <Container maxWidth="container.xl">
            <Box width={['100%', '50%']}></Box>
            <Box>
              <Heading mt="20" mb="10" size="lg">
                Forget Password
              </Heading>
              <Text fontSize="sm" my="10">
                Please Enter Your Email Address To Recieve a Verification Code.
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email} mb="10">
                  <FormLabel fontWeight="normal">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    borderColor="grey"
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                <Button type="submit" title="Sending" loading={isLoading}>
                  SEND
                </Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
