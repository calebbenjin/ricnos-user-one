import { Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Spinner
      thickness='3px'
      speed='0.70s'
      emptyColor='gray.200'
      color='gray.800'
      size='lg'
    />
  )
}