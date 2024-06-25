import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
    text-align: center;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 300px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 1.8em;
    color: #333;
`;

const WelcomeMessage = styled.p`
    font-size: 1.2em;
    color: #555;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 10px;
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

const UserContext = () => {
    const { user, login, logout } = useAuth();
    console.log(user);
    return (
        <Container>
            <Title>User Context</Title>
            {
                user ? (
                    <div>
                        <WelcomeMessage>Welcome, {user.username}</WelcomeMessage>
                        <Button onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button onClick={() => login({ username: 'jay' })}>Login</Button>
                )
            }
        </Container>
    );
};

export default UserContext;
