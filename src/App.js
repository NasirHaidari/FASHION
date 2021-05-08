import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import Home from './components/Home'
import { ProductContextProvider } from './global/ProductsContext'

//
//
function App() {
  return (
    <div className='App'>
      <Router>
        <ProductContextProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/addproducts' component={AddProducts} />
          </Switch>
        </ProductContextProvider>
      </Router>
    </div>
  )
}

export default App
