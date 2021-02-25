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
          <span onClick={() => dispatch(addToCart(product))}>
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
            <div className='product-dash'>

            </div>
            <span>
              {product.currencyFormat}
              {product.price}
            </span>
            <span className='product-installments'>
             or {product.installments} x ${Math.round((product.price/product.installments)*100)/100}
            </span>

            </div>
            <button >Add To Cart</button>
          </li>
          </span>
        ))}
      </ul>
    </div>
  )
}
