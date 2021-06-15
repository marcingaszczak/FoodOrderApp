import React, { useContext } from 'react';
import Form from './Form/Form';
import './Meal.css';
import OrderContext from './../../Context/order-context';

function Meal(props) {

    const orderctx = useContext(OrderContext);
        const submitHandler = (data) => {
            orderctx.handleAddItemToCart({
                amount: data,
                key: props.id,
                id: props.id,
                name: props.name,
                price: props.price
            })
        }

    return (
        <div className='Meal'>
            <div>
                <h2 className='Name'>{props.name}</h2>
                <p className='Desc'>{props.desc}</p>
                <h3 className='Price'>{props.price}</h3>
            </div>
            <Form submitHandler={submitHandler}/>
        </div>
    )
}

export default Meal
