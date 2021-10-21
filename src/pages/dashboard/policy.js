import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '@/components/Layout'
import styles from '@/styles/Policy.module.css'

export default function PolicyPage() {
  return (
    <Layout>
      <div className="container">
        <Box className={styles.showcase}>
          <Box width={['100%', '70%']}>
            <Heading className={styles.title}>
              Customers are the focus of everything
            </Heading>
            <Text className={styles.subtitle}>
              Continual improvement is essential to our success
            </Text>
          </Box>
        </Box>

        <Box my='10'>
          <Flex justify='space-between' wrap='wrap'>
            <Box width={['100%', '47%']}>
              <Box>
                <p className="justify">
                  This privacy policy will help you understand how RICNO
                  LOGISTICS uses and protects the data you provide to us when
                  you visit and use web Application. We reserve the right to
                  change this policy at any given time, of which you will be
                  promptly updated. If you want to make sure that you are up to
                  date with the latest changes, we advise you to frequently
                  visit this page.
                </p>
              </Box>
              <Box my='5'>
                <Heading fontSize='md' mb='3'>
                  What User Data We Collect
                </Heading>
                <p>
                  When you visit the website, we may collect the following data:
                </p>
                <List pl='4'>
                  <ListItem>Your IP address.</ListItem>
                  <ListItem>
                    Your contact information and email address.
                  </ListItem>
                  <ListItem>
                    Other information such as interests and preferences.
                  </ListItem>
                  <ListItem>
                    Data profile regarding your online behaviour on our website.
                  </ListItem>
                </List>
              </Box>
              <Box my='5'>
                <Heading fontSize='md' mb='3'>
                  Why We Collect Your Data
                </Heading>
                <Text>We are collecting your data for several reasons:</Text>
                <List pl='4'>
                  <ListItem>To better understand your needs.</ListItem>
                  <ListItem>To improve our services and products.</ListItem>
                  <ListItem>
                    To send you promotional emails containing the information we
                    think you will find interesting.
                  </ListItem>
                  <ListItem>
                    To contact you to fill out surveys and participate in other
                    types of market research.
                  </ListItem>
                  <ListItem>
                    To customize our website according to your online behaviour
                    and personal preferences.
                  </ListItem>
                </List>
              </Box>
              <Box my='5'>
                <Heading fontSize='md' mb='3'>
                  Safeguarding and Securing the Data
                </Heading>
                <p className="justify">
                  RICNO LOGISTICS is committed to securing your data and keeping
                  it confidential. RICNO LOGISTICS has done all in its power to
                  prevent data theft, unauthorized access, and disclosure by
                  implementing the latest technologies and software, which help
                  us safeguard all the information we collect online.
                </p>
              </Box>
            </Box>
            <Box width={['100%', '47%']}>
              <Box my='5'>
                <Heading fontSize='md' mb='3'>
                  Our Cookie Policy
                </Heading>
                <p className="justify">
                  Once you agree to allow our website to use cookies, you also
                  agree to use the data it collects regarding your online
                  behaviour analyse web traffic, web pages you spend the most
                  time on, and websites you visit. The data we collect by using
                  cookies is used to customize our website to your needs. After
                  we use the data for statistical analysis, the data is
                  completely removed from our systems.Please note that cookies
                  don't allow us to gain control of your computer in any way.
                  They are strictly used to monitor which pages you find useful
                  and which you do not so that we can provide a better
                  experience for you. If you want to disable cookies, you can do
                  it by accessing the settings of your internet browser.
                  (Provide links for cookie settings for major internet
                  browsers).{' '}
                </p>
              </Box>
              <Box my='5'>
                <Heading fontSize='md' mb='3'>
                  Restricting the Collection of your Personal Data
                </Heading>
                <p className="justify">
                  At some point, you might wish to restrict the use and
                  collection of your personal data. You can achieve this by
                  doing the following: When you are filling the forms on the
                  website, make sure to check if there is a box which you can
                  leave unchecked, if you dont want to disclose your personal
                  information. If you have already agreed to share your
                  information with us, feel free to contact us via email and we
                  will be more than happy to change this for you. [name] will
                  not lease, sell or distribute your personal information to any
                  third parties, unless we have your permission. We might do so
                  if the law forces us. Your personal information will be used
                  when we need to send you promotional materials if you agree to
                  this privacy policy.
                </p>
              </Box>
            </Box>
          </Flex>
        </Box>
      </div>
    </Layout>
  )
}
