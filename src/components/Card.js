import { Box, Text } from '@chakra-ui/react'
import Button from './ButtonDark'

export default function Card({title, description, icon}) {
  return (
    <Box as="div" bg="red" color="white" borderRadius="md" p="5" textAlign="left">
      <Text as="h4" fontSize="md" mb="10" fontWeight="bold">{title}</Text>
      <Text as="p" fontSize="md" mb="10">{description}</Text>
      <Button>Apply now</Button>
    </Box>
  )
}


