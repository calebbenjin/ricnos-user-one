import SideNav from '@/components/SideNav'
import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'
import {
  Box,
  Checkbox,
  Container,
  Flex,
  List,
  ListItem,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Switch,
} from '@chakra-ui/react'
import styles from '@/styles/Settings.module.css'
import Button from '@/components/Button'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { useRouter } from 'next/router'

export default function NotificationPage({ user }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  });
 
  if (!user) {
    return null;
  }


  return (
    <Layout title="Notifications settings" data={user}>
      <Flex justify='space-between' wrap='wrap'>
        <SideNav />

        <Box className={styles.profileSetting}>
          <Container maxWidth='container.md'>
            <Heading fontSize='lg' mb='5' mt="10">
              Notifications Settings
            </Heading>
            <hr />
            <Flex wrap='wrap' justify='space-between' my='10'>
              <Box width={['100%', '20%']}>
                <Heading size='sm' mb='1'>
                  Notifications
                </Heading>
                <Text fontSize='sm'>
                  For important updates regarding RICNO LOGISTICS and your
                  activities, you will recieve certain notifications.
                </Text>
              </Box>
              <Box width={['100%', '70%']} mt='5'>
                <Flex justify='space-between'>
                  <Box>
                    <Text color='grey' fontSize='lg' mb='5'>
                      Type
                    </Text>
                    <List fontSize='sm'>
                      <ListItem mb='6'>Message</ListItem>
                      <ListItem mb='6'>Order Update</ListItem>
                      <ListItem mb='6'>General Notification</ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Text color='grey' fontSize='md' mb='5'>
                      Email
                    </Text>
                    <List fontSize='sm'>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Text color='grey' fontSize='md' mb='5'>
                      Mobile
                    </Text>

                    <List fontSize='sm'>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                    </List>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <hr />

          <Container maxWidth='container.md' mb="20">
            <Text color='grey' fontSize='2xl' mb='5' mt='10'>
              Real-Time Notifications
            </Text>
            <Flex alignItems='center' justify='space-between' my='10'>
              <Box>
                <Text>Enable /disable real-time notifications</Text>
              </Box>
              <Box>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='email-alerts' colorScheme='red' mr='3' />
                  <FormLabel
                    htmlFor='email-alerts'
                    mb='2'
                    fontWeight='normal'
                    color='red'
                  >
                    Try me.
                  </FormLabel>
                </FormControl>
              </Box>
            </Flex>
            <Flex alignItems='center' justify='space-between' my='10'>
              <Box>
                <Text>Enable /disable sound</Text>
              </Box>
              <Box>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='email-alerts' colorScheme='red' mr='3' />
                  <FormLabel
                    htmlFor='email-alerts'
                    mb='2'
                    fontWeight='normal'
                    color='red'
                  >
                    icon
                  </FormLabel>
                </FormControl>
              </Box>
            </Flex>

            <Box textAlign='right' mt='10'>
              <Button type="submit" loading={isLoading}>Save Changes</Button>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}



export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if(token) {
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
        token
      },
    }
  } else {
    return {
      props: {}
    }
  }
}
