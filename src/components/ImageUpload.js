import { useState, useRef } from 'react'
import { API_URL } from '@/lib/index'
import { FormControl, Input } from '@chakra-ui/react'
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ImageUpload({ imageUploaded }) {
  const [image, setImage] = useState(null)
  const fileInput = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    

    console.log(formData.append('file', image,  "[PROXY]"))
  }

  const handleFileChange = (e) => {
    setImage(e.target.fileInput.files[0])

    // if (file.size > 1024)
    //   onFileSelectError({ error: 'File size cannot exceed more than 1MB' })
    // else onFileSelectSuccess(file)
  }

  console.log(image)

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input borderColor='grey' type='file' onChange={handleFileChange} />
        </FormControl>
        <input type="submit" value="UPLOAD" onClick={(e) => fileInput.current && fileInput.current.click()} />
      </form>
    </div>
  )
}
