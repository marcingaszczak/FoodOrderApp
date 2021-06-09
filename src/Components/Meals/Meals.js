import React from 'react'
import Meal from './Meal/Meal'
import './Meals.css'

function Meals() {
    return (
        <main className='Meals'>
            <Meal
                name='Sushi'
                price='22.99$'
                desc='Finniest fish ang veggies'/>
            <Meal
                name='Pasta'
                price='16.50$'
                desc='True italian pasta'/>
            <Meal
                name='Green Bowl'
                price='18.00$'
                desc='Health ang green'/>
            <Meal
                name='Dumplings'
                price='12.99$'
                desc='A polish specialty'/>
        </main>
    )
}

export default Meals
