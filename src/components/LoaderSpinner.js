import { Spinner } from '@chakra-ui/react'
import styles from '@/styles/loader.module.css'

export default function Loading({title}) {
  return (
    <div className={styles.card}>
      <div>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        <h2>{title}...</h2>
      </div>
    </div>
  )
}
