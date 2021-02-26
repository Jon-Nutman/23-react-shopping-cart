import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ProductMapSliceReducer from '../ProductMapFeature/ProductMapSlice'
import logger from 'redux-logger'
export default configureStore({
  reducer: {
    counter: counterReducer,
    // ProductMap : 
    product: ProductMapSliceReducer
  },
});
