import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './navbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Fashion</NavLink>
                <NavIcon onClick = {toggle}>
                    <p>Search</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;
