import React from 'react';
import './Input.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <label className='Label' for='amount'> Amount
            <input ref={ref} name='amount' className='Input' type='number'/>
        </label>
    )
})

export default Input
