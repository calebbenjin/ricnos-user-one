import { Heading, Flex, Box, Avatar, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { VscCalendar } from 'react-icons/vsc'
import { GoMail } from 'react-icons/go'
import styles from '@/styles/Message.module.css'
import Link from 'next/link'
import Logo from './Logo'
import logoImg from '@/asset/logo1.svg'

export default function messagePage() {
  return (
    <Box p='5' boxShadow='md' borderRadius='md' backgroundColor='white'>
      <Flex justify='space-between' alignItems='center'>
        <Heading size='md'>Customer</Heading>
        <BsThreeDotsVertical className={styles.icon} />
      </Flex>

      <Flex justify='space-between' alignItems='center' mt='8'>
        <Box my='4'>
          <Flex alignItems='center' wrap="wrap">
            <Avatar
              size='sm'
              name='Segun Adebayo'
              mr='4'
              src='/'
            />
            <Text isTruncated>Joseph Benyako</Text>
          </Flex>
        </Box>
        <Link href='/dashboard/settings'>
          <a>
            <FaLongArrowAltRight className={styles.arrowIcon} />
          </a>
        </Link>
      </Flex>
      <hr />
      <Flex justify='space-between' alignItems='center'>
        <Box my='4'>
          <Flex alignItems='center'>
            <VscCalendar className={styles.calander} />
            <Text>5 Orders</Text>
          </Flex>
        </Box>
        <Link href='/orders'>
          <a>
            <FaLongArrowAltRight className={styles.arrowIcon} />
          </a>
        </Link>
      </Flex>
      <hr />

      <Box my='4'>
        <Heading size='sm'>Contact Info</Heading>

        <Flex alignItems='center' my='10'>
          <GoMail className={styles.calander} />
          <Text>Email</Text>
        </Flex>
        <Flex alignItems='center'>
          <FiPhone className={styles.calander} />
          <Text>Phone Number</Text>
        </Flex>
      </Box>

      <hr />
      <Box mt='4'>
        <Heading size='sm'>Shipping Address</Heading>
        <Text mt='6'>Joseph Benyako</Text>
        <Text my='4'>+234(803) 00 0000</Text>

        <Text>No 9 lacfog plaza, Kilometer 16, East west road. Choba.</Text>
        <Text my='4'>Port Harcourt,Rivers State</Text>
      </Box>

      <hr />
      <Box mt='4'>
        <Heading size='sm'>Billing Address</Heading>
        <Text mt='6'>Joseph Benyako</Text>
        <Text my='4'>+234(803) 00 0000</Text>

        <Text>No 9 lacfog plaza, Kilometer 16, East west road. Choba.</Text>
        <Text my='4'>Port Harcourt,Rivers State</Text>
      </Box>
      <hr />

      <Flex alignItems='center' mt='4'>
        <Box p='4' borderRadius='md' mr='10' boxShadow='md'>
          <Logo src={logoImg} />
        </Box>
        <Box>
          <Text fontSize='lg'>Ricno Logistics</Text>
          <Text>Premium</Text>
        </Box>
      </Flex>
    </Box>
  )
}
