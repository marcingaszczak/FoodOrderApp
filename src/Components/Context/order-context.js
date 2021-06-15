import React, { useReducer } from 'react';

const OrderContext = React.createContext({
    items: [],
    total_amount: 0,
    handleAddItemToCart: () => {}
}
)


const orderReducer =  (state, action) => {
    if(action.type === 'ADD') {

        const newItem = state.items.concat(action.item);
        const newTotalAmount = state.total_amount += action.item.amount
        console.log(newItem)
        return {
            items: newItem,
            total_amount:newTotalAmount
        }
    }
}

export const OrderContextProvider = (props) => {



    const [order, dispatchOrder] = useReducer(orderReducer, {
        items: [],
        total_amount: 0,
        handleAddItemToCart: () => {}
    })

    const handleAddItemToCart = (item) => {
        switch(item.name) {
            case 'Sushi':
                dispatchOrder({type: 'ADD', item: item})
            break;
        }

    }

    return (
        <OrderContext.Provider
            value = {{
                items: order.items,
                total_amount: order.total_amount,
                handleAddItemToCart: handleAddItemToCart
            }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderContext;