import React, { useState } from 'react';
import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: ${(props) => (props.active ? 'green' : 'red')};
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: ${(props) => props.bgColor || 'blue'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || 'darkblue'};
  }
`;

const MultipleStates = () => {
    const [state, setState] = useState({
        count: 0,
        text: 'Hello World',
        isactive: true
    });

    const incrementCount = () => {
        setState({ ...state, count: state.count + 1 });
    };

    const changeText = () => {
        setState({ ...state, text: 'Hello World 2' });
    };

    const changeToggle = () => {
        setState({ ...state, isactive: !state.isactive });
    };

    return (
        <Container>
            <Title>Multiple States</Title>
            <Paragraph>Count: {state.count}</Paragraph>
            <Paragraph>Text: {state.text}</Paragraph>
            <Paragraph active={state.isactive}>Active: {state.isactive ? 'Yes' : 'No'}</Paragraph>

            <Button onClick={incrementCount} bgColor="blue" hoverColor="darkblue">+</Button>
            <Button onClick={changeToggle} bgColor="orange" hoverColor="darkorange">Toggle</Button>
            <Button onClick={changeText} bgColor="green" hoverColor="darkgreen">Change Text</Button>
        </Container>
    );
};

export default MultipleStates;
