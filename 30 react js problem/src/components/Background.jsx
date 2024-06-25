import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.color};
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.color === 'red' ? 'darkred' : 'darkgreen')};
    }
`;

const Background = () => {
    const [color, setColor] = useState('white');

    const handleClick = () => {
        const newColor = color === 'white' ? 'red' : 'green';
        setColor(newColor);
    };

    return (
        <StyledDiv color={color} onClick={handleClick}>
            Click me to change color
        </StyledDiv>
    );
};

export default Background;
