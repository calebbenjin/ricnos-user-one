import { useState, useContext } from 'react'
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  Text,
  Flex,
  FormErrorMessage,
  FormControl,
  Stack,
  Checkbox,
} from '@chakra-ui/react'
import styles from '@/styles/TrackTrace.module.css'
import quoteIcon from '@/asset/icons/quoteIcon.svg'
import trackIcon from '@/asset/icons/trackIcon.svg'
import Card from './Card'
import { useForm } from 'react-hook-form'
import TrackForm from './TrackForm'
import Image from 'next/image'
import Button from './Button'
// // import LoadModal from './Modal'
// import { IoCheckmarkCircle } from 'react-icons/io5'
import LoaderSpinner from './LoaderSpinner'
import { ToastContainer } from 'react-toastify'
import DisplayCard from './DisplayCard'
import FetchContext from '@/context/FetchContext'
import { API_URL } from '@/lib/index'

export default function TrackTrace() {
  // const { isLoading, showResult } = useContext(FetchContext)
  const [isLoading, setIsLoading] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [quoteResult, setQuoteResult] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    const { weight, value, vehicle, region } = data

    const res = await fetch(`${API_URL}/get_quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weight, value, vehicle, region }),
    })

    const quoteData = await res.json()

    console.log('Quote res', quoteData)

    if (res.ok) {
      setIsLoading(true)
      setShowResult(true)
    } else {
      setIsLoading(false)
      setShowResult(false)
      setIsError(quoteData.data.message)
      setIsError(null)
      console.log('Somothing went Wrong')
    }
  }

  return (
    <div className={styles.trackForm}>
      <ToastContainer />
      <Container maxWidth='container.xl' className={styles.traceBody}>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            <Tab color='white' bg='red' py='4'>
              <Image src={quoteIcon} width='40' height='40' />
              <Text as='h4' fontSize='lg' color='white' ml='2'>
                Get a quote
              </Text>
            </Tab>
            <Tab
              color='white'
              borderColor='white'
              py='4'
              className={styles.trace_head}
            >
              <Flex alignItems='center' justify='center'>
                <Image src={trackIcon} width='40' height='40' />
                <Text as='h4' fontSize='lg' color='white' ml='2'>
                  Track & Trace
                </Text>
              </Flex>
            </Tab>
          </TabList>
          <TabPanels
            borderRadius='lg'
            className={styles.card_body}
            boxShadow='lg'
          >
            <TabPanel p='10' bg='white'>
              <Flex mb={3} justify='space-between'>
                <Box width={['100%', '75%']}>
                  {isLoading ? (
                    <LoaderSpinner title='Calculating Shippment' />
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Text mb='2' fontWeight='bold'>
                        Personal Data
                      </Text>
                      <Flex
                        alignItems='center'
                        justify='space-between'
                        wrap='wrap'
                      >
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.name}>
                            <input
                              type='text'
                              id='name'
                              placeholder='Name'
                              {...register('name', {
                                required: 'Name is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.name && errors.name.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.email}>
                            <input
                              type='email'
                              id='email'
                              placeholder='Email'
                              {...register('email', {
                                required: 'Email is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.email && errors.email.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.phone}>
                            <input
                              type='phone'
                              id='phone'
                              placeholder='Phone Number'
                              {...register('phone', {
                                required: 'Phone is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.phone && errors.phone.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Flex>

                      <Text mb='2' mt='4' fontWeight='bold'>
                        Shippment Data
                      </Text>

                      <Flex wrap='wrap' justify='space-between' mt='4'>
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.description}>
                            <input
                              type='text'
                              id='description'
                              placeholder='Description Name'
                              {...register('description', {
                                required: 'Description is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.description && errors.description.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.departure}>
                            <input
                              type='text'
                              id='depature'
                              placeholder='Departure'
                              {...register('departure', {
                                required: 'Departure is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.departure && errors.departure.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.arrival}>
                            <input
                              type='text'
                              id='arrival'
                              placeholder='Arrival'
                              {...register('arrival', {
                                required: 'Arrival is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.arrival && errors.arrival.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Flex>
                      <Flex wrap='wrap' justify='space-between' mt='4'>
                        <Box mb='3' width={['100%', '25%']}>
                          <FormControl isInvalid={errors.region}>
                            <select
                              id='region'
                              name='region'
                              {...register('region', {
                                required: 'Select regoin',
                              })}
                              required
                            >
                              <option>Region</option>
                              <option value='1'>Port Harcourt</option>
                            </select>
                            <FormErrorMessage>
                              {errors.region && errors.region.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box mb='3' width={['100%', '32%']}>
                          <FormControl isInvalid={errors.vehicle}>
                            <select
                              id='vehicle'
                              name='vehicle'
                              {...register('vehicle', {
                                required: 'Select vehicle',
                              })}
                              required
                            >
                              <option>Select vehicles</option>
                              <option value='1'>Motor Bike</option>
                              <option value='2'>Car</option>
                              <option value='3'>Truck</option>
                            </select>
                            <FormErrorMessage>
                              {errors.vehicle && errors.vehicle.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box width={['100%', '15%']} mr='2'>
                          <FormControl isInvalid={errors.weight}>
                            <input
                              type='text'
                              placeholder='Weight'
                              {...register('weight', {
                                required: 'weight is Required',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.weight && errors.weight.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                        <Box width={['100%', '20%']}>
                          <FormControl isInvalid={errors.value}>
                            <input
                              type='text'
                              id='value'
                              name='value'
                              placeholder='Item value amount'
                              {...register('value', {
                                required: 'Enter your Item value amount',
                              })}
                            />
                            <FormErrorMessage>
                              {errors.value && errors.value.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Box>
                      </Flex>

                      <Flex justify='space-between'>
                        <Box width={['100%', '70%']}>
                          <Stack
                            spacing={5}
                            direction={['column', 'row']}
                            my='6'
                          >
                            <Checkbox colorScheme='red'>Fragile</Checkbox>
                            <Checkbox colorScheme='red'>
                              Expres Delivery
                            </Checkbox>
                          </Stack>
                        </Box>
                      </Flex>

                      <Button type='submit'>Send</Button>
                    </form>
                  )}

                  {showResult && !isLoading ? (
                    <DisplayCard title='Shippment Quotation Result'>
                      <Text fontSize='lg' textTransform='capitalize'>
                        <b>Item Weight:</b> 3 kg
                      </Text>
                      <Text fontSize='lg' textTransform='capitalize' mt='2'>
                        <b>Value:</b> #30000, using a Bike for delivery, and
                        destination Lagos
                      </Text>
                      <Text fontSize='lg' textTransform='capitalize' mt='2'>
                        <b>Cost:</b> N2000
                      </Text>
                    </DisplayCard>
                  ) : null}
                </Box>
                <Box width={['100%', '23%']}>
                  <Card
                    title='Take Your Career To Next Level'
                    description='We pride ourselves on proving the best transportation and shipping services in Nigeria'
                  />
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel p='6' className={styles.trace_body}>
              <Container maxWidth='container.xl' p='10'>
                <Flex alignItems='center' justify='center'>
                  <Box width={['100%', '70%']} p='8'>
                    <TrackForm />
                  </Box>
                  <Box width={['100%', '30%']}>
                    {/* <Card
                      title='Take Your Career To Next Level'
                      description='We pride ourselves on proving the best transportation and shipping services in Nigeria'
                    /> */}
                  </Box>
                </Flex>
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  )
}

// export default function
