import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  Spacer,
  InputRightElement,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import logoImage from '@/asset/logo.svg'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { MdPhoneAndroid } from 'react-icons/md'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <Box as='footer' bg='black'>
      <Container maxWidth='container.xl'>
        <Flex justify='space-between' alignItems='center' wrap='wrap' py='10'>
          <Box width={['100%', 'auto']} mt="10">
            <Image src={logoImage} width='50px' height="50" />
            <Flex mt='5'>
              <Box
                className={styles.icon}
                height='30px'
                width='30px'
                borderRadius='full'
                bg='red'
                color='white'
              >
                <FaFacebookF />
              </Box>
              <Box
                className={styles.icon}
                height='30px'
                width='30px'
                borderRadius='full'
                bg='red'
              >
                <FaInstagram />
              </Box>
              <Box
                className={styles.icon}
                height='30px'
                width='30px'
                borderRadius='full'
                bg='red'
              >
                <FaTwitter />
              </Box>
              <Box
                className={styles.icon}
                height='30px'
                width='30px'
                borderRadius='full'
                bg='red'
              >
                <FaYoutube />
              </Box>
            </Flex>

            <form>
              <Text fontWeight="bold" mt="4" color="white" >Stay Up To Date</Text>
              <InputGroup mt='2'>
                <Input
                  type='email'
                  borderRadius='md'
                  borderColor='grey'
                  placeholder='Your email address'
                  size='sm'
                />
                <InputRightElement children={<FaTelegramPlane color='red' />} />
              </InputGroup>
            </form>
          </Box>
          <Box width={['100%', 'auto']} mt="10">
            <Text color='white' fontWeight='bold' mb="2">
              Quick Links
            </Text>
            <VStack
              color='white'
              spacing={2}
              align='stretch'
            >
              <Link href='/'>Portfolio</Link>
              <Link href='/'>Blogs</Link>
              <Link href='/'>About</Link>
              <Link href='/'>Press</Link>
              <Link href='/'>Careers</Link>
            </VStack>
          </Box>
          <Box width={['100%', 'auto']} mt="10">
            <Text color='white' fontWeight='bold' mb="2">
              Support
            </Text>
            <VStack
              color='white'
              spacing={2}
              align='stretch'
            >
              <Link href='/'>Help Center</Link>
              <Link href='/'>Safty Center</Link>
              <Link href='/'>Community Guidelines</Link>
              <Link href='/'>Press</Link>
              <Link href='/'>Careers</Link>
            </VStack>
          </Box>
          <Box width={['100%', 'auto']} mt="">
            <Text color='white' fontWeight='bold' mb="2">
              Reach us
            </Text>
            <VStack
              color='white'
              spacing={2}
              align='stretch'
            >
              <Flex align='center'><FaEnvelope color="red" /> <Text ml="2">Hello@ricnos.com</Text></Flex>
              <Flex align='center'><MdPhoneAndroid color="red" /> <Text ml="2">+234 9978-990-8876</Text></Flex>
              <Flex align='center'><FaMapMarkerAlt color="red"/> <Text ml="2">772 Lyonwood Ave Walnut, CA 91789</Text></Flex>
            </VStack>
          </Box>
          
        </Flex>
      </Container>
      <Box as='div' className={styles.small_footer} py="3" color="white">
        <Container maxWidth='container.xl'>
          <Flex wrap="wrap">
            <Box width={['100%', '50%']} my="4">
              <Text>&copy; 2021 Ricnoslogistics. All rights reserved</Text>
            </Box>
            <Spacer />
            <Box width={['100%', '50%']} my="4" textAlign="right">
              <Link href="/" ml="4">Terms & Condition</Link>
              <Link href="/" ml="4">Privacy Policy</Link>
              <Link href="/" ml="4">Site Map</Link>
              <Link href="/" ml="4">Disclaimer</Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
