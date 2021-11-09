import { useState, useContext } from 'react'
import { Flex, Box, Container, Text, Heading, Button } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import Link from '@/components/Link'
import { TiPlus } from 'react-icons/ti'
import setting from '@/styles/Settings.module.css'
import AuthContext from '@/context/AuthContext'
import PageLoader from '@/components/PageLoader'

export default function OpenTicket() {
  const { user } = useContext(AuthContext)

  return (
      <Layout data={user}>
        <Flex>
          <Box width={['100%', '20%']} className={setting.sideNav}>
            <nav className={setting.nav}>
              <Link href='/dashboard/support/'>
                <a fontWeight='bold' className={setting.link}>
                  Send Message
                </a>
              </Link>
              <Link href='/dashboard/support/openTicket'>
                <a className={setting.link}>Open Ticket</a>
              </Link>
              <Link href='/dashboard/support/closeTicket'>
                <a className={setting.link}>Close Ticket</a>
              </Link>
            </nav>
          </Box>

          <Box width={['100%', '80%']}>
            <Container maxWidth='container.md'>
              <Text fontWeight='bold' fontSize='md' mt='6' color='grey'>
                Opened Ticket
              </Text>

              <Text color='grey' my='5'>
                Ticket help you get answer/response directly from our Agents{' '}
              </Text>

              <Link href='/dashboard/support/'>
                <Button
                  leftIcon={<TiPlus />}
                  colorScheme='red'
                  variant='outline'
                >
                  Create New Ticket
                </Button>
              </Link>

              <Box className={setting.card} borderRadius='md' py='6' px='10'>
                <Flex justify='space-between' alignItems='center' wrap='wrap'>
                  <Box>
                    <Heading size='sm'>Title</Heading>
                    <Text my='4'>RN14273T11222</Text>
                    <Text>16/11/2021</Text>
                  </Box>
                  <Link href='/'>
                    <Button variant='outline' color='grey'>
                      Open
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Container>
          </Box>
        </Flex>
      </Layout>
    )
}
