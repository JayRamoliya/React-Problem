import React, { useState } from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: #333;
    &:hover {
        color: #1e90ff;
    }
`;

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
    transition: max-height 0.3s ease-out;
    max-height: 0;
    overflow: hidden;
    &.open {
        max-height: 200px; /* Adjust height as needed */
    }
`;

const MenuItem = styled.li`
    padding: 10px;
`;

const NavigationMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <MenuButton className='menu-icon' onClick={toggleMenu}>
                =
            </MenuButton>
            <MenuList className={`menu ${open ? 'open' : ''}`}>
                <MenuItem>
                    <a href='#'>Home</a>
                </MenuItem>
                <MenuItem>
                    <a href='#'>About</a>
                </MenuItem>
                <MenuItem>
                    <a href='#'>Contact</a>
                </MenuItem>
            </MenuList>
        </div>
    );
};

export default NavigationMenu;
