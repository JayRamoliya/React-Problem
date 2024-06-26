import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FetchesAPI = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Container>
            {
                data ? (
                    <UserList>
                        {data.map((item) => (
                            <UserCard key={item.id}>
                                <UserName>{item.name}</UserName>
                                <UserEmail>{item.email}</UserEmail>
                            </UserCard>
                        ))}
                    </UserList>
                ) : (
                    <Loading>Loading...</Loading>
                )
            }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const UserCard = styled.div`
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h2`
    font-size: 20px;
    margin: 0;
`;

const UserEmail = styled.p`
    font-size: 16px;
    color: #555;
    margin: 5px 0 0;
`;

const Loading = styled.p`
    font-size: 18px;
    color: #888;
`;

export default FetchesAPI;
