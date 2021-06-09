import React from 'react';
import Form from './Form/Form';
import './Meal.css';

function Meal(props) {
    return (
        <div className='Meal'>
            <div>
                <h2 className='Name'>{props.name}</h2>
                <p className='Desc'>{props.desc}</p>
                <h3 className='Price'>{props.price}</h3>
            </div>
            <Form />
        </div>
    )
}

export default Meal
