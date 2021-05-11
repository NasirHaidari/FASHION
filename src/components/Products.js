import React, { useContext } from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { CartContext } from '../global/CartContext'

// import { productContext } from '../global/ProductsContext'
import useProducts from '../hooks/useProducts'
const Products = () => {
  const products = useProducts()
  // const data = useContext(CartContext)

  // console.log(data)

  const { dispatch } = useContext(CartContext)

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='products-container'>
        {products.length < 0 && <div>check your internet connection!!</div>}
        {products &&
          products.map((product) => (
            <Col className='m-1' xs={12} sm={6} md={4} lg={4} key={product.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={product.ProductImage} />
                <Card.Body>
                  <Card.Title>{product.ProductName}</Card.Title>
                  <Card.Text>{product.ProductDescription}</Card.Text>
                  <Card.Text className=''>
                    {' '}
                    Price :
                    <span className='OldPrice'>
                      {product.ProductPrice * 1.3} Kr{' '}
                    </span>
                  </Card.Text>
                  <Card.Text className='text-danger bold'>
                    {' '}
                    <span className='font-weight-bolder'>
                      {' '}
                      30% of Price: {product.ProductPrice} Kr.
                    </span>
                  </Card.Text>
                  <Card.Text className='text-danger bold'> </Card.Text>
                  <Button
                    variant='info
              '
                    onClick={() => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        id: product.id,
                        product,
                      })
                    }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
    </>
  )
}

export default Products
