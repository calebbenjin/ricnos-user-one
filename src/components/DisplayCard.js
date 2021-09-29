import { useState } from 'react'
import styles from '@/styles/displayCard.module.css'
import { FaTimes } from 'react-icons/fa'
import { Text } from '@chakra-ui/react'

export default function DisplayCard({ children, title }) {
  const [isClose, setIsClose] = useState(false)

  if (isClose) {
    return (
      <div className={styles.card}>
        <Text fontWeight='bold' fontSize='lg' color="green">{title}</Text>
        <button className={styles.btn} onClick={() => setIsClose(false)}>
          <FaTimes />
        </button>
        <div className={styles.body}>
          <div>{children}</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
