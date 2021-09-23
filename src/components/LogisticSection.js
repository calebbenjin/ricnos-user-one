import { Box, Container, Flex, Heading, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import styles from '@/styles/LogisticSection.module.css'
import custImg from '@/asset/userimg.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import airPlane from '@/asset/icons/airplane.svg'
import truckIcon from '@/asset/icons/truckicon.svg'
import riderIcon from '@/asset/icons/ridericon.svg'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from './ButtonGroup'
import Button from './Button'

const data = [
  {
    icon: airPlane,
    title: 'Air Freight Service',
    des: 'We can provide with the comprehensive service in the sphere of urgent,valuable,fragile or any cargoes conscientious accelerated delivery by air.',
    path: "/",
  },
  {
    icon: truckIcon,
    title: "Road Freight Service",
    des: "We provide a wide range of transportation services including quality international road transportation of cargoes and goods arriving from the ports all over nigeria",
    path: "/",
  },
  {
    icon: riderIcon,
    title: 'Despatch Riders Service',
    des: 'We provide fast pickup and delivery seamlessly from the comfort of your home, with our courier services all delivery is made swiftly, timely and items packaged in safe conditions.',
    path: "/",
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
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
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup justify="center" bg="red" mt="6" />,
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

export default function PickupSection() {
  return (
    <Box className={styles.section}>
      <Container maxWidth='container.xl'>
        <Flex wrap="wrap">

          <Box width={['100%', '50%']} mb="5">
            <Heading size="md" color="red" mb="10">Save and Reliable Logistics Solution</Heading>
            <Heading size="xl">Managing Logistics For Top Nigerian Companies</Heading>
          </Box>
          <Box width={['100%', '50%']}>
            <Text as="p" color="grey">Without doubt our logistics expertise,advanced technology and costomized logistics solutions will help you analyze, develope and implement successfuk supply chain management strategies from end-to-end.</Text>
            <Flex mt="8" align='center' justify='center'wrap="wrap">
              <Box width={['100%', '50%']}>
                <Button>Pricing & Plans</Button>
              </Box>
              <Box width={['100%', '50%']} mt="5">
                <Flex>
                  <Image src={custImg}  borderRadius="full" boxSize="50px" border="1px" borderColor="red" mr="5" />
                  <Box>
                    <Text fontWeight="bold" fontSize="md">+234 00 000 0000</Text>
                    <Text fontSize="sm" color="grey" mt="1">Customer Representative</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>

          <Carousel {...carouselParams}>
            {data.map((item, i) => (
        <SimpleGrid key={i}  minChildWidth={['100%', "120px"]} spacing="60px" mt="20">
              <Box  boxShadow="md" bg="white" width={['100%', '380px']} borderRadius="md" key={i} position="relative">
                <Box p="10" textAlign="left">
                  <Image src={item.icon} />
                  <Heading size="md" mt="4">{item.title}</Heading>
                  <Text as="p" color="grey" my="4">{item.des}</Text>
                  <Link href={item.path} color="red" fontWeight="bold"> 
                    <Flex align='center'>
                      <FaLongArrowAltRight/> 
                      <Text ml="2" >Learn More</Text>
                    </Flex>
                  </Link>
                </Box>
                <Box className={styles.card_line}></Box>
              </Box>
        </SimpleGrid>
            ))}     
          </Carousel>     
      </Container>
    </Box>
  )
}
