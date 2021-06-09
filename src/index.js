import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './Components/Context/cart-context';

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById('root')
);