import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/android-chrome-512x512.png'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src={logo} alt='logo' />
      </div>
      <div className='right'>
        <NavLink to='/signup' className='navLinks'>
          Sign Up
        </NavLink>
        <NavLink to='/login' className='navLinks'>
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
