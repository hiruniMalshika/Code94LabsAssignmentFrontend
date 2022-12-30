import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createProduct} from '../../features/products/productSlice'

function ProductForm() {
  const [productname, setProductName] = useState('')

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(createProduct({productname}))
    setProductName('')
  }
  return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Product Name</label>
                <input type="text" name='text' id='text' value={productname} onChange={(e) => setProductName(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className='btn btn-block' type='submit'>
                    Add Product
                </button>
            </div>
        </form>

    </section>
}

export default ProductForm
