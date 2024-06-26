import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;

    &:checked + span {
        background-color: #4caf50;
    }

    &:checked + span:before {
        transform: translateX(26px);
    }
`;

const Slider = styled.span`
    position: relative;
    width: 50px;
    height: 24px;
    background-color: #ccc;
    border-radius: 34px;
    transition: background-color 0.2s;
    
    &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        left: 4px;
        bottom: 2px;
        background-color: white;
        border-radius: 50%;
        transition: transform 0.2s;
    }
`;

const Status = styled.p`
    font-size: 18px;
    color: ${props => (props.toggle ? 'green' : 'red')};
`;

const ToggleSwitch = () => {
    const [toggle, setToggle] = useState(false);

    const handletoggle = () => {
        setToggle(!toggle);
    };

    return (
        <SwitchContainer>
            <Label>
                <Input type="checkbox" onChange={handletoggle} />
                <Slider />
            </Label>
            <Status toggle={toggle}>{toggle ? 'On' : 'Off'}</Status>
        </SwitchContainer>
    );
};

export default ToggleSwitch;
