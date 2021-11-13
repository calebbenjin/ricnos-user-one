import { useState, useRef } from 'react'
import { API_URL } from '@/lib/index'
import { FormControl, Input } from '@chakra-ui/react'
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ImageUpload({ imageUploaded, token }) {
  const [image, setImage] = useState(null)
  const fileInput = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    var formdata = new FormData()
    formdata.append('passport', image, '[PROXY]')

    const res = await fetch(`${API_URL}/user/update_profile_image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })

    const resData = await res.json()
    console.log(resData)

    if(!res.ok) {
      toast.error('Something went Wrong')
    } else {
      // imageUploaded()
      const resData = await res.json()
      toast.success('Profile Image Change Successfuly')
      console.log(resData)
    }
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  console.log(image)

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input borderColor='grey' type='file' onChange={handleFileChange} />
        </FormControl>
        <input
          type='submit'
          value="UPLOAD"
        />
      </form>
    </div>
  )
}
