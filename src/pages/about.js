import Layout from "@/components/HomeLayout";
import Banner from "@/components//Banner";
import ExpectSection from "@/components/ExpectSection";
import styles from '@/styles/Banner.module.css'
import style from '@/styles/About.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import affordIcon from '@/asset/icons/affordableicon.svg'
import warehouseIcon from '@/asset/icons/warehouse-icon.svg'
import deliveryIcon from '@/asset/icons/delivery.svg'
import safeIcon from '@/asset/icons/safcon.svg'
import layerIcon from '@/asset/icons/layer-icon.svg'
import { Box, Container, Text, Heading, Flex } from "@chakra-ui/react";
import Image from 'next/image'



export default function AboutPage() {
  return (
    <Layout>
      <Banner className={styles.about} title="If it’s about us, time is the thing." des="RICNOS is committed to customer service excellence and our business is based around solid values." />

      <ExpectSection />

      <Box as="section" className={style.section} bg="red">
        <Container maxWidth='container.xl'>
          <Flex className={styles.content} wrap="wrap">
            <Box width={['100%', '50%']}>
              <Text color="white" mb="10" fontWeight="bold">Dedicated Customer Teams And An Agile Service </Text>
              <Heading color="white">We Partner With Brands To Help Them Deliver Top Notch Services To Their Customers.</Heading>
            </Box>
            <Box width={['100%', '50%']} className={style.icons}>
              <Flex>
                <Box width={['100%', '50%']}>
                  <Image src={affordIcon} width="60" height="60" alt="Ware house icon" />
                  <Text color="white" mt="4">Transparent  Pricing</Text>
                </Box>
                <Box width={['100%', '50%']}>
                  <Image src={deliveryIcon} width="60" height="60" alt="Ware house icon" />
                  <Text color="white" mt="4">Fast, Efficient Delivery</Text>
                </Box>
                <Box width={['100%', '50%']}>
                  <Image src={warehouseIcon} width="60" height="60" alt="Ware house icon" />
                  <Text color="white" mt="4">Warehouse Storage</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Box as="section" className={style.imgSection} mt="9">
            <Flex wrap="wrap">
              <Box className={style.card} position="relative" w={['100%', '50%']} h={['300px', '380px']}>
                <Box bg="red" color="white" p="4"  position="absolute" bottom="0" left="0" w={['150px', '30%']} h={['220px', '50%']}>
                  <Image src={layerIcon} widht="60" alt="LayerIcon" height="60" />
                  <Text my="6">Affordable price, certified forwarder</Text>
                  <FaLongArrowAltRight />
                </Box>
              </Box>
              <Box className={style.cardOne}  w={['100%', '50%']} h={['300px', '380px']}>
                <Box bg="black" color="white" p="4" mb="6" position="absolute" bottom="0" left="0" w={['150px', '30%']} h={['220px', '50%']}>
                  <Image src={safeIcon} widht="60" alt="safeIcon" height="60" />
                  <Text my="6">Affordable price, certified forwarder</Text>
                  <FaLongArrowAltRight />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Box as="section" className={style.noteSection}>
        <Container maxWidth='container.xl'>
          <Flex justify="space-between" wrap="wrap">
            <Box width={['100%', '50%']}>
              <Box>
                <Heading color="grey" size="sm" mb="2" mt="10">OVERVIEW</Heading>
                <Text color="grey">Our staff attaches great is mpotance to customizing the booking process for our customers.that why we strive to find solution that best suits your needs. We have provided seamless style to book direct pickup from your comfort. we have more than five years experince, during that time, we’ve become expert in freight transportation by air and all it’s related services, we work closely with all major airlines in nigeria . our ongong negotiations ensure that we always have the cargo space we need and the ability to offer you competitive rates, Even during high season.</Text>
                
                <Text color="grey" mt="4">Were possible we’ll erect and dismantle unit load devices(ULDS), reducing significantly the risk of damage to your shipment and saving you time and expense. we can do this because many of our freight stattion have their own ground transportations around the airport.</Text>
              </Box>
              <Box>
                <Heading color="grey" mt="6" size="sm" mb="2" mt="10">STATS & CHARTS</Heading>
                <Text color="grey">Our partnership and contract assets allows us to retain optimal levels of control whilst expanding our reach to over 76% of towns in nigeria  with 5 yers experince , we are now trusted for shippment of all sizes and commodity types. Our services  extends to all states and territories, and includes multiple per-week services to places many others only serve occasionally.</Text>

                <Text color="grey" mt="4">We pride ourselved on providing the best transport and shipping services currently available in Nigeria. Our  skilled personnel, utilising thr latest communications, tracking and processing software, combined with lots of expertise, ensuring all frieght are shipped, delivered as safely, sucurely and promptly as possible.</Text>
              </Box>
            </Box>
            <Box width={['100%', '45%']}>
              <Box>
                <Heading color="grey" size="sm" mb="2" mt="4">HOW IT WORKS?!</Heading>
                <Text color="grey">Sign up, make orders for freight locally and nation wide, we pick up and deliver right at your door step, securely, safely and timly.</Text>
              </Box>
              <Box mt="8">
                <Heading color="grey" size="sm" mb="2">WHY US!</Heading>
                <Text color="grey">With our new innovations we continue to pursue the vision in todays complex and uncertain world, working everyday to earn our cutomers trust. We provide you with.</Text>
              </Box>
              <Flex mt="10" justify='space-between' wrap="wrap">
                <Box width={['100%', '47%']}>
                  <Box>
                    <Heading color="grey" size="sm" mb="4">Quality control sysytem</Heading>
                    <Text color="grey">With our new innovations we continue to pursue the vision in todays complex and uncertain world, working everyday to earn our cutomers trust. We provide you with.</Text>
                  </Box>
                  <Box>
                    <Heading color="grey" mt="5" size="sm" mb="4">100% satisfaction guarantee</Heading>
                    <Text color="grey">The very famous reasons for our existence is for your maximum satifaction, this has given the rise to our customer first aprroach, hence all our service is targeted to you our esteemed customer.</Text>
                  </Box>
                </Box>
                <Box width={['100%', '47%']}>
                  <Box>
                    <Heading color="grey" size="sm" mb="2" mt="4">Highly professional staff</Heading>
                    <Text color="grey">Our goal is geared up on giving maximum cusomer servive hence the reason why all our staffs undergo highly proffesional training so as y=to give you the best customer experince.</Text>
                  </Box>
                  <Box>
                    <Heading color="grey" mt="5" size="sm" mb="2">Accurate testing processes</Heading>
                    <Text color="grey">No matter the size of your freight we got you covered, all items weighed properly to avoid inflation and are well packed for safety and are delivered timly. </Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
      
    </Layout>
  )
}
