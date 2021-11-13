import { Box } from '@chakra-ui/react'
import styles from '@/styles/Layout.module.css'
import Link from '@/components/Link'
import { FaChartPie, FaListUl, FaUsers, FaBook, FaUserTie } from 'react-icons/fa'
import { SiGooglemessages } from 'react-icons/si'
import { FiSettings, FiLogOut } from 'react-icons/fi'
// import { ButtonBg } from '@/components/common/Button'
import Logo from '@/components/Logo'
import logoImage from '@/asset/logo1.svg'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Box className={styles.logo}>
        <Logo src={logoImage} />
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
  )
}
