import { Box, Heading, Container, Flex, Avatar, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import styles from '@/styles/Layout.module.css'
import Link from 'next/link'
import { FaChartPie, FaListUl, FaUsers, FaBook } from 'react-icons/fa'
import { SiGooglemessages } from 'react-icons/si'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoNotificationsSharp, IoMailSharp } from 'react-icons/io5'
// import { ButtonBg } from '@/components/common/Button'
// import Logo from '@/components/common/Logo'
// import logoImage from '@/assets/logo1.svg'

export default function layout({ children }) {
  return (
    <div className={styles.body}>
      <aside className={styles.aside}>
        <Box className={styles.logo}>
          {/* <Logo src={logoImage} /> */}
        </Box>

        <nav className={styles.nav}>
          <Link href='/dashboard'>
            <a className={styles.navLink}>
              <FaChartPie className={styles.icon} /> Dashboard
            </a>
          </Link>
          <Link href='/dashboard/orders'>
            <a className={styles.navLink}>
              <FaListUl className={styles.icon} /> Orders
            </a>
          </Link>
          <Link href='/dashboard/message'>
            <a className={styles.navLink}>
              <SiGooglemessages className={styles.icon} /> Messages
            </a>
          </Link>
          <Link href='/dashboard/support'>
            <a className={styles.navLink}>
              <FaUsers className={styles.icon} /> Support
            </a>
          </Link>
          <Link href='/dashboard/policy'>
            <a className={styles.navLink}>
              <FaBook className={styles.icon} /> Policies
            </a>
          </Link>
          <hr />
          <Link href='/dashboard/settings'>
            <a className={styles.navLink}>
              <FiSettings className={styles.icon} /> Settings
            </a>
          </Link>
        </nav>
      </aside>
      <main className={styles.main}>
        <header className={styles.header} position="fixed" top="0">
          <Container maxWidth='container.xl'>
            <Flex justify="space-between" alignItems="center">
              <Link href='/orderPickUp'>
                <a>
                  {/* <ButtonBg text='Request pickup' color='red' px='4' /> */}
                </a>
              </Link>

              <Box as="nav">
                <Flex alignItems="center">
                  <Link href="/">
                    <a className={styles.navIconBox}><IoNotificationsSharp className={styles.navIcon} /><div>10</div></a>
                  </Link>
                  <Link href="/">
                    <a className={styles.navIconBox}><IoMailSharp className={styles.navIcon} /><div>9</div></a>
                  </Link>
                  <Box>
                    <Flex alignItems="center">
                      <Box mr="3" color="white" textAlign="left">
                        <Text fontWeight="bold" fontSize="sm">
                          Segun Adebayo
                        </Text>
                        <Text as="small" fontSize="sm" color="grey" isTruncated>SegunAdebayo@gmail.com</Text>
                      </Box>
                      <Avatar size="md" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    </Flex>
                  </Box>
                  <Menu>
                    <MenuButton>
                      <BsThreeDotsVertical className={styles.dotIcon} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link href='/'>
                          <a className={styles.menuLink}>
                            <FiSettings className={styles.icon} /> Settings
                          </a>
                        </Link>
                      </MenuItem>
                      <hr />
                      <MenuItem>
                        <Link href='/'>
                          <a className={styles.menuLink}>
                            <FaUsers className={styles.icon} /> Support
                          </a>
                        </Link>
                      </MenuItem>
                      <hr />
                      <MenuItem>
                        <Link href='/'>
                          <a className={styles.menuLink}>
                            <FiLogOut className={styles.icon} /> Logout
                          </a>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </header>

        <nav className={styles.mobileNav} >
          <Container maxWidth='container.xl'>
            <Flex alignItems="center" justify='space-between'>
              <Text fontWeight="bold" color="red" fontSize="sm">Segun Adebayo</Text>
              <Menu>
                <MenuButton>
                  <Flex alignItems="center">
                    <Avatar size="sm" className={styles.avatar} name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <BsThreeDotsVertical className={styles.dot} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href='/'>
                      <a className={styles.menuLink}>
                        <FiSettings className={styles.icon} /> Settings
                      </a>
                    </Link>
                  </MenuItem>
                  <hr />
                  <MenuItem>
                    <Link href='/'>
                      <a className={styles.menuLink}>
                        <FaUsers className={styles.icon} /> Support
                      </a>
                    </Link>
                  </MenuItem>
                  <hr />
                  <MenuItem>
                    <Link href='/'>
                      <a className={styles.menuLink}>
                        <FiLogOut className={styles.icon} /> Logout
                      </a>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Container>
        </nav>


        <Box className={styles.mainBody}>
          {children}
        </Box>

        <footer className={styles.mobileFooter}>
          <Link href="/dashboard">
            <a className={styles.mobileIcon}>Home</a>
          </Link>
          <Link href="/">
            <a className={styles.mobileIcon}>Activites</a>
          </Link>
          <Link href="/">
            <a className={styles.mobileIcon}>Chat</a>
          </Link>
          <Link href="/">
            <a className={styles.mobileIcon}>Message</a>
          </Link>
          <Link href="/">
            <a className={styles.mobileIcon}>Profile</a>
          </Link>
        </footer>
      </main>
    </div>
  )
}
