import React from "react"
import { useState, useEffect } from "react"
import styles from "./Cart.module.css"
import { useSelector, useDispatch } from "react-redux"
import { selectCart, fetchProducts } from "../ProductMapFeature/ProductMapSlice"

export default function DisplayCart() {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    
   }, [])

  // console.log(cart)
  return (
    <div className={styles.cart}>
      <ul className={styles.ul}>
        {cart.map((product) => (
          <li className={styles.li}>
            <span><img src={product.img.thumb} alt='not found' /></span>
            <div className={styles.title}>
            <span>{product.title}</span>
            <span>{product.availableSizes[0]} | {product.style}</span>
            </div>
            <div className={styles.price}>
            <span>
              {product.currencyFormat}
              {product.price}
            </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
