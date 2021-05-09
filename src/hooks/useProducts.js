import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([])
    const unsubscribe = db.collection('products').onSnapshot((snapshot) => {
      let items = []
      snapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setProducts(items)
    })
    return unsubscribe
    // eslint-disable-next-line
  }, [])
  return products
}

export default useProducts
