import React from "react"
import { useState, useEffect } from "react"
import {fetchProducts, addToCart} from './ProductMapSlice'
import {selectProductMap} from './ProductMapSlice'
import {useSelector, useDispatch} from 'react-redux'
// import addToCart from '../CartFeature/Cart.js'

export default function ProductsMap() {
  const products = useSelector(selectProductMap)
  const dispatch = useDispatch([])
  // const [products, setProducts] = useState([])
  useEffect(() => {
   dispatch(fetchProducts())
   
  }, [])

  return (
    <div>
      <ul className="list-ul">
        {products.map((product) => (
          <li className="list-li" key={product.id}>
            <div className="freeship-container">
              <div
                className={
                  product.isFreeShipping === true
                    ? "freeshipping-show"
                    : "freeshipping-hide"
                }
              >
                Free Shipping
              </div>
            </div>
            <img src={product.img.normal} alt='not found' />
            <div className='text-and-price'>
            <span>{product.title}</span>
            <span>
              {product.currencyFormat}
              {product.price}
            </span>
            </div>
            <button onClick={() => dispatch(addToCart(product))} >Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
