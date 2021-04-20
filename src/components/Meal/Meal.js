import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import './Meal.scss'

function Meal(props) {
    useEffect( () => { // eslint
        getMeal()
    }, [])

    const [meal, setMeal] = useState([])
    async function getMeal(){
        const get = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.match.params.name}`)
        const meal = get.data.meals[0]
        setMeal(meal)
    }

    const {strMeal, strInstructions, strMealThumb, strSource, strYoutube} = meal

    return (
        <div className='Meal'>
             <div className='Meal__img'>
                <img src={strMealThumb} alt={strMeal}/>
                <h1>
                    {strMeal}
                </h1>
            </div>
            <div className='Meal__body'>
                <h2>{strMeal}</h2>
                <h3>Instruction</h3>
                <p>
                    {strInstructions}
                </p>
                <h3>Youtube Link is here: <a href={strYoutube}>Click here</a></h3>
                <h5>Information about meal: <a href={strSource}>{strMeal}</a></h5>
            </div>
        </div> 
    );
}

export default withRouter(Meal)
