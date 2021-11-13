import styles from '@/styles/Button.module.css'
import { Spinner } from '@chakra-ui/react'
import style from '@/styles/loader.module.css'

export default function Button({type, loading, title, children}) {
  return (
    <button type={type} className={styles.btn}>
      
      {loading ? <div className={style.card}>
      <Spinner
      thickness='3px'
      speed='0.80s'
      emptyColor='gray.200'
      color='gray.800'
      size='sm'
    />
      <h2>{title ? title : 'Please wait'}...</h2>
    </div> : children}
    </button>
  )
}
