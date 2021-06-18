import React, { useReducer } from 'react';

const OrderContext = React.createContext({
    items: [],
    total_price: 0,
    total_amount: 0,
    handleAddItemToCart: () => {},
    handleRemoveItemFromCart: () => {}
}
)


const orderReducer =  (state, action) => {
    if(action.type === 'ADD') {
        const newTotalPrice = state.total_price += action.item.amount * +action.item.price;
        const newTotalAmount = state.total_amount += action.item.amount;
        let newItems = [];
        let newItem = {};
        const itemID = state.items.findIndex(item => {
            return item.id === action.item.id
        })
        const firstItem = state.items[itemID]

        if(firstItem) {
            newItem = {...firstItem,
            amount: firstItem.amount + action.item.amount}
            newItems = [...state.items];
            newItems[itemID] = newItem
        } else {
            newItems = state.items.concat(action.item);
        }
        console.log(newItems)
        return {
            items: newItems,
            total_amount:newTotalAmount,
            total_price: newTotalPrice
        }
    }
    if(action.type === 'REMOVE') {
        const itemID = state.items.findIndex(item => {
            return action.id === item.id
        })
        const clickedItem = state.items[itemID];
        const updatedTotalPrice = state.total_price - clickedItem.price;
        const newTotalAmount = state.total_amount - 1;
        if(clickedItem.amount === 1) {
            const newItems = state.items.filter(item => { return item.id !== action.id });
            return ({
                total_price: updatedTotalPrice,
                items: newItems,
                total_amount: newTotalAmount
            })
        }else {
            const newItem = {...clickedItem, amount: clickedItem.amount -1}
            console.log(newItem)
            const newItems = [...state.items]
            newItems[itemID] = newItem;
            return {
                total_price: updatedTotalPrice,
                items: newItems,
                total_amount: newTotalAmount
            }
        }

    }
}

export const OrderContextProvider = (props) => {



    const [order, dispatchOrder] = useReducer(orderReducer, {
        items: [],
        total_price: 0,
        total_amount: 0,
        handleAddItemToCart: () => {},
        handleRemoveItemFromCart: () => {}
    })

    const handleAddItemToCart = (item) => {
        dispatchOrder({type: 'ADD', item: item})
    }

    const handleRemoveItemFromCart = (id) => {
        dispatchOrder({type: 'REMOVE', id: id})
    }

    return (
        <OrderContext.Provider
            value = {{
                items: order.items,
                total_price: order.total_price,
                total_amount: order.total_amount,
                handleAddItemToCart: handleAddItemToCart,
                handleRemoveItemFromCart: handleRemoveItemFromCart
            }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderContext;