import React, { useState } from 'react';
import styled from 'styled-components';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <CountDisplay>{count}</CountDisplay>
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </>
    );
};

const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    &:hover {
        background-color: #45a049;
    }
`;

const CountDisplay = styled.span`
    font-size: 24px;
    margin: 0 15px;
`;

export default CounterApp;
