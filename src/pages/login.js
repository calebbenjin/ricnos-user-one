import { useState, useContext, useEffect } from "react";
import Layout from "@/components/HomeLayout";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import styles from "@/styles/Login.module.css";
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Container,
  InputGroup,
  InputRightElement,
  Flex,
  Checkbox,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import AuthContext from "@/context/AuthContext";
import Loading from "@/components/Loader";

function LoginPage() {
  const { login, isError, isLoading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  useEffect(() => isError && toast.error(isError));

  const onSubmit = (data, e) => {
    e.preventDefault();
    const { email, password } = data;
    login({ email, password });

    // setIsLoading(false)
  };

  return (
    <Layout>
      <Box className={styles.cardBg}>
        <ToastContainer />
        <Box className={styles.form}>
          <Container maxWidth="container.xl">
            <Box width={["100%", "50%"]}></Box>
            <Box>
              <Heading mt="20" mb="10" size="lg">
                Login
              </Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel fontWeight="normal">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    borderColor="grey"
                    {...register("email", { required: "Email is required" })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password} my="5">
                  <FormLabel fontWeight="normal">Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor="grey"
                      pr="2rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      className={styles.passwordInput}
                      {...register("password", {
                        required: "Password is Required",
                      })}
                    />
                    <InputRightElement>
                      <BsEye className={styles.inputIcon} onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mb="5">
                  <Link href="/forgetpassword">Forget Password?</Link>
                </FormControl>
                <hr />
                <Box my="5">
                  <Link href="/signup">Don&apos;t have an account? Signup</Link>
                </Box>
                <Button type="submit" loading={isLoading}>
                  LOGIN
                </Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}

export default LoginPage;
