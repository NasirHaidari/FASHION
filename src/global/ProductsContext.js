import React, { useState, createContext, useEffect } from 'react'
import { db } from '../firebase/config'

export const productContext = createContext()

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      let items = []
      snapshot.forEach((doc) => {
        items.push({
          ...doc.data(),
        })
        setProducts(items)
      })

      console.log(products)
    })
    return
    // eslint-disable-next-line
  }, [])
  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  )
}
