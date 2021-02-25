import React from 'react';
import './App.css';
import ProductsMap from './ProductMapFeature/ProductsMap'
import Cart from './CartFeature/Cart'
function App() {
  return (
    <div className='container'>
   <ProductsMap></ProductsMap>
   <Cart></Cart>
    </div>
  );
}

export default App;
