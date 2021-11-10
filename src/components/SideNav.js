import { Box, Container } from '@chakra-ui/react'
import styles from '@/styles/Settings.module.css'
// import Link from 'next/link'
import Link from '@/components/Link'

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <nav className={styles.nav}>
        <Link href='/dashboard/settings/'>
          <a fontWeight='bold' className={styles.link}>
            Profile
          </a>
        </Link>
        <Link href='/dashboard/settings/notification'>
          <a className={styles.link}>Notification</a>
        </Link>
        <Link href='/dashboard/settings/security'>
          <a className={styles.link}>Security</a>
        </Link>
      </nav>
    </div>
  )
}
