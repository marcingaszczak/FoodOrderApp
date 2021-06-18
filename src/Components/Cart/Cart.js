import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import './fontello.css'
import CartContext from './../Context/cart-context';
import OrderContext from './../Context/order-context';

function Cart() {
    const [bump, setBump] = useState(false);
    const ctx = useContext(CartContext);
    const orderCtx = useContext(OrderContext);
    useEffect(() => {
        if(orderCtx.items.length === 0) {
            return;
        }
        setBump(true)

        const timer = setTimeout(() => {
            setBump(false)
        }, 300)

        return (() => {
            clearTimeout(timer)
        })
    }, [orderCtx.items])
    const buttonClassNames = `cart ${bump ? 'cart_bump' : ''}`
    return (
        <button className={buttonClassNames} onClick={ctx.handleCartClick}>
            <i class="icon-basket"></i>
                Your Cart
            <div className='number'>
                {orderCtx.total_amount}
            </div>
        </button>
    )
}

export default Cart
