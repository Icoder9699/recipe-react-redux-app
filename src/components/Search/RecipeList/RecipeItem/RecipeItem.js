import React from 'react'
import { withRouter } from 'react-router'
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations'
import './RecipeItem.scss'


const FadeInDown = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`

function RecipeItem(props) {
    
    return (
        <FadeInDown>
            <div 
                className='RecipeItem' 
                onClick={() => props.history.push('/recipes/' + props.recipe.strMeal.toLowerCase())}
            >
                <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal}/>
                <h4>
                    {props.recipe.strMeal}
                </h4>
            </div>
        </FadeInDown>
    )
}

export default withRouter(RecipeItem)
