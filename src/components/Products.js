import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
// import { productContext } from '../global/ProductsContext'
import useProducts from '../hooks/useProducts'
const Products = () => {
  // const { products } = useContext(productContext)
  const products = useProducts()

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='products-container'>
        {products.length < 0 && <div>check your internet connection!!</div>}
        {products &&
          products.map((product) => (
            // <div className='product-card' key={product.id}>
            //   <div className='product-img'>
            //     <img src={product.ProductImage} alt={product.name} />
            //   </div>
            //   <div className='product-name'>{product.ProductName}</div>
            //   <div className='product-price'>kr. {product.ProductPrice}.00</div>
            //   <button className='addcart-btn'>ADD TO CART</button>
            // </div>
            <Col sm={6} md={6} lg={4} key={product.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={product.ProductImage} />
                <Card.Body>
                  <Card.Title>{product.ProductName}</Card.Title>
                  <Card.Text>{product.ProductDescription}</Card.Text>
                  <Button
                    variant='info
              '>
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
