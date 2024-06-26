import React, { useState } from 'react';
import styled from 'styled-components';

const FileUploaderContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const FileInput = styled.input`
    display: none;
`;

const FileInputLabel = styled.label`
    display: inline-block;
    padding: 10px 20px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #1c86ee;
    }
`;

const UploadedImage = styled.img`
    display: block;
    margin-top: 20px;
    max-width: 100px;
    height: auto;
`;

const FileUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <FileUploaderContainer>
            <FileInput
                type="file"
                id="file"
                onChange={handleFileChange}
                accept="image/*"
            />
            <FileInputLabel htmlFor="file">Choose Image</FileInputLabel>
            <br />
            {file && <UploadedImage src={URL.createObjectURL(file)} />}
        </FileUploaderContainer>
    );
};

export default FileUploader;
