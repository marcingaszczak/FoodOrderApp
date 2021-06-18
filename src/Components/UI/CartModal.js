import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './CartModal.css';
import CartContext from './../Context/cart-context';
import OrderContext from '../Context/order-context';
import CartItem from '../CartItem/CartItem';

function CartModal() {
    const cartctx = useContext(CartContext)
    const orderCtx = useContext(OrderContext)
    const hasItems = orderCtx.items.length > 0;
    console.log(orderCtx.total_price)
    const Backdrop = () => {
        return  <div className='CartModal_backdrop' onClick={cartctx.handleBackdropCilck}></div>
    }

    const handlePlusClick = (item) => {
        orderCtx.handleAddItemToCart({...item, amount: 1})
    }

    const handleMinusClick = (id) => {
        orderCtx.handleRemoveItemFromCart(id)
    }

    const Modal = () => {
        const mappedCartItem = orderCtx.items.map((item) => (
            <CartItem
                name = {item.name}
                price = {item.price}
                amount = {item.amount}
                handleAdd = {handlePlusClick.bind(null, item)}
                handleMinus = {handleMinusClick.bind(null, item.id)}/>
        ))
        return (
            <div className='CartModal'>
                {mappedCartItem}
                <div className='Modal_Price_Button_Container'>
                    <div className='CartModal_Price_Label'>Total Price:</div>
                    <div className='CartModal_Price'>{Math.round(orderCtx.total_price*100)/100}$</div>
                    <button
                        className='CartModal_Close'
                        onClick={cartctx.handleBackdropCilck}>
                            Close
                    </button>
                    {hasItems && <button
                        className='CartModal_Order'
                        onClick={() => {console.log('Zamówiono!')}}>
                            Order
                    </button>}
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
