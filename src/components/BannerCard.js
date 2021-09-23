import { Box, Container, Flex, Text } from '@chakra-ui/react'
import styles from '@/styles/BannerCard.module.css'
import Link from 'next/link'

const cardData = [
  {
    title: 'Become an Airport Agent',
    description:
      'Sign up with us to become an agent with our wealth of experience in freight forwarding and distribution, here to take care of shipping requirements. make it simple and stress free through our friendly, knowledgeable and qualified staff.',
    path: '/',
    label: 'Get started'
  },
  {
    title: 'Become a Delivery Partner',
    description:
      'For the past couple of years, demand for our services have tripled, due to our expertise in palatalisation, repacking, booking in and delivering goods securely and punctually to client’s destination, On this ground we are giving opportunity for you to be part of us.',
      path: '/',
      label: 'Get started'
  },
]

export default function BannerCard() {
  return (
    <Container maxWidth='container.xl' className={styles.bannerCard}>
      <Flex>
        {cardData.map((item, i) => (
          <Box className={styles.card} key={i}>
            <Text size="lg" className={styles.title}>{item.title}</Text>
            <div className={styles.line}></div>
            <Text as='p' mb={3}>{item.description}</Text>
            <Link href={item.path}>
              <a className={styles.link}>{item.label}</a>
            </Link>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}
