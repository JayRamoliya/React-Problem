import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import MultipleStates from './MultipleStates';
import ImageGallery from './ImageGallery';

const Container = styled.div`
    text-align: center;
`;

const Nav = styled.nav`
    background-color: #333;
    padding: 10px 0;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    margin: 0 15px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.2em;

    &:hover {
        text-decoration: underline;
    }
`;

const RoutePages = () => {
    return (
        <BrowserRouter>
            <Container>
                <Nav>
                    <NavList>
                        <NavItem>
                            <NavLink to="/multiplestates">Multiple States</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/imagegallery">Image Gallery</NavLink>
                        </NavItem>
                    </NavList>
                </Nav>
                <Routes>
                    <Route path="/multiplestates" element={<MultipleStates />} />
                    <Route path="/imagegallery" element={<ImageGallery />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default RoutePages;
