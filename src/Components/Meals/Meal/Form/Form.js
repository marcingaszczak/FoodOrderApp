import React from 'react';
import './Form.css';
import Input from './Input/Input'

function Form() {
    return (
        <div className='Form'>
            <Input />
            <button className='Form_button'>+Add</button>
        </div>
    )
}

export default Form
