import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './CartModal.css';
import CartContext from './../Context/cart-context';

function CartModal() {

    const cartctx = useContext(CartContext)

    const Backdrop = () => {
        return  <div className='CartModal_backdrop' onClick={cartctx.handleBackdropCilck}></div>
    }

    const Modal = () => {
        return (
            <div className='CartModal'>
                dummy content
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
