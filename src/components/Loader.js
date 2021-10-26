import { Spinner } from '@chakra-ui/react'
import styles from '@/styles/loader.module.css'

export default function Loading({title}) {
  return (
    <div className={styles.loaderContainer}>
        <div className={styles.container}>
          <div>
          <Spinner
            thickness='5px'
            speed='0.70s'
            emptyColor='gray.200'
            color='red'
            size='xl'
          />
          <h4>{title}</h4>
          </div>
        </div>
    </div>
  )
}