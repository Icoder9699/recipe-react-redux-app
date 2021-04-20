import React from 'react'
import Recipe from './RecipeItem/RecipeItem'
import './RecipeList.scss'

export default function RecipeList(props) {
    return (
        <div className='RecipeList'>
            {props.recipes ? props.recipes.map((recipe, index) => {
                return (
                    <Recipe recipe={recipe} key={index}/>
                )
            })
                : null
            } 
        </div>
    )
}
