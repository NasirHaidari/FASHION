import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function NavAndFooter({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default NavAndFooter
