import { useState } from 'react'
import styles from '@/styles/displayCard.module.css'
import { FaTimes } from 'react-icons/fa'
import { Text } from '@chakra-ui/react'

export default function DisplayCard({ children, title }) {
  const [isClose, setIsClose] = useState(true)

  if (isClose) {
    return (
      <div className={styles.card}>
        <button className={styles.btn} onClick={() => setIsClose(false)}>
          <FaTimes />
        </button>
        <div className={styles.body}>
        <Text fontWeight='bold' fontSize='lg' mb="4" color="green">{title}</Text>
          <div>{children}</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
