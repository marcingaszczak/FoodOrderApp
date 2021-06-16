import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './CartModal.css';
import CartContext from './../Context/cart-context';
import OrderContext from '../Context/order-context';
import CartItem from '../CartItem/CartItem';

function CartModal() {

    const cartctx = useContext(CartContext)
    const orderCtx = useContext(OrderContext)
    console.log(orderCtx.items.length)
    const Backdrop = () => {
        return  <div className='CartModal_backdrop' onClick={cartctx.handleBackdropCilck}></div>
    }

    const Modal = () => {
        const mappedCartItem = orderCtx.items.map((item) => (
            <CartItem
                name = {item.name}
                price = {item.price}
                amount = {item.amount}/>
        ))
        return (
            <div className='CartModal'>
                {mappedCartItem}
                <div className='Modal_Price_Button_Container'>
                    <div className='CartModal_Price_Label'>Total Price:</div>
                    <div className='CartModal_Price'>203</div>
                    <button className='CartModal_Close'>Close</button>
                    <button className='CartModal_Order'>Order</button>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop_root'))}
            {ReactDOM.createPortal(<Modal />, document.getElementById('modal_root'))}
        </React.Fragment>
    )
}

export default CartModal
