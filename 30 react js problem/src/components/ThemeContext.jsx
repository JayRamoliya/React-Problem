import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin-top: 30px;
    background-color: ${props => (props.theme ? '#333' : '#f9f9f9')};
    color: ${props => (props.theme ? '#f9f9f9' : '#333')};
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    font-size: 1.2em;
`;

const Checkbox = styled.input`
    margin-right: 10px;
    transform: scale(1.5);
`;

const ThemeContext = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Container theme={theme}>
            <Label>
                <Checkbox type="checkbox" checked={theme} onChange={toggleTheme} />
                Dark Mode
            </Label>
        </Container>
    );
};

export default ThemeContext;
