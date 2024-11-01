import React, { useState } from 'react';
import styled from 'styled-components';

const FormInput = () => {
    const [live, setLive] = useState('');

    return (
        <Div>
            <FormContainer>
                <StyledInput
                    type="text"
                    value={live}
                    onChange={(e) => setLive(e.target.value)}
                    placeholder="Type here..."
                />
                <OutputText>User Input: {live}</OutputText>
            </FormContainer>
        </Div>
    );
};

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 20px auto;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const OutputText = styled.p`
    font-size: 18px;
    color: #333;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
`

export default FormInput;
