import React from 'react'

const Recipe = ({ title, calories, image, ingredient}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredient.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe
