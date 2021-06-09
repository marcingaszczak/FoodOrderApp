import React, { useContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import Meals from './Components/Meals/Meals';
import CartModal from './Components/UI/CartModal';
import CartContext from './Components/Context/cart-context';

function App() {

  const cartctx = useContext(CartContext)

  return (
    <React.Fragment>
      <div id='backdrop_root'></div>
      <div id='modal_root'></div>
      <div className='Container'>
      <Header/>
      <Info />
      <Meals />
    </div>
    {cartctx.modal && <CartModal/>}
    </React.Fragment>

  );
}

export default App;
