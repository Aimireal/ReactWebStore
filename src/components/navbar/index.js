import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './navbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Fashion</NavLink>
                <NavIcon>
                    <p>Basket</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;
