import React, { useReducer } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 200px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    font-size: 1.5em;
    color: #333;
`;

const Count = styled.p`
    font-size: 1.2em;
    margin: 10px 0;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 7px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`;

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <Container>
            <Title>Counter App</Title>
            <Count>Count: {state.count}</Count>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
            <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
        </Container>
    );
}

export default CounterReducer;
