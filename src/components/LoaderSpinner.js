import { Spinner } from '@chakra-ui/react'
import styles from '@/styles/loader.module.css'

export default function Loading({title}) {
  return (
    <div className={styles.card}>
      <Spinner
      thickness='3px'
      speed='0.50s'
      emptyColor='gray.200'
      color='gray.800'
      size='md'
    />
      <h2>{title}...</h2>
    </div>
  )
}
