import styles from '@/styles/Button.module.css'

export default function ButtonDark({children}) {
  return (
    <button className={styles.btnDark}>
      {children}
    </button>
  )
}
