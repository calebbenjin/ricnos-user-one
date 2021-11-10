import { useState } from 'react'
import SideNav from '@/components/SideNav'
import {
  Box,
  Flex,
  Container,
  Text,
  Avatar,
  AvatarBadge,
  FormLabel,
  FormControl,
  Input,
  Heading,
} from '@chakra-ui/react'
import Layout from '@/components/Layout'
import styles from '@/styles/Settings.module.css'
import { BsPencil } from 'react-icons/bs'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'
// import FileUploader from '@/components/FileUploader'
import Button from '@/components/Button'
import { parseCookies } from '@/helpers/index'
import { API_URL } from '@/lib/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SettingsPage({ user, token }) {
  const [imagePreview, setImagePreview] = useState(
    user.passport ? user.passport : null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [values, setValues] = useState({
    passport: '',
    first_name: user.first_name,
    last_name: user.last_name,
    phone: user.phone,
    email: user.email,
    address: '',
    address_one: '',
    city: '',
    state: '',
    zip_code: user.zip_code,
    country: '',
  })
  // const [values, setValues] = useState({
  //   passport: user.passport,
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   phone: user.phone,
  //   email: user.email,
  //   address: user.addresses.address,
  //   address_one: user.addresses.second_address,
  //   city: user.addresses.city,
  //   state: user.addresses.state,
  //   zip_code: user.zip_code,
  //   country: user.addresses.country,
  // })


  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/user/update_profile`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      toast.error('Something went Wrong')
    } else {
      const userData = await res.json()
      toast.success('Changes Saved')
      console.log(userData)
    }
  }

  const handleFileInput = (e) => {
    // handle validations
    setSelectedFile(e.target.files[0])

    // if (file.size > 1024)
    //   onFileSelectError({ error: 'File size cannot exceed more than 1MB' })
    // else onFileSelectSuccess(file)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })

    // selectedFile(fileInput.files[0])
  }

  return (
    <Layout
      title='My Profile'
      data={user}
    >
      <Flex justify='space-between' wrap='wrap'>
        <SideNav />

        <Box className={styles.profileSetting}>
          <ToastContainer />
          <div>
            <div className={styles.form} p='6'>
              <Heading size='md' my='5'>
                Profile Settings
              </Heading>
              <hr />

              <Box textAlign='center' className={styles.avatarBox}>
                <Avatar
                  size='2xl'
                  mt='10'
                  className={styles.avatar}
                  name={user.name}
                  src={user.passport}
                >
                  <AvatarBadge
                    className={styles.avatarBadge}
                    boxSize='0.8em'
                    borderRadius='md'
                    bg='red.500'
                    onClick={() => setShowModal(true)}
                  >
                    {' '}
                    <BsPencil color='white' fontSize='1.5rem' />
                  </AvatarBadge>
                </Avatar>
              </Box>

              <Box>
                <form onSubmit={handleSubmit}>
                  <Flex wrap='wrap' justify='space-between' mt='10'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Firstname</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          id='firstname'
                          name='first_name'
                          placeholder='First Name'
                          value={values.first_name}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Lastname</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          id='lastname'
                          name='last_name'
                          placeholder='Lastname'
                          value={values.last_name}
                          onChange={() => handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Phone</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          id='phone'
                          name='phone'
                          placeholder='+234 810-000-0000'
                          value={values.phone}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Email Address</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          id='email'
                          name='email'
                          placeholder='Example@mail.com'
                          value={values.email}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Box mb='4' width={['100%']}>
                    <FormControl>
                      <FormLabel fontWeight='normal'>Address 1</FormLabel>
                      <Input
                        borderColor='grey'
                        type='text'
                        size='lg'
                        id='address'
                        name='address'
                        placeholder='Address 1'
                        value={values.address}
                        onChange={() => handleChange}
                      />
                    </FormControl>
                  </Box>
                  <Box mb='4' width={['100%']}>
                    <FormControl>
                      <FormLabel fontWeight='normal'>Address 2</FormLabel>
                      <Input
                        borderColor='grey'
                        type='text'
                        size='lg'
                        id='address_one'
                        name='address_one'
                        placeholder='Address (Optional)'
                        value={values.address_one}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>City</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          id='city'
                          name='city'
                          size='lg'
                          placeholder='City'
                          value={values.city}
                          onChange={() => handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>State</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          id='state'
                          size='lg'
                          name='state'
                          placeholder='State'
                          value={values.state}
                          onChange={() => handleChange}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Zip Code</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          id='zipcode'
                          size='lg'
                          name='zip_code'
                          placeholder='Zip Code'
                          value={values.zip_code}
                          onChange={() => handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      {/* <FormControl>
                        <FormLabel fontWeight='normal'>Country</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          id='country'
                          name='country'
                          placeholder='Country'
                          value={values.country}
                          onChange={() => handleChange}
                        />
                      </FormControl> */}
                    </Box>
                  </Flex>
                  <Box mb='4' width={['100%', '100%']}>
                    {/* <FileUploader
                      onFileSelectSuccess={(file) => setSelectedFile(file)}
                      onFileSelectError={({ error }) => alert(error)}
                    /> */}
                    {/* <input type='file' name="passport" value={values.passport}
                          onChange={() => handleChange} /> */}
                  </Box>
                  <Box textAlign='right' mb='20'>
                    <Button>Save Changes</Button>
                  </Box>
                </form>
              </Box>
            </div>
          </div>

          <Modal show={showModal} onClose={() => setShowModal(false)}>
            {/* <ImageUpload imageUploaded={imageUploaded} /> */}
            {/* <FileUploaded
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            /> */}
          </Modal>
        </Box>
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const userData = await res.json()
  const { user } = userData.data


  return {
    props: {
      user,
      token,
    },
  }
}


