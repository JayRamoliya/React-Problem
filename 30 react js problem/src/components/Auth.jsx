import React, { useState } from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    font-family: Arial, sans-serif;
`;

const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const AuthInput = styled.input`
    padding: 10px;
    margin: 5px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        border-color: #1e90ff;
        outline: none;
    }
`;

const AuthButton = styled.button`
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #1c86ee;
    }
`;

const AuthHeading = styled.h2`
    margin-top: 10px;
`;

const AuthMessage = styled.p`
    margin-top: 10px;
`;

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isregistered, setIsRegistered] = useState(false);
    const [islogined, setIsLogined] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAuth = () => {
        if (isregistered) {
            // login logic
            console.log('login');
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                setIsLogined(true);
            } else {
                alert('Invalid email or password');
            }
        } else {
            // register logic
            console.log('register');
            const newuser = { email, password };
            setUsers([...users, newuser]);
            localStorage.setItem('user', JSON.stringify([...users, newuser]));
            setIsLogined(true);
        }
    };

    const handleLogout = () => {
        setIsLogined(false);
        setEmail('');
        setPassword('');
    };

    return (
        <AuthContainer>
            {islogined ? (
                <div>
                    <AuthHeading>Welcome {email}</AuthHeading>
                    <AuthButton onClick={handleLogout}>Logout</AuthButton>
                </div>
            ) : (
                <div>
                    <AuthHeading>{isregistered ? 'Login' : 'Register'}</AuthHeading>
                    <AuthForm>
                        <AuthInput
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <AuthInput
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <AuthButton onClick={handleAuth}>
                            {isregistered ? 'Login' : 'Register'}
                        </AuthButton>
                    </AuthForm>
                    <AuthMessage>
                        {isregistered ? 'Register Now' : 'Log in'}
                    </AuthMessage>
                    <AuthButton onClick={() => setIsRegistered(!isregistered)}>
                        {isregistered ? 'Go To Register Page' : 'Go To Login Page'}
                    </AuthButton>
                </div>
            )}
        </AuthContainer>
    );
};

export default Auth;
