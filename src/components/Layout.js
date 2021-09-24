import { useContext } from 'react'
import {
  Box,
  Container,
  Flex,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import styles from '@/styles/Layout.module.css'
import Link from '@/components/Link'
import AsideNav from '@/components/AsideNav'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoNotificationsSharp, IoMailSharp } from 'react-icons/io5'
import { CgHome } from 'react-icons/cg'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiUserLine } from 'react-icons/ri'
import Button from '@/components/Button'
import AuthContext from '@/context/AuthContext'
// import logoImage from '@/asset/logo1.svg'
// import Image from 'next/image'

export default function layout({ children, name, email,  }) {
  const { logout } = useContext(AuthContext)
  return (
    <div className={styles.body}>
      <AsideNav />
      <main className={styles.main}>
        <header className={styles.header} position='fixed' top='0'>
          <Container maxWidth='container.xl'>
            <Flex justify='space-between' alignItems='center'>
              <Link href='/dashboard/pickup/'>
                <a>Request pickup</a>
              </Link>

              <Box as='nav'>
                <Flex alignItems='center'>
                  <Link href='/notification'>
                    <a className={styles.navIconBox}>
                      <IoNotificationsSharp className={styles.navIcon} />
                      <div>10</div>
                    </a>
                  </Link>
                  <Link href='/message'>
                    <a className={styles.navIconBox}>
                      <IoMailSharp className={styles.navIcon} />
                      <div>9</div>
                    </a>
                  </Link>
                  <Box>
                    <Flex alignItems='center'>
                      <Box mr='3' color='white' textAlign='left'>
                        <Text fontWeight='bold' fontSize='sm'>
                          {name && name}
                        </Text>
                        <Text as='small' fontSize='sm' color='grey' isTruncated>
                        {email && email}
                        </Text>
                      </Box>
                      <Avatar size='md' name='Segun Adebayo' src='/' />
                    </Flex>
                  </Box>
                  <Menu>
                    <MenuButton>
                      <BsThreeDotsVertical className={styles.dotIcon} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link href='/dashboard/settings'>
                          <a className={styles.menuLink}>
                            <FiSettings className={styles.icon} /> Settings
                          </a>
                        </Link>
                      </MenuItem>
                      <hr />
                      <MenuItem>
                        <Link href='/dashboard/support'>
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

        <nav className={styles.mobileNav}>
          <Container maxWidth='container.xl'>
            <Flex alignItems='center' justify='space-between'>
              <Text fontWeight='bold' color='red' fontSize='sm'>
                Segun Adebayo
              </Text>
              <Menu>
                <MenuButton>
                  <Flex alignItems='center'>
                    <Avatar
                      size='sm'
                      className={styles.avatar}
                      name='Segun Adebayo'
                      src='/'
                    />
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
                  <MenuItem onClick={() => logout()}>
                    <a className={styles.menuLink}>
                      <FiLogOut className={styles.icon} /> Logout
                    </a>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Container>
        </nav>

        <Box className={styles.mainBody}>{children}</Box>

        <footer className={styles.mobileFooter}>
          <Link href='/dashboard'>
            <a className={styles.mobileIcon}>
              <CgHome />
            </a>
          </Link>
          <Link href='/dashboard/orders'>
            <a className={styles.mobileIcon}>
              <AiOutlineUnorderedList />
            </a>
          </Link>
          <Link href='/dashboard/message'>
            <a className={styles.mobileIcon}>
              <FiEdit />
            </a>
          </Link>
          <Link href='/dashboard/message/'>
            <a className={styles.mobileIcon}>
              <HiOutlineMail />
            </a>
          </Link>
          <Link href='/dashboard/settings/'>
            <a className={styles.mobileIcon}>
              <RiUserLine />
            </a>
          </Link>
        </footer>
      </main>
    </div>
  )
}
