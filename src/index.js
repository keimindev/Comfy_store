import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/productsContext'
import { FilterProvider } from './context/filterContext'
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
    domain="dev-6w74uhrd.us.auth0.com"
    clientId="cTJwF0Gimh9ffV4HG98Kt5WzJAIV2Nhi"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <AuthProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </AuthProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
