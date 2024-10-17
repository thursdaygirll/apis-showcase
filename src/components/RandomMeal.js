'use client'; // Ensures the component is client-side

import React, { useState, useEffect } from 'react';

const RandomMeal = () => {
    const [meal, setMeal] = useState(null); // Manage meal data state
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetch random meal when component mounts
        fetchRandomMeal();
    }, []);

    const fetchRandomMeal = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            setMeal(data.meals[0]); // Set the meal data
        } catch (error) {
            console.error('Error fetching random meal:', error);
        } finally {
            setLoading(false); // Stop loading once the data is fetched
        }
    };

    return (
        <div className="random-meal-container component">
            <h2>Random Meal</h2>
            {loading ? (
                <p>Loading...</p> // Show loading state
            ) : (
                meal && (
                    <div className="meal-card">
                        <p>Meal: {meal.strMeal}</p>
                        <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                )
            )}
        </div>
    );
};

export default RandomMeal;