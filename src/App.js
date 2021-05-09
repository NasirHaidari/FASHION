import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import Home from './components/Home'
import SignUp from './components/user/Signup'
import Login from './components/user/Login'

import NavAndFooter from './components/navbarAndFooter/NavAndFooter'
import AuthProvider from './global/AuthContext'
//
//
function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Switch>
            <NavAndFooter>
              <Route exact path='/' component={Home} />
              <Route path='/addproducts' component={AddProducts} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />
            </NavAndFooter>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
