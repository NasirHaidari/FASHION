import React from 'react'

function AddProducts() {
  const addProducts = () => {
    console.log('addProducts')
  }

  return (
    <div className='container'>
      <br />
      <h2>Add Products</h2>
      <form
        action=''
        autoComplete='off'
        className='form-group'
        onSubmit={addProducts}>
        <label htmlFor='product-name'>Product Name </label>
        <br />
        <input type='text' className='form-control' required />
      </form>
    </div>
  )
}

export default AddProducts
