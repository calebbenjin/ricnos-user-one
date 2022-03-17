import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
} from "@chakra-ui/react";
import styles from "@/styles/Layout.module.css";
import Link from "@/components/Link";
import AsideNav from "@/components/AsideNav";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgHome } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";
import Button from "@/components/Button";
import AuthContext from "@/context/AuthContext";
import NotificationModal from "./NotificationModal";
// import MessageContext from '@/context/MessageContext';

export default function Layout({ children, data }) {
  const { logout } = useContext(AuthContext);
  // const { messageNotification, setMessageNotification } =
  // useContext(MessageContext);

  // useEffect(() => {
  //   if (messageNotification) {
  //     toast.info('You have a new message');
  //     setMessageNotification(false);
  //   }
  // }, [messageNotification]);

  return (
    <div className={styles.body}>
      <AsideNav />
      <main className={styles.main}>
        <ToastContainer
          position="top-center"
          autoClose={false}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <header className={styles.header} position="fixed" top="0">
          <Container maxWidth="container.xl">
            <Flex justify="space-between" alignItems="center">
              <Link href="/dashboard/pickup/">
                <a>
                  <Button>Request pickup</Button>
                </a>
              </Link>

              <Box as="nav">
                <Flex alignItems="center">
                  <NotificationModal data={data} />

                  {/* <Link href="/dashboard/message/">
                    <a className={styles.navIconBox}>
                      <IoNotificationsSharp className={styles.navIcon} />
                      <div>{data ? data.general_notification : null}</div>
                    </a>
                  </Link> */}
                  <Box>
                    <Flex alignItems="center">
                      <Box mr="3" color="white" textAlign="left">
                        <Text fontWeight="bold" fontSize="sm">
                          {data ? data.name : null}
                        </Text>
                        <Text
                          as="small"
                          fontSize="sm"
                          color="white"
                          isTruncated
                        >
                          {data ? data.email : null}
                        </Text>
                      </Box>
                      <Avatar
                        size="md"
                        name={data ? data.name : null}
                        src={data ? data.passport : null}
                      />
                    </Flex>
                  </Box>
                  <Menu>
                    <MenuButton>
                      <BsThreeDotsVertical className={styles.dotIcon} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link href="/dashboard/settings">
                          <a className={styles.menuLink}>
                            <FiSettings className={styles.icon} /> Settings
                          </a>
                        </Link>
                      </MenuItem>
                      <hr />
                      <MenuItem>
                        <Link href="/dashboard/support">
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
              </Box>
            </Flex>
          </Container>
        </header>

        <nav className={styles.mobileNav}>
          <Container maxWidth="container.xl">
            <Flex alignItems="center" justify="space-between">
              <Link href="/dashboard/pickup/">
                <a className="navMobileBtn">Request pickup</a>
              </Link>
              <Flex alignItems="center">
                <NotificationModal />
                <Menu>
                  <MenuButton>
                    <Flex alignItems="center">
                      <Avatar
                        size="sm"
                        className={styles.avatar}
                        name={data ? data.name : null}
                        src={data ? data.passport : null}
                      />
                      <BsThreeDotsVertical className={styles.dot} />
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href="/dashboard/settings">
                        <a className={styles.menuLink}>
                          <FiSettings className={styles.icon} /> Settings
                        </a>
                      </Link>
                    </MenuItem>
                    <hr />
                    <MenuItem>
                      <Link href="/dashboard/support">
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
            </Flex>
          </Container>
        </nav>

        <Box className={styles.mainBody}>{children}</Box>

        <footer className={styles.mobileFooter}>
          <Link href="/dashboard">
            <a className={styles.mobileIcon}>
              <CgHome />
            </a>
          </Link>
          <Link href="/dashboard/orders">
            <a className={styles.mobileIcon}>
              <AiOutlineUnorderedList />
            </a>
          </Link>
          <Link href="/dashboard/message">
            <a className={styles.mobileIcon}>
              <HiOutlineMail />
            </a>
          </Link>
          <Link href="/dashboard/support/">
            <a className={styles.mobileIcon}>
              <BiSupport />
            </a>
          </Link>
          <Link href="/dashboard/settings/">
            <a className={styles.mobileIcon}>
              <RiUserLine />
            </a>
          </Link>
        </footer>
      </main>
    </div>
  );
}
