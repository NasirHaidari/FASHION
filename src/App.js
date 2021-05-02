import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addproducts' component={AddProducts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
