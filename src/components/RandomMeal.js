import React, { useState } from 'react';

const RandomMeal = () => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);

    const getRandomMeal = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            setMeal(data.meals[0]);
        } catch (error) {
            console.error('Error fetching random meal:', error);
        }
        setLoading(false);
    };

    return (
        <div className="random-meal-container component">
            <h2>Random Meal</h2>
            <button onClick={getRandomMeal}>
                {loading ? 'Fetching...' : 'Fetch Random Meal'}
            </button>
            {meal && (
                <div className="meal-card">
                    <p>Meal: {meal.strMeal}</p>
                    <img
                        className="meal-image"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                </div>
            )}
        </div>
    );
};

export default RandomMeal;