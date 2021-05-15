import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

const useOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders([])
    const unsubscribe = db.collection('orders').onSnapshot((snapshot) => {
      let items = []
      snapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setOrders(items)
    })
    return unsubscribe
    // eslint-disable-next-line
  }, [])
  return orders
}

export default useOrders
