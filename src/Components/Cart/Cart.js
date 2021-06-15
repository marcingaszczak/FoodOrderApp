import React, { useContext } from 'react';
import './Cart.css';
import './fontello.css'
import CartContext from './../Context/cart-context';
import OrderContext from './../Context/order-context';

function Cart() {

    const ctx = useContext(CartContext)
    const orderCtx = useContext(OrderContext);
    return (
        <button className='cart' onClick={ctx.handleCartClick}>
            <i class="icon-basket"></i>
                Your Cart
            <div className='number'>
                {orderCtx.total_amount}
            </div>
        </button>
    )
}

export default Cart
