import React, { useContext, useState } from 'react'
import './Search.scss'
import axios from 'axios'
import RecipeList from './RecipeList/RecipeList'
import { AlertContext } from '../../context/alert/AlertContext'


// with hooks 

export default function Search (props) {
    const [recipes, setRecipes] = useState([])
    const [meal, setMeal] = useState('')
    const {show, hide} = useContext(AlertContext)

    function onSubmit (e){
        if(e.key === 'Enter'){
            if(e.target.value.length === 0){
                show(
                    'Write here something to search!!!',
                    null
                )
            }else {
                hide()
            }
        }
    }

    async function searchMealHandle(e){
        e.preventDefault()
        if(meal === ''){
            return setRecipes([])
        }
        const getMeals = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        if(getMeals.data.meals){
            setRecipes(getMeals.data.meals)
        }else {
            show(`I can't find ${meal}`, 'warning')
            setRecipes([])
        }
    }


    return (
        <React.Fragment>
            <form className='Search' onSubmit={searchMealHandle}>
                <input 
                    placeholder='write here name of meal'
                    onChange={e => setMeal(e.target.value)}
                    value={meal}
                    onKeyPress={onSubmit}
                />
                <button
                    onClick={onSubmit}
                >
                    Search
                </button>
            </form>
            <RecipeList recipes={recipes}/>
        </React.Fragment>
    );
}

