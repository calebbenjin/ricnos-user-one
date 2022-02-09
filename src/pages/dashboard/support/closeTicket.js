import { useState, useEffect } from 'react'
import { Flex, Box, Container, Text, Heading, Button } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import Link from '@/components/Link'
import setting from '@/styles/Settings.module.css'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { useRouter } from 'next/router'
import { formatDateForInput } from '@/components/FormatDate'

export default function OpenTicket({ user, token }) {
  const router = useRouter()
  const [ticketData, setTicketDate] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getTicketData()
  }, [])

  async function getTicketData() {
    setIsLoading(true)
    const response = await fetch(`${API_URL}/support/closed`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    setTicketDate(data.data)
    setIsLoading(false)
  }

  console.log(ticketData)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  })

  if (!user) {
    return null
  }

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
              Closed Ticket
            </Text>

            <Text color='grey' my='5'>
              Ticket help you get answer/response directly from our Agents{' '}
            </Text>

            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <>
                {ticketData &&
                  ticketData.supports.map((support) => (
                    <Box
                      key={support.id}
                      className={setting.card}
                      borderRadius='md'
                      py='6'
                      px='10'
                    >
                      <Flex
                        justify='space-between'
                        alignItems='center'
                        wrap='wrap'
                      >
                        <Box>
                          <Heading size='sm' textTransform='capitalize'>
                            {support.subject}
                          </Heading>
                          <Text my='4' textTransform='uppercase'>
                            {support.ticket_no}
                          </Text>
                          <Text>{formatDateForInput(support.date)}</Text>
                        </Box>
                        <Link href={`/dashboard/support/${support.id}`}>
                          <Button variant='outline' color='grey'>
                            Closed
                          </Button>
                        </Link>
                      </Flex>
                    </Box>
                  ))}
              </>
            )}
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if (token) {
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
        token,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}
