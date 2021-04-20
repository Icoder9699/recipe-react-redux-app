import React, { Component } from 'react'
import axios from 'axios'
import './Hero.scss'

class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {
            meal: []
        }
    }
    async componentDidMount(){
        try{
            const mealData = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            this.setState({
                meal: mealData.data.meals[0]
            })
        }catch(e){
            console.log(e);
        }
    }

    render() {
        const {strMeal, strMealThumb, strYoutube, strInstructions, strSource} = this.state.meal 
        return (
            <div className='hero' >
                <div className='hero__img'>
                    <img 
                        src={strMealThumb} 
                        alt={strMeal}
                    />
                    <h1>
                        Random Recipe
                    </h1>
                </div>
                <div className='hero__body'>
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
}

export default Hero;