import React, { useState } from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
`;

const QuoteText = styled.p`
    margin-bottom: 20px;
    font-style: italic;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #1c86ee;
    }
`;

const Quote = () => {
    const [quote, setQuote] = useState('');

    const quotes = [
        '“Stay hungry, stay foolish” - Steve Jobs',
        '“The most effective and inspiring quotes are the shortest.”',
        '“The best way to predict your future is to create it.” - Abraham Lincoln',
        '“The biggest risk is not taking any risk.” - Mark Zuckerberg',
        '“The only way to do great work is to love what you do.” - Steve Jobs',
        '“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill',
        '“Do not watch the clock; do what it does. Keep going.”',
        '“The biggest adventure you can take is to live the life of your dreams.” - Oprah',
    ];

    const changequote = () => {
        const randomquote = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomquote]);
    };

    return (
        <QuoteContainer>
            <QuoteText>{quote}</QuoteText>
            <Button onClick={changequote}>Click</Button>
        </QuoteContainer>
    );
};

export default Quote;
