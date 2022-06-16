import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const Navbar = () => {

    // IsActive is set to be true if the link is Indeed the correct route 


    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth()

  return (
    <nav className='primary-nav'>
       <NavLink 
          style={navLinkStyles} 
          to="/">
          Home
        </NavLink>
       &nbsp;&nbsp;
       <NavLink 
          style={navLinkStyles} 
          to="/about">
           About
        </NavLink>
        &nbsp;&nbsp;
        <NavLink 
          style={navLinkStyles} 
          to="/products">
           Products
        </NavLink>
        &nbsp;&nbsp;
        <NavLink 
          style={navLinkStyles} 
          to="/profile">
           Profile
        </NavLink>
        &nbsp;&nbsp;
        {
          !auth.user && (
            <NavLink 
              style={navLinkStyles} 
              to="/login">
              Login
            </NavLink>
          ) 
        }
    </nav>
  )
}

export default Navbar

