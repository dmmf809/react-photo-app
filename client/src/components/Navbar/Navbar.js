import React from 'react'
import { Nav,
         NavLink,
         StyledTitle, } from './NavbarElements'

const Navbar = () => {
    return(
        <>
            <Nav>
              <StyledTitle>Photo App</StyledTitle>
              <NavLink to="/login">
                Login
              </NavLink>
            </Nav>
        </>

    )
} 

export default Navbar