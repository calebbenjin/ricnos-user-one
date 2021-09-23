import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import styled from 'styled-components'
import styles from '@/styles/Drawer.module.css'
import Link from 'next/link'
import menuItems from '@/localData/navData'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react'




const social = [
  {
    id: 1,
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    path: '/',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    path: '/',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    path: '/',
    icon: <FaLinkedinIn />,
  },
]


export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box className={styles.drawer}>
        <IoMdMenu onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <MenuLink>
              {menuItems.map((item) => (
                <Link href={item.path} key={item.id}>
                  {item.label}
                </Link>
              ))}
            </MenuLink>
          </DrawerBody>

          <DrawerFooter>
            <MenuFooter>
              <MenuSocial>
                {social.map((socialItem) => (
                  <Box as='span' key={socialItem.id} >
                    <Link href={socialItem.path}>{socialItem.icon}</Link>
                  </Box>
                ))}
              </MenuSocial>
            </MenuFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const MenuLink = styled.div`
  width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    a {
      font-size: 16px;
      font-weight: 500;
      color: text_white;
      padding-top: 2rem;
      padding-bottom: 1rem;
      cursor: pointer;
      border-bottom: 1px solid #e8e5e5;
      transition: all 0.25s;
      &:hover {
        color: #fff;
      }
      &.active {
        color: red;
      }
    }
`

const MenuFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const MenuSocial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 1.5rem;
    margin-right: 2rem;
    transition: all 0.25s;
    cursor: pointer;
    &:last-child {
      margin-right: '0',
    }
    &:hover {
      color: blue;
    }
  }
`;
