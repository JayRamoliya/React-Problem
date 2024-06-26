import React from 'react';
import styled from 'styled-components';

const ItemList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 300px;
    margin: 0 auto;
`;

const ListItem = styled.li`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #f9f9f9;
    text-align: center;
    &:hover {
        background-color: #f1f1f1;
    }
`;

const ListItems = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    return (
        <ItemList>
            {items.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
            ))}
        </ItemList>
    );
};

export default ListItems;
