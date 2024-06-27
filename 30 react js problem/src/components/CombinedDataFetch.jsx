import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  text-align: center;
  color: #333;
`;

const SubHeading = styled.h2`
  margin-top: 20px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
`;

const CombinedDataFetch = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => setData1(res.data))
      .catch(err => { console.log(err); });

    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(res => setData2(res.data))
      .catch(err => { console.log(err); });
  }, []);

  return (
    <Container>
      <Heading>Combined Data Fetch</Heading>
      <SubHeading>Post 1</SubHeading>
      <Paragraph>{data1.title}</Paragraph>
      <Paragraph>{data1.body}</Paragraph>
      <SubHeading>Post 2</SubHeading>
      <Paragraph>{data2.title}</Paragraph>
      <Paragraph>{data2.body}</Paragraph>
    </Container>
  );
}

export default CombinedDataFetch;
