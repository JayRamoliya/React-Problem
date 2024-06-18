import React, { useState } from 'react'

const FileUploader = () => {
    const [file, setFile] = useState(null)


    return (
        <>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} accept='image/*' />
        <br />
        {file && <img src={URL.createObjectURL(file)} width='100px'/>}
        </>
    )
}

export default FileUploader