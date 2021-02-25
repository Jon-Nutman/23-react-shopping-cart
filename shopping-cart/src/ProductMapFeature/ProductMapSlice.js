import { createSlice, current } from "@reduxjs/toolkit"

export const ProductMapSlice = createSlice({
  name: "productMap",
  initialState: {
    products: [],

    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    addToCart: (state, action) => {
      const incomingProduct = { ...action.payload, quantity: 1 }
      const isInCart = state.cart.find(
        (product) => product.id === incomingProduct.id
      )
      console.log()

      if (!isInCart) {
        state.cart.push(incomingProduct)
      } else {
        const cartIndex = state.cart.findIndex(
          (product) => product.id === incomingProduct.id
        )
        state.cart[cartIndex].quantity++
      }
    },
  },
})

export const { setProducts, addToCart } = ProductMapSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:3001/products")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log("data", data)
      dispatch(setProducts(data))
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProductMap = (state) => state.product.products

export const selectCart = (state) => state.product.cart

export default ProductMapSlice.reducer
