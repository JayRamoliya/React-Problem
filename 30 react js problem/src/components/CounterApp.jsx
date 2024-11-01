import React, { useState } from 'react';
import styled from 'styled-components';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Div>
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <CountDisplay>{count}</CountDisplay>
                <Button onClick={() => setCount(count + 1)}>+</Button>
            </Div>
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

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
`
export default CounterApp;
