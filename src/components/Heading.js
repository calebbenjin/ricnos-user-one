import { Box, Container, Heading, Text } from '@chakra-ui/react'
import styles from '@/styles/Heading.module.css'

export default function BannerTitle({title, description}) {
  return (
    <Box>
      <Container maxWidth='container.lg'>
        <Heading className={styles.title}>{title}</Heading>
        <Text className={styles.description}>{description}</Text>
      </Container>
    </Box>
  )
}
