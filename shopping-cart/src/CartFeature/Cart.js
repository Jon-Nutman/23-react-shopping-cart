import React from "react"
import { useState, useEffect } from "react"
import styles from './Cart.module.css'


export default function addToCart(){
  
  console.log('hello')
    return(
     <div className={styles.cart}>
        <ul className={styles.ul}>
            <li >
                cart
            </li>
        </ul>
     </div>
    )
}