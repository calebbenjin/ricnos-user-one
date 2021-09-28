import { Box, Container, Flex, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import Image from 'next/image'
import { MdCheckCircle } from 'react-icons/md'
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from '@/styles/ExpartSection.module.css'
import layerIcon from '@/asset/icons/layer-icon.svg'
import safcon from '@/asset/icons/safcon.svg'

export default function ExpartSection() {
  return (
    <Box className={styles.section}>
      <Container maxWidth='container.xl'>
        <Flex wrap="wrap">

          <Box width={['100%', '45%']} mb="5">
            <Heading size="md" color="red" mb="10">What To Expect From!</Heading>
            <Heading size="xl" pr="6">Digital Freight That Saves Your Time!</Heading>
          </Box>
          <Box width={['100%', '55%']}>
            <Text as="p" color="grey">We pride ourselves on providing  the  best transport and shipping services available allover Nigeria , Our skilled personnel, utilising communications, tracking and processing software, combined with decades of Experience! Through integrated Supply chain solutions, Equita drive sustainable competitive advantages to some of Nigeria’s largest company.</Text>

            <Flex mt="8" alignItems='center' justify='center' wrap="wrap">
              <Box width={['100%', '50%']}>
                <List spacing="3">
                  <ListItem  color="grey">
                    <ListIcon as={MdCheckCircle} color="red"  />
                    Quality comes first
                  </ListItem>
                  <ListItem  color="grey">
                    <ListIcon as={MdCheckCircle} color="red"  />
                    Customers are the focus of everything
                  </ListItem>
                  <ListItem  color="grey">
                    <ListIcon as={MdCheckCircle} color="red"  />
                    Highly professional staff
                  </ListItem>
                </List>
              </Box>
              <Box width={['100%', '50%']} mb="4">
              <List spacing="3">
                  <ListItem color="grey">
                    <ListIcon as={MdCheckCircle} color="red"  />
                    Accuracy in delivery
                  </ListItem>
                  <ListItem color="grey">
                    <ListIcon as={MdCheckCircle} color="red"  />
                    Untravailed workmanship
                  </ListItem>
                  <ListItem color="grey">
                    <ListIcon as={MdCheckCircle} color="red"  />
                    Integrity is never compromised
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box className={styles.flex_card} mt="10">
          <Flex wrap="wrap">
            <Box className={styles.card} position="relative" w={['100%', '50%']} h={['300px', '500px']}>
              <Box bg="red" color="white" p="4"  position="absolute" bottom="0" left="0" w={['150px', '30%']} h={['220px', '40%']}>
                <Image src={layerIcon} width="60" height="60" />
                <Text my="6">Affordable price, certified forwarder</Text>
                <FaLongArrowAltRight />
              </Box>
            </Box>
            <Box className={styles.cardOne}  w={['100%', '50%']} h={['300px', '500px']}>
              <Box bg="black" color="white" p="4" position="absolute" bottom="0" left="0" w={['150px', '30%']} h={['220px', '40%']}>
                <Image src={safcon} width="60" height="60"/>
                <Text my="6">Affordable price, certified forwarder</Text>
                <FaLongArrowAltRight />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
