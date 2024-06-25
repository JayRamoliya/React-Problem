import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  background-color: #007bff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HelloWorld = () => {
  return (
    <StyledDiv>Hello World</StyledDiv>
  )
}

export default HelloWorld;
