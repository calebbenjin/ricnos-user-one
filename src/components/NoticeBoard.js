import { useContext } from 'react';
import { Heading, Flex, Box, Avatar, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { VscCalendar } from 'react-icons/vsc';
import { GoMail } from 'react-icons/go';
import styles from '@/styles/Message.module.css';
import Link from 'next/link';
import Logo from './Logo';
import logoImg from '@/asset/logo1.svg';
import AuthContext from '@/context/AuthContext';

export default function MessagePage() {
  const { user } = useContext(AuthContext);

  return (
    <Box p="5" boxShadow="md" borderRadius="md" backgroundColor="white">
      <Flex justify="space-between" alignItems="center">
        <Heading size="md">Customer</Heading>
        <BsThreeDotsVertical className={styles.icon} />
      </Flex>

      <Flex justify="space-between" alignItems="center" mt="8">
        <Box my="4">
          <Flex alignItems="center" wrap="wrap">
            <Avatar
              size="sm"
              name={user.name}
              mr="4"
              src={user ? user.passport : null}
            />
            <Text isTruncated>{user.name}</Text>
          </Flex>
        </Box>
        <Link href="/dashboard/settings">
          <a>
            <FaLongArrowAltRight className={styles.arrowIcon} />
          </a>
        </Link>
      </Flex>
      <hr />
      <Flex justify="space-between" alignItems="center">
        <Box my="4">
          <Flex alignItems="center">
            <VscCalendar className={styles.calander} />
            <Text>5 Orders</Text>
          </Flex>
        </Box>
        <Link href="/orders">
          <a>
            <FaLongArrowAltRight className={styles.arrowIcon} />
          </a>
        </Link>
      </Flex>
      <hr />

      <Box my="4">
        <Heading size="sm">Contact Info</Heading>

        <Flex alignItems="center" my="10">
          <GoMail className={styles.calander} />
          <Text>{user.email}</Text>
        </Flex>
        <Flex alignItems="center">
          <FiPhone className={styles.calander} />
          <Text>{user.phone}</Text>
        </Flex>
      </Box>

      <hr />
      {/* <Box mt="4">
        <Heading size="sm">Shipping Address</Heading>
        <Text mt="6">{user.order.reciever_name}</Text>
        <Text my="4">{order.reciever_phone}</Text>

        <Text>{order.address}</Text>
        <Text my="4">
          {order.city}, {order.state}
        </Text>
      </Box> */}

      <hr />
      <Box mt="4">
        <Heading size="sm">Billing Address</Heading>
        <Text mt="6">{user.name}</Text>
        <Text my="4">{user.phone}</Text>
        <Text>{user.addresses?.address}</Text>
        <Text my="4">Port Harcourt,Rivers State</Text>
      </Box>
      <hr />

      <Flex alignItems="center" mt="4">
        <Box p="4" borderRadius="md" mr="10" boxShadow="md">
          <Logo src={logoImg} />
        </Box>
        <Box>
          <Text fontSize="lg">Ricno Logistics</Text>
          <Text>Premium</Text>
        </Box>
      </Flex>
    </Box>
  );
}
