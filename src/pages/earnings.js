import Layout from '@/components/Layout'
import { Container, Heading, Text, Box, Flex } from '@chakra-ui/react'


export default function EarningsPage() {
  return (
    <Layout>
      <Container maxWidth='container.lg'>
        <Heading size="lg" mt="6">Earnings</Heading>

        <Flex mt="10" p="7" bg="white" justify='space-between' alignItems="center" textAlign="center" boxShadow="md">
          <Box p="6">
            <Text fontWeight="bold" fontSize="sm" color="grey">Total Earn</Text>
            <Text fontSize="xl" mt="4">NGN232, 4320</Text>
          </Box>
          <Box p="6">
            <Text fontWeight="bold" fontSize="sm" color="grey">Total Withdrawn</Text>
            <Text fontSize="xl" mt="4">NGN232, 4320</Text>
          </Box>
          <Box p="6">
            <Text fontWeight="bold" fontSize="sm" color="grey">Available for Withdrawn</Text>
            <Text fontSize="xl" color="black" mt="4">NGN232, 4320</Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
