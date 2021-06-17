import React, { useRef } from 'react';
import './Form.css';
import Input from './Input/Input'


function Form(props) {


    const amountInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputVal = amountInputRef.current.value;
        const inputValNumber = +inputVal;
        props.submitHandler(inputValNumber);
    }

    return (
        <form className='Form'>
            <Input
            ref={amountInputRef}/>
            <button className='Form_button' onClick={handleSubmit}>+Add</button>
        </form>
    )
}

export default Form
