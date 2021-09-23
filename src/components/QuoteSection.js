import { Heading, Box, Container, Flex, Text } from '@chakra-ui/react'
import styles from '@/styles/QuoteSection.module.css'
import TrackTrace from './TrackTrace'

export default function QuoteSection() {
  return (
    <Box className={styles.section}>
      <Container maxWidth='container.xl'>
        <Flex mb={3} justify='center' wrap='wrap' py="20">
          <Box
            width={[
              '100%', // 0-30em
              '50%', // 62em+
            ]}
            pr="2"
            mb={10}
          >
            <Heading size="md" color="white" mb="10">Dedicated Customer Teams And An Agile Service </Heading>
            <Heading size="xl" color="white">We Partner With Brands To Help Them Deliver Top Notch Services To Their Customers.</Heading>
          </Box>
          <Box
            width={[
              '100%', // 0-30em
              '50%', // 62em+
            ]}
            pl="2"
          >
            <Flex justify="space-between">
              <Box>
                <Box as="div" width="20" height="2" bg="red" borderRadius="md" mb={4}></Box>
                <Text color="white">Transportation Pricing</Text>
              </Box>
              <Box>
                <Box as="div" width="20" height="2" bg="red" borderRadius="md" mb={4}></Box>
                <Text color="white">Fast, Efficient Delivery</Text>
              </Box>
              <Box>
                <Box as="div" width="20" height="2" bg="red" borderRadius="md" mb={4}></Box>
                <Text color="white">Transparent Pricing</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <TrackTrace />
      </Container>
    </Box>
  )
}
