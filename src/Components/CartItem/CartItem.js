import React from 'react'

function CartItem(props) {
    alert('działam')
    return (
        <div>
            {props.name}
            {props.price}
            {props.amount}
        </div>
    )
}

export default CartItem
