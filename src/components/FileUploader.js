import React, { useRef } from 'react'

export default FileUploader = ({ onFileSelect }) => {
  // const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    onFileSelect(e.target.fileInput.files[0])

    console.log(onFileSelect(e.target.fileInput.files[0]))

    if (file.size > 1024)
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' })
    else onFileSelectSuccess(file)
  }

  return (
    <div>
      <input type='file' onChange={handleFileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
      ></button>
    </div>
  )
}
