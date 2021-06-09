import React from 'react';
import './Input.css';

function Input() {
    return (
        <label className='Label' for='amount'> Amount
            <input name='amount' className='Input'/>
        </label>
    )
}

export default Input
