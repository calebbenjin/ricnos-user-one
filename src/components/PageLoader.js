import logoImage from '@/asset/logo.svg'
import Image from 'next/image'
import styles from '@/styles/loader.module.css'

function PageLoader() {
  return (
    <div className={styles.loaderCont}>
      <div className={styles.loader}>
        <Image src={logoImage} alt='60' height='60' />
      </div>
    </div>
  )
}

export default PageLoader
