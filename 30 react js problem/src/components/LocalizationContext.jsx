import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocalization } from '../context/LocalizationContext';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #666;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LocalizationContext = () => {
  const { setLocal, local, translate } = useLocalization();

  const handellocalchange = (newloc) => {
    setLocal(newloc);
  };

  return (
    <Container>
      <Title>{translate('title')}</Title>
      <Subtitle>{translate('subtitle')}</Subtitle>
      <Button onClick={() => handellocalchange('en')}>English</Button>
      <Button onClick={() => handellocalchange('gj')}>Gujarati</Button>
    </Container>
  );
};

export default LocalizationContext;
