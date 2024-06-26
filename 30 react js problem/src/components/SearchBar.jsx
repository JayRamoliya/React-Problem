import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 16px;
    &:focus {
        border-color: #1e90ff;
        outline: none;
    }
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 300px;
`;

const ListItem = styled.li`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #f9f9f9;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const SearchBar = ({ items }) => {
    console.log(items);
    const [search, setSearch] = useState('');

    const filteredItems = items.filter((item) => {
        return item.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <SearchBarContainer>
            <Input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <List>
                {filteredItems.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                ))}
            </List>
        </SearchBarContainer>
    );
};

export default SearchBar;
