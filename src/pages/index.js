import BannerCard from '@/components/BannerCard'
import Layout from '@/components/HomeLayout'
import CustomerSection from '@/components/CustomerSection'
import ExpartSection from '@/components/ExpartSection'
import Banner from '@/components/Banner'
import ExpectSection from '@/components/ExpectSection'
import LogisticSection from '@/components/LogisticSection'
import QuoteSection from '@/components/QuoteSection'
import styles from '@/styles/Banner.module.css'
import style from '@/styles/ExpectSection.module.css'
// import TrackForm from '@/components/TrackForm'
// import BannerCard from '../components/core/BannerCard'
// import Heading from "../components/atoms/Heading";




export default function Home() {
  return (
    <Layout>
      <Banner className={styles.home}  card={<BannerCard />} title="THE MORE WE DO, THE MORE WE CAN DO." des="RICNOS is committed to customer service excellence and our business
            is based around solid values." />
      <ExpectSection className={style.section} />
      <QuoteSection />
      <LogisticSection />
      <CustomerSection />
      <ExpartSection />
    </Layout>
  )
}
