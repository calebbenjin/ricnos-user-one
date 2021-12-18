import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/HomeLayout';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import styles from '@/styles/Login.module.css';
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Container,
  InputGroup,
  InputRightElement,
  Heading,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const router = useRouter();

  const handleClick = () => setShow(!show);
  const confirmHandleClick = () => setConfirmShow(!confirmShow);

  const onSubmit = (data) => {
    setIsLoading(true);
    if (data.newPassword !== data.confirmpassword) {
      toast.error('Your Passwords did not match');
      setIsLoading(false);
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');

    var formdata = new FormData();
    formdata.append('token', data.token);
    formdata.append('password', data.newPassword);
    formdata.append('password_confirmation', data.confirmpassword);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://alpha.ricnoslogistics.com/api/reset_password',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          router.push('/login');
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
        setIsLoading(false);
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
                Reset Your Password
              </Heading>

              {/* <Text>Please Enter The Digital Code Sent TO</Text> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.password} my="5">
                  <FormLabel fontWeight="normal"> Token</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor="grey"
                      pr="2rem"
                      id="token"
                      type="text"
                      placeholder="Enter token"
                      {...register('token', {
                        required: 'Token is Required',
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.token && errors.token.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password} my="5">
                  <FormLabel fontWeight="normal"> New Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor="grey"
                      pr="2rem"
                      id="newPassword"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
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

                <FormControl isInvalid={errors.confirmpassword} my="5">
                  <FormLabel fontWeight="normal">Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor="grey"
                      id="confirmpassword"
                      pr="2rem"
                      type={confirmShow ? 'text' : 'password'}
                      placeholder="Confirm password"
                      {...register('confirmpassword', {
                        required: 'Confirm Password is Required',
                      })}
                    />

                    <InputRightElement>
                      {confirmShow ? (
                        <BsEye onClick={confirmHandleClick}>
                          {confirmShow ? 'Hide' : 'Show'}
                        </BsEye>
                      ) : (
                        <BsEyeSlash onClick={confirmHandleClick}>
                          {confirmShow ? 'Hide' : 'Show'}
                        </BsEyeSlash>
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.confirmpassword && errors.confirmpassword.message}
                  </FormErrorMessage>
                </FormControl>

                <Button loading={isLoading} title="Verifying" type="submit">
                  VERIFY
                </Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
