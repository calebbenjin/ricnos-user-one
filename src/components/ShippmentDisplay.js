
import { Heading, Text, Flex, Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { GoCheck } from 'react-icons/go'
import { FaLongArrowAltRight } from 'react-icons/fa'
import AccordonComp from '@/components/Accordon'
import Button from '@/components/Button'

export default function ShippingDisplay({items}) {

  return (
    <DisplayCard>
      <>
        <Flex>
          <GoCheck className='icon' color='green' />
          <div>
            <Heading color='green' size='md'>
              Delivered signed by: {items.userName}
            </Heading>
            <Text as='p' mt='2' color='grey'>
              {items.location}
            </Text>
          </div>
        </Flex>
        <Box display='flex'>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Box>

        <Box>
          <Text as='p' mt='5' color='grey'>
            This shipment is handled by: Ricnos Logistics
          </Text>
          <Text as='p' color='grey'>
            Tracking Code: {items.trackingCode}
          </Text>
          <Heading
            color='red'
            size='sm'
            my='10'
            display='flex'
            alignItems='center'
          >
            <span>{items.from}</span>{' '}
            <FaLongArrowAltRight
              style={{
                marginLeft: '1rem',
                marginRight: '1rem',
                fontSize: '1.5rem',
              }}
            />{' '}
            <span>{items.to}</span>
          </Heading>
        </Box>

        <Box>
          <Button>Proof of delivery</Button>
        </Box>

        <AccordonComp title='More Shippment Details'>
          <Text fontSize='xl' mb='4'>
            Tracking Code: {items.trackingCode}
          </Text>
          <hr />

          <Box mt='5'>
            <Flex justify='space-between' mb='5' alignItems='center'>
              <Box width={['50%']}>
                <Text fontWeight='bold'>Items</Text>
              </Box>
              <Box width={['50%']}>
                <Text fontWeight='bold'>Quantity</Text>
              </Box>
            </Flex>
            {/* {items &&
              items.map((item) => (
                <Flex
                  key={item.id}
                  mb='2'
                  justify='space-between'
                  alignItems='center'
                >
                  <Box width={['50%']}>
                    <Text>{item.name}</Text>
                  </Box>
                  <Box width={['50%']}>
                    <Text>{item.quantity}</Text>
                  </Box>
                </Flex>
              ))} */}
          </Box>
        </AccordonComp>
        <AccordonComp title='All Shippment Updates'>
          <FlexContainer>
            <DateBox>
              <Text fontSize='sm' fontWeight='bold'>
                Wednesday
              </Text>
              <Text fontSize='xl'>April, 14 2021</Text>
              <Text fontSize='sm' mt='2' color='green'>
                16:10 Local time | Delivered - Signed for by: Joseph Benyako
              </Text>
            </DateBox>
            <DateBox>
              <Text fontSize='sm' fontWeight='bold' color='grey' mt='5'>
                Tuesday
              </Text>
              <Text fontSize='xl'>April, 14 2021</Text>
              <Text fontSize='sm' mt='3' color='grey'>
                12:08 Local time | Forwarded for delivery
              </Text>
              <div>
                <Text color='grey' mt='4' fontSize='sm' fontWeight='bold'>
                  PORT HARCOURT - LAGOS
                </Text>
                <Text fontSize='sm' color='grey'>
                  10:47 Local time | Arrived at Delivery Facility in PORT
                  HARCOURT - LAGOS
                </Text>
              </div>
              <div>
                <Text color='grey' mt='4' fontSize='sm' fontWeight='bold'>
                  PORT HARCOURT - LAGOS
                </Text>
                <Text fontSize='sm' color='grey'>
                  10:47 Local time | Arrived at Delivery Facility in PORT
                  HARCOURT - LAGOS
                </Text>
              </div>
              <div>
                <Text color='grey' mt='4' fontSize='sm' fontWeight='bold'>
                  PORT HARCOURT - LAGOS
                </Text>
                <Text fontSize='sm' color='grey'>
                  10:47 Local time | Arrived at Delivery Facility in PORT
                  HARCOURT - LAGOS
                </Text>
              </div>
            </DateBox>
            <DateBox>
              <Text fontSize='sm' fontWeight='bold' color='grey' mt='5'>
                Tuesday
              </Text>
              <Text fontSize='xl'>April, 14 2021</Text>
              <Text fontSize='sm' mt='3' color='grey'>
                12:08 Local time | Forwarded for delivery
              </Text>
              <div>
                <Text color='grey' mt='4' fontSize='sm' fontWeight='bold'>
                  PORT HARCOURT - LAGOS
                </Text>
                <Text fontSize='sm' color='grey'>
                  10:47 Local time | Arrived at Delivery Facility in PORT
                  HARCOURT - LAGOS
                </Text>
              </div>
              <div>
                <Text color='grey' mt='4' fontSize='sm' fontWeight='bold'>
                  PORT HARCOURT - LAGOS
                </Text>
                <Text fontSize='sm' color='grey'>
                  10:47 Local time | Arrived at Delivery Facility in PORT
                  HARCOURT - LAGOS
                </Text>
              </div>
              <div>
                <Text color='grey' mt='4' fontSize='sm' fontWeight='bold'>
                  PORT HARCOURT - LAGOS
                </Text>
                <Text fontSize='sm' color='grey'>
                  10:47 Local time | Arrived at Delivery Facility in PORT
                  HARCOURT - LAGOS
                </Text>
              </div>
            </DateBox>
          </FlexContainer>
        </AccordonComp>
      </>
    </DisplayCard>
  )
}

const Div = styled.div`
  margin: 10rem 0;

  a {
    color: red;
    text-decoration: none;
  }

  .icon {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    .icon {
      font-size: 3.5rem;
    }
  }
`

const DisplayCard = styled.div`
  margin: 5rem 0;
  padding: 1rem;
  background: #fff;

  @media screen and (min-width: 1024px) {
    padding: 3rem;
    margin: 5rem 0;
    background: #fff;
  }
`

const FlexContainer = styled.div``
const DateBox = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: solid 2px #ccc;
`

const Line = styled.div`
  width: 35%;
  height: 6px;
  margin-top: 1rem;
  margin-right: 1rem;
  background: green;
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 6px;
    margin-top: 1rem;
    margin-right: 1rem;
    background: green;
  }
`
