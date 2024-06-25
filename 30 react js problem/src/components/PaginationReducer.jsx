import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOTAL_ITEM':
            return { ...state, totalItem: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};

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

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
`;

const ListItem = styled.li`
    background: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }
`;

const PaginationReducer = () => {
    const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

    const [paginationState, dispatch] = useReducer(paginationReducer, { currentPage: 1, totalItem: data.length });

    useEffect(() => {
        dispatch({ type: 'SET_TOTAL_ITEM', payload: data.length });
    }, [data.length]);

    const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayItems = data.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
    };

    return (
        <Container>
            <Title>Pagination Reducer</Title>
            <List>
                {displayItems.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </List>
            <div>
                <Button
                    onClick={() => handlePageChange(paginationState.currentPage - 1)}
                    disabled={paginationState.currentPage === 1}
                >
                    Previous
                </Button>
                <Button
                    onClick={() => handlePageChange(paginationState.currentPage + 1)}
                    disabled={endIndex >= data.length}
                >
                    Next
                </Button>
            </div>
        </Container>
    );
};

export default PaginationReducer;
