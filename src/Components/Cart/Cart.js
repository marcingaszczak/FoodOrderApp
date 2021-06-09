import React, { useContext } from 'react';
import './Cart.css';
import './fontello.css'
import CartContext from './../Context/cart-context';

function Cart() {

    const ctx = useContext(CartContext)

    return (
        <button className='cart' onClick={ctx.handleCartClick}>
            <i class="icon-basket"></i>
            Your Cart
            <div className='number'>
                0
            </div>
        </button>
    )
}

export default Cart
