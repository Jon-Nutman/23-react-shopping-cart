import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ProductMapSliceReducer from '../ProductMapFeature/ProductMapSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    // ProductMap : 
    product: ProductMapSliceReducer
  },
});
