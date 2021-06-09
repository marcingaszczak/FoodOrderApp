import React, { useState } from 'react';

const CartContext = React.createContext({
    modal: false,
    handleCartClick: () => {},
    handleBackdropCilck: () => {}
}
)

export const CartContextProvider = (props) => {
    const [modal, setModal] =  useState(false)

    const handleCartClick = () => {
        setModal(true);
    }

    const handleBackdropCilck = () => {
        setModal(false)
    }

    return (
        <CartContext.Provider
            value = {{
                modal: modal,
                handleCartClick: handleCartClick,
                handleBackdropCilck: handleBackdropCilck
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;