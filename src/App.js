import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import Home from './components/Home'
import SignUp from './components/user/Signup'
import Login from './components/user/Login'

import NavAndFooter from './components/navbarAndFooter/NavAndFooter'
import AuthProvider from './global/AuthContext'
import CartContextProvider from './global/CartContext'
import Cart from './components/Cart'
import { Cashout } from './components/Cashout'
import Orders from './components/Orders'

//
//
function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <CartContextProvider>
            <Switch>
              <NavAndFooter>
                <Route exact path='/' component={Home} />
                <Route exact path='/addproducts' component={AddProducts} />
                <Route path='/signup' component={SignUp} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/cashout' component={Cashout} />
                <Route exact path='/orders' component={Orders} />
              </NavAndFooter>
            </Switch>
          </CartContextProvider>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
