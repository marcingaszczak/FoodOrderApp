import React from 'react';
import './CartItem.css';

function CartItem(props) {
    return (
        <div className='CartItem_Container'>
            <div className='CartItem_Name'>{props.name}</div>
            <div className='CartItem_Price'>{props.price}$</div>
            <div className='CartItem_Amount'>x{props.amount}</div>
            <div className='CartItem_Minus'>-</div>
            <div className='CartItem_Plus'>+</div>
        </div>
    )
}

export default CartItem
