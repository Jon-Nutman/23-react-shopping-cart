import React from "react"
import { useState, useEffect } from "react"

export default function ProductsMap() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data)
        setProducts(data)
      })
  }, [])

  return (
    <div>
      <ul className="list-ul">
        {products.map((product) => (
          <li className="list-li" key={product.id}>
            <div className="freeship-container">
              <div
                className={
                  product.isFreeShipping == true
                    ? "freeshipping-show"
                    : "freeshipping-hide"
                }
              >
                Free Shipping
              </div>
            </div>
            <img src={product.img.normal} />
            <div className='text-and-price'>
            <span>{product.title}</span>
            <span>
              {product.currencyFormat}
              {product.price}
            </span>
            </div>
            <button>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
