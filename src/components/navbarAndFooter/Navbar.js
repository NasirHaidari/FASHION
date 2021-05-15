import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/android-chrome-512x512.png'

import { cart } from 'react-icons-kit/entypo/cart'
import { Icon } from 'react-icons-kit'
import { CartContext } from '../../global/CartContext'

function Navbar() {
  const { totalQty } = useContext(CartContext)

  return (
    <div className='navbar'>
      <div className='left'>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>
      <div className='right'>
        {
          <NavLink to='/cart'>
            <Icon icon={cart} size={30} style={{ color: 'orange' }} />
            <span className='font-weight-bolder text-danger mr-3'>
              {totalQty}{' '}
            </span>
          </NavLink>
        }

        <NavLink to='/signup' className='navLinks btn btn-primary'>
          SignUp
        </NavLink>
        <NavLink to='/login' className='navLinks btn btn-success'>
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
