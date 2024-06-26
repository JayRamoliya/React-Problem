import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [time]);

    return (
        <Container>
            <TimerDisplay>Timer: {time}</TimerDisplay>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #f0f0f0;
`;

const TimerDisplay = styled.h1`
    font-size: 48px;
    color: #333;
    margin: 0;
`;

export default Timer;
