import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import styles from '@/styles/Logo.module.css'

export default function Logo({ src, ...rest }) {
  return (
    <Box>
      <Link href='/'>
        <a>
          <Image
            width="50"
            height="50"
            src={src}
            alt='Ricnos Logo'
            // className={styles.img}
            // objectFit='cover'
          />
        </a>
      </Link>
    </Box>
  )
}

