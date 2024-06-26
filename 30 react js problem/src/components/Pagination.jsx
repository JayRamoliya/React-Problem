import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const ItemList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 300px;
    margin-bottom: 20px;
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

const PaginationButtons = styled.div`
    display: flex;
    gap: 5px;
`;

const PageButton = styled.button`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #1e90ff;
        color: white;
        border-color: #1e90ff;
    }
    &.active {
        background-color: #1e90ff;
        color: white;
        border-color: #1e90ff;
    }
`;

const Pagination = ({ items, itemparpage }) => {
    const [currentpage, setCurrentpage] = useState(1);

    const indexoflastitem = currentpage * itemparpage;
    const indexoffirstitem = indexoflastitem - itemparpage;

    const currentitems = items.slice(indexoffirstitem, indexoflastitem);

    const pagenumber = [];
    for (let i = 1; i <= Math.ceil(items.length / itemparpage); i++) {
        pagenumber.push(i);
    }

    return (
        <PaginationContainer>
            <ItemList>
                {currentitems.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                ))}
            </ItemList>
            <PaginationButtons>
                {pagenumber.map((num, i) => (
                    <PageButton
                        key={i}
                        onClick={() => setCurrentpage(num)}
                        className={currentpage === num ? 'active' : ''}
                    >
                        {num}
                    </PageButton>
                ))}
            </PaginationButtons>
        </PaginationContainer>
    );
};

export default Pagination;
