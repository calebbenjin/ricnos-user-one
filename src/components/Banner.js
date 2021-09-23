import React from 'react'
import { Box, Container } from '@chakra-ui/react'
// import styles from '../../styles/Banner.module.css'
import Heading from './Heading'
// import BannerCard from '../core/BannerCard'
import TrackForm from './TrackForm'

export default function Banner({className, trackForm, card, title, des }) {
  const [ isVisiable, setIsVisiable ] = React.useState(true)


  return (
    <Box as='div' className={className}>
      <Box>
        <Heading title={title} description={des} />
        <Container maxWidth='container.md'>
          <TrackForm />
          <Box>{card}</Box>
        </Container>
      </Box>
    </Box>
  )
}
