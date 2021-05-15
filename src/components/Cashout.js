import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from '../global/AuthContext'
import { CartContext } from '../global/CartContext'
import { db, auth } from '../firebase/config'
import { useHistory } from 'react-router-dom'

export const Cashout = (props) => {
  const history = useHistory()

  const { shoppingCart, totalPrice, totalQty, dispatch } =
    useContext(CartContext)

  const { currentUser } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!currentUser) {
      history.push('/login')
    }
    shoppingCart.map((item) => {
      console.log(item)
    })
  })

  const cashoutHandle = (e) => {
    e.preventDefault()
    setEmail(currentUser.email)
    console.log(name, email, phone, street, zip, totalQty, totalPrice)
    auth.onAuthStateChanged((user) => {
      if (user) {
        const date = new Date().toLocaleString()

        db.collection('orders')
          .doc(user.uid + date)
          .set({
            Name: name,
            Email: email,
            Phone: phone,
            Street: street,
            Zip: zip,
            City: city,
            Quantity: totalQty,
            Payment: totalPrice,
          })
          .then(() => {
            setName('')
            setPhone('')
            setStreet('')
            setZip('')
            dispatch({ type: 'EMPTY' })
            setSuccessMsg(
              'your order was created successfully! you will get soon a email from us with delivery time. '
            )
            setTimeout(() => {
              history.push('/')
            }, 6000)
          })
          .catch((err) => setError(err.massage))
      }
    })
  }

  return (
    <>
      <div className='container'>
        <br />
        <h2>Cashout Details</h2>
        <br />

        {successMsg && <div className='success-msg'>{successMsg}</div>}
        <form
          autoComplete='off'
          className='form-group'
          onSubmit={cashoutHandle}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            required
            onChange={() => setEmail(currentUser.email)}
            value={email}
          />
          <br />
          <label htmlFor='Phone Number'>Phone Number</label>
          <small> Format: 070 000 00 00</small>
          <input
            type='tel'
            className='form-control'
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder='070 000 00 00'
            minLength={10}
          />
          <br />
          <label htmlFor='Street'>Street</label>
          <input
            type='text'
            className='form-control'
            required
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
          <br />
          <label htmlFor='zip'>ZipCode</label>
          <input
            type='number'
            className='form-control'
            minLength={5}
            onChange={(e) => setZip(e.target.value)}
            value={zip}
          />
          <br />

          <label htmlFor='City'>City</label>
          <input
            type='text'
            className='form-control'
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <br />
          <label htmlFor='Price To Pay'>Price To Pay</label>
          <input
            type='number'
            className='form-control'
            required
            value={totalPrice}
            disabled
          />
          <br />
          <label htmlFor='Total No of Products'>Total No of Products</label>
          <input
            type='number'
            className='form-control'
            required
            value={totalQty}
            disabled
          />
          <br />
          <button type='submit' className='btn btn-success btn-md mybtn'>
            SUBMIT
          </button>
        </form>
        {error && <span className='error-msg'>{error}</span>}
      </div>
    </>
  )
}
