import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../global/AuthContext'

import useOrders from '../hooks/useOrders'
const Orders = () => {
  const orders = useOrders()
  const history = useHistory()
  const { currentUser } = useAuth()
  console.log(orders)
  useEffect(() => {
    if (!currentUser) {
      history.push('/')
    } else if (currentUser.uid !== process.env.REACT_APP_ADMIN_ID) {
      history.push('/')
    }
  })

  return (
    <>
      {orders &&
        orders.map((Order) => (
          <div className='order card m-2' key={Order.id}>
            <p className='alert-success'>Name:{Order.Name}</p>
            <div className='alert-danger'>Phone: {Order.Phone}</div>
            <div className='alert-info'>Email: {Order.Email}</div>
            <div className='alert-danger'>Phone: {Order.Phone}</div>
            <div className='alert-primary'>
              order Number: {''}
              {Order.id}
              <div></div>
              {/* {Order.order.map((Article, index) => (
                <div key={index} className='article'>
                  <p>Article Name:{Article.ProductName}</p>
                  <p>Article Number:{Article.ArticleNumber}</p>
                  <p>Article Price:{Article.ProductPrice}</p>
                  <p>Article Quantity:{Article.qty}</p>
                  <p>Article Quantity:{Article.TotalProductPrices}</p>
                </div>
              ))} */}
            </div>
          </div>
        ))}
    </>
  )
}
export default Orders
