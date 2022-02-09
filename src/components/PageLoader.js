import styles from '@/styles/loader.module.css'
import { Spinner } from '@chakra-ui/react'

function PageLoader() {
  return (
    <div className={styles.loaderCont}>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='white'
      size='xl'
    />
    </div>
  )
}

export default PageLoader
