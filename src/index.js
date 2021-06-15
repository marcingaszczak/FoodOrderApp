import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './Components/Context/cart-context';
import { OrderContextProvider } from './Components/Context/order-context';

ReactDOM.render(
  <OrderContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </OrderContextProvider>
  ,
  document.getElementById('root')
);