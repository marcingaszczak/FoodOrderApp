import React from 'react'
import Meal from './Meal/Meal'
import './Meals.css';
import MENU from './../Menu/Menu';

function Meals() {
    return (
        <main className='Meals'>
            {MENU.map(meal => {
                return(
                    <Meal
                        key = {meal.id}
                        id = {meal.id}
                        name = {meal.name}
                        desc = {meal.desc}
                        price = {meal.price} />
                )
            })}
        </main>
    )
}

export default Meals
