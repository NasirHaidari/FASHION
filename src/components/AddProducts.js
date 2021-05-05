import React, { useState } from 'react'
import { storage, db } from '../config/config'

function AddProducts() {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productImage, setProductImage] = useState(null)
  const [error, setError] = useState('')

  const types = ['image/png', 'image/jpeg']

  const productImageHandler = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImage(selectedFile)
      setError('')
    } else {
      setProductImage(null)
      setError('please select only images with format png or jpeg')
    }
  }

  const addProducts = (e) => {
    e.preventDefault()
    console.log(productName, productImage, productPrice)
    const uploadTask = storage
      .ref(`product-image/${productImage.name}`)
      .put(productImage)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress)
      },
      (err) => {
        setError(err.message)
      },
      () => {
        storage
          .ref('product-images')
          .child(productImage.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('products')
              .add({
                productName: productName,
                productPrice: Number(productPrice),
                productImage: url,
              })
              .then(() => {
                setProductName('')
                setProductPrice('')
                setProductImage('')
                setError('')
                document.getElementById('file').value = ''
              })
              .catch((err) => setError(err.message))
          })
      }
    )
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
        <input
          type='text'
          className='form-control'
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />

        <label htmlFor='product-price'>Product Price </label>
        <br />
        <input
          type='number'
          className='form-control'
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor='product-img'>Product Image</label>
        <br />
        <input
          type='file'
          onChange={productImageHandler}
          id='file'
          className='form-control'
        />
        <br />
        <button className='btn btn-success btn-md btn-block myBtn'>ADD</button>
      </form>
      {error && <h2 className='alert-danger text-center p-4'>{error}</h2>}
    </div>
  )
}

export default AddProducts
