import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  background-color: #007bff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 10px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HelloWorld = () => {
  return (
    <Div>
      <StyledDiv>Hello World</StyledDiv>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
`

export default HelloWorld;
