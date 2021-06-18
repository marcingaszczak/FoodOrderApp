import React from 'react';
import './Input.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <label className='Label' for='amount'> Amount
            <input ref={ref} name='amount' className='Input' type='number' min='1' max='10' defaultValue='1'/>
        </label>
    )
})

export default Input
