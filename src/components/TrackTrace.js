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
  Image,
  Flex,
  Input,
  FormErrorMessage,
  FormControl,
  Stack,
  Checkbox,
  Select,
  Grid,
} from '@chakra-ui/react'
import styles from '@/styles/TrackTrace.module.css'
// import quoteIcon from '@/assets/icons/quoteIcon.svg'
// import trackIcon from '@/assets/icons/trackIcon.svg'
import Card from './Card'
import { useForm } from 'react-hook-form'
import TrackForm from './TrackForm'
import Button from './Button'
// // import LoadModal from './Modal'
// import { IoCheckmarkCircle } from 'react-icons/io5'
// import Loading from './Loader'
import { ToastContainer } from 'react-toastify'
// import FetchContext from '@/context/FetchContext'

export default function TrackTrace() {
  // const { quote } = useContext(FetchContext)
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    const {  weight, value, vehicle, region } = data

    // quote({  weight, value, vehicle, region })
  }

  return (
    <div className={styles.trackForm}>
      <ToastContainer />
      <Container maxWidth='container.xl' className={styles.traceBody}>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            <Tab color='white' bg='red' py='4'>
              {/* <Image src={quoteIcon} width={['10%', '8%']} /> */}
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
                {/* <Image src={trackIcon} width={['10%', '8%']} /> */}
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

                    <Text mb='2' mt='4' fontWeight='bold'>
                      Shippment Data
                    </Text>
                    <Flex wrap='wrap' justify='space-between'>
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

                    <Text mb='2' mt='4' fontWeight='bold'>
                      Add item
                    </Text>

                    <Flex justify='space-between'>
                      <Box width={['100%', '70%']}>
                        <Stack spacing={5} direction={['column', 'row']} my='6'>
                          <Checkbox colorScheme='red'>Fragile</Checkbox>
                          <Checkbox colorScheme='red'>Expres Delivery</Checkbox>
                        </Stack>
                      </Box>
                    </Flex>

                    <Button type='submit'>Send</Button>
                  </form>
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
