import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/android-chrome-512x512.png'
import { useAuth } from '../../global/AuthContext'
import { Button } from 'react-bootstrap'
import { cart } from 'react-icons-kit/entypo/cart'
import { Icon } from 'react-icons-kit'

function Navbar() {
  const { loading, setLoading } = useState(false)
  const { currentUser, logout } = useAuth()

  return (
    <div className='navbar'>
      <div className='left'>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>
      <div className='right'>
        {currentUser && (
          <h5>
            you are logged in as:{'  '}
            <span className='font-weight-lighter m-2 p-2'>
              {currentUser.email}
            </span>
          </h5>
        )}
        {currentUser && (
          <NavLink to='/'>
            <Icon icon={cart} />
          </NavLink>
        )}
        {!currentUser && (
          <NavLink to='/signup' className='navLinks'>
            Sign Up
          </NavLink>
        )}

        {/* Show the Button if user is logged in */}

        {currentUser ? (
          <Button onClick={() => logout()}>Logout</Button>
        ) : (
          <NavLink to='/login' className='navLinks'>
            Login
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
