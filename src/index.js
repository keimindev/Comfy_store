import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './firebase';
import { ProductsProvider } from './context/productsContext'
import { FilterProvider } from './context/filterContext'
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
console.log(firebase)

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
