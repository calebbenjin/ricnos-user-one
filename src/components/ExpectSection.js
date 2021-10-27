import {
  Heading,
  Box,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import styles from '@/styles/ExpectSection.module.css'
import SectionHeader from './SectionHeader'
import deliveryIcon from '@/asset/icons/delivery-icon.svg'

export default function ExpectSection({ className }) {
  return (
    <div className={className}>
      <Container maxWidth='container.xl'>

        <Flex align='center' justify='space-between' wrap='wrap'>
          <Box
            width={[
              '100%', // 0-30em
              '40%', // 62em+
            ]}
            height={[
              '300', // 0-30em
              '600', // 62em+
            ]}
            className={styles.bgImg}
            position="relative"
          >
            <Flex className={styles.icon} bg="red" align='center' justify='center'>
              <Box textAlign="center">
                <Image src={deliveryIcon} width="70" alt="deliveryIcon" height="70" />
                <Text as="p" fontSize="2xl" color="white" mt={2}>1.456m</Text>
                <Heading size="sm" color="white">Delivered Goods</Heading>
              </Box>
            </Flex>
          </Box>

          <Box
            p="5"
            width={[
              '100%', // 0-30em
              '57%', // 62em+
            ]}
          >
            <SectionHeader sub="Providing Full Range Of Transportation In Nigeria" title="Reliable Logistics and Transport Solutions Saves your Time." />
            
            <Flex justify="center" wrap="wrap">
              <Box width={['100%', '60%']} mb={4}>
                <Text as="p" mb={4}>We utilise intercontinental air and ocean freight transport to offer a fully comprehensive and efficient logistics service.</Text>

                <Text as="p" mb={4}>For the past couple of years, demand for our services have tripled, boosting the volume of importation for E–commerce and FBA shipments due to our expertise in palatalisation, repacking, booking in and delivering these goods securely and punctually to client’s destination.</Text>

                <Text as="p">With the accelerating popularity of E-commerce within Nigeria, numerous sellers from around Nigeria are targeting online marketplace platforms. We can offer clients the logistical solutions that enable sellers to deliver their products promptly around, with access to real-time tracking of stock levels and shipment progress.</Text>
              </Box>
              <Box width={['100%', '40%']}>
                <Flex alignItems="center" mb={3}>
                  <Text as="div" w="15px" h="15px" mr="3" bg="red.500" borderRadius="md"></Text>
                  <Heading as="h6" size="sm">Quality</Heading>
                </Flex>
                <Text as="p" mb={8}> We have dedicated team who carry out implement their duties professionally and efficiently to provide the best services as customer satisfaction as our main goal.</Text>
                <Flex alignItems="center" mb={3}>
                  <Text as="div" w="15px" h="15px" mr="3" bg="red.500" borderRadius="md"></Text>
                  <Heading as="h6" size="sm">Reliability</Heading>
                </Flex>
                <Text as="p"> We have dedicated team who carry out implement their duties professionally and efficiently to provide the best services as customer satisfaction as our main goal.</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
