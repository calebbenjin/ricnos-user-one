import styles from '@/styles/CustomerSection.module.css'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ButtonGroup from './ButtonGroup'
import Button from './ButtonDark'
// import Rating from '../Rating'

import AvatarOne from '@/asset/testimonial/avatar1.png'
import AvatarTwo from '@/asset/testimonial/avatar2.png'
import AvatarThree from '@/asset/testimonial/avatar3.png'
import AvatarFour from '@/asset/testimonial/avatar4.png'
import quote from '@/asset/icons/quote.svg'

const data = [
  {
    id: 1,
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: AvatarOne,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 2,
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: AvatarTwo,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 3,
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: AvatarThree,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 4,
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: AvatarFour,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 3,
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 1000,
  centerMode: false,
  className: '',
  containerClass: 'carousel-container',
  customButtonGroup: <ButtonGroup />,
  autoPlay: false,
  dotListClass: '',
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: '',
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: true,
  responsive: responsive,
  showDots: false,
  sliderClass: '',
  slidesToSlide: 5,
}

export default function CustomerSection() {
  return (
    <Box bg='red' className={styles.section}>
      <Container maxWidth='container.xl'>
        <Flex alignItems='center' wrap='wrap'>
          <Box width={['100%', '40%']}>
            <Text fontWeight='bold' mt='10' color='white'>
              What Our Client’s Say!
            </Text>
            <Heading color='white' size='xl' my='8' fontWeight='normal'>
              Clients value us for our special focus on providing the best
              solutions, and making sure high standards are met in every step of
              the process.
            </Heading>
            <Text color='white'>
              We serve an impressive list of long-term clients with experience
              and expertise in multiple industries.
            </Text>
            <Button>Our Services</Button>
          </Box>

          <Box width={['100%', '60%']} mb='8'>
            <Carousel {...carouselParams}>
              {data.map((item, i) => (
                <SimpleGrid key={i} spacing='20px'>
                  <Box
                    bg='white'
                    color='white'
                    mr='5'
                    borderRadius='md'
                    p='4'
                    key={item.id}
                  >
                    <Flex alignItems='center'>
                      <Box width={['100%', '30%']}>
                        <Image
                          width="50"
                          height="50"
                          src={item.avatar}
                          alt={item.name}
                        />
                      </Box>
                      <Box width={['100%', '70%']}>
                        {/* <Rating rating={item.review} /> */}
                        <Text color='grey' fontSize='sm'>
                          {item.description}
                        </Text>
                        <Flex mt='4'>
                          <Box mr='4'>
                            <Text
                              color='black'
                              fontSize='sm'
                              my='1'
                              fontWeight='bold'
                            >
                              {item.name}
                            </Text>
                            <Text color='black' fontSize='sm'>
                              {item.designation}
                            </Text>
                          </Box>
                          <Box width={['100%', '30%']}>
                            <Image src={quote} width="60" alt="quoteImg" height="60" />
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              ))}
            </Carousel>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
