import React from 'react';
import Cart from '../Cart/Cart';
import './Header.css'
import Food from './../../Img/meals.jpg'

function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                ReactMeals
                <Cart />
            </header>
            <div className='main_image'>
                <img src={Food} alt='Table full of food' />
            </div>
        </React.Fragment>
    )
}

export default Header
