import Layout from '../../components/template/DashboardLayout'
import {
  Box,
  Container,
  Text,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  Flex,
  Stack,
  Checkbox,
  Select,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Button from '../../components/atoms/Buttons/FormBtn'

export default function dashboard() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <Layout title='Request for Pickup'>
      <Container maxWidth='container.lg'>
        <Box>
          <Heading size='lg' mt='20' mb='10'>
            Order a Pickup
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
              Personal Data
            </Text>
            <Flex wrap='wrap' justify='space-between'>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.name}>
                  <input
                    type='text'
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
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.email}>
                  <input
                    type='email'
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
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.phone}>
                  <input
                    type='text'
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

            <Box mb='3' mt='5' width={['100%', '100%']}>
              <FormControl isInvalid={errors.address}>
                <input
                  type='text'
                  placeholder='Address'
                  {...register('address', {
                    required: 'Address is Required',
                  })}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>
            </Box>

            <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
              Shipping Data
            </Text>
            <Flex wrap='wrap' justify='space-between'>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.recieverName}>
                  <input
                    type='text'
                    placeholder='Recievers Name'
                    {...register('recieverName', {
                      required: 'Recievers Name is Required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.recieverName && errors.recieverName.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.email}>
                  <input
                    type='email'
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
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.phone}>
                  <input
                    type='text'
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
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.description}>
                  <input
                    type='text'
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
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.departure}>
                  <input
                    type='text'
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
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.arrival}>
                  <input
                    type='text'
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
              <Box mb='3' width={['100%', '65%']}>
                <FormControl isInvalid={errors.address}>
                  <input
                    type='text'
                    placeholder='Address'
                    {...register('address', {
                      required: 'Address is Required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.address && errors.address.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '30%']}>
                <FormControl isInvalid={errors.city}>
                  <input
                    type='text'
                    placeholder='City'
                    {...register('city', {
                      required: 'City is Required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.city && errors.city.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Flex>
            <Flex wrap='wrap' justify='space-between' mt='4'>
              <Box mb='3' width={['100%', '45%']}>
                <FormControl isInvalid={errors.state}>
                  <input
                    type='text'
                    placeholder='State'
                    {...register('state', {
                      required: 'State is Required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.state && errors.state.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '45%']}>
                <FormControl>
                  <Select placeholder='Region' {...register('delivery')}>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                  {/* <FormErrorMessage>
                        {errors.delivery && errors.delivery.message}
                      </FormErrorMessage> */}
                </FormControl>
              </Box>
            </Flex>

            <Box mb='4' mt='10'>
              <Text textAlign='left' fontWeight='bold'>
                Select a ride
              </Text>
              <Text textAlign='left'>
                Please select the most suitable vehicle to pick up item(s).
              </Text>

              {/* <label className={login.checkboxContainer}>
                    <input
                      type='checkbox'
                      checked='checked'
                      {...register('state')}
                    />
                    <span className={login.checkMark}></span>
                  </label> */}
            </Box>

            <Text textAlign='left' mb='4' mt='10' fontWeight='bold'>
              Add Items
            </Text>
            <Flex wrap='wrap' justify='space-between' mt='4'>
              <Box mb='3' width={['100%', '45%']}>
                <FormControl>
                  <Select
                    placeholder='Delivery Method'
                    {...register('delivery')}
                  >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                  {/* <FormErrorMessage>
                        {errors.delivery && errors.delivery.message}
                      </FormErrorMessage> */}
                </FormControl>
              </Box>
              <Box mb='3' width={['100%', '45%']}>
                <FormControl isInvalid={errors.xstate}>
                  <Input
                    type='text'
                    placeholder='State'
                    {...register('xstate', {
                      required: 'Items Name is Required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.xstate && errors.xstate.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Flex>
            <Flex wrap='wrap' mt='6' justify='space-between'>
              <Box mb='3' width={['100%', '45%']}>
                <Flex>
                  <Box width={['100%', '50%']} mr='2'>
                    <FormControl isInvalid={errors.weight}>
                      <Input
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
                  <Box width={['100%', '50%']}>
                    <FormControl isInvalid={errors.height}>
                      <Input
                        type='text'
                        placeholder='Height'
                        {...register('height', {
                          required: 'Height is Required',
                        })}
                      />
                      <FormErrorMessage>
                        {errors.height && errors.height.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </Flex>
              </Box>
              <Box mb='3' width={['100%', '45%']}>
                <Flex justify='space-between'>
                  <Box width={['100%', '50%']} mr='2'>
                    <FormControl isInvalid={errors.width}>
                      <Input
                        type='text'
                        placeholder='Width'
                        {...register('width', {
                          required: 'width is Required',
                        })}
                      />
                      <FormErrorMessage>
                        {errors.width && errors.width.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box width={['100%', '50%']}>
                    <FormControl isInvalid={errors.length}>
                      <Input
                        type='text'
                        placeholder='length'
                        {...register('length', {
                          required: 'Height is Required',
                        })}
                      />
                      <FormErrorMessage>
                        {errors.length && errors.length.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Flex justify=''>
              <Stack spacing={5} direction={['column', 'row']} my='6'>
                <Checkbox colorScheme='red'>Fragile</Checkbox>
                <Checkbox colorScheme='red'>Expres Delivery</Checkbox>
              </Stack>
            </Flex>

            <Box textAlign='left' mb='20' mt='10'>
              <button type='submit'>
                Add more Items
              </button>
            </Box>

            <Button>Checkout</Button>
          </form>
        </Box>
      </Container>
    </Layout>
  )
}
