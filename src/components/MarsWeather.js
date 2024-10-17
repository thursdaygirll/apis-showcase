'use client'; // Ensures the component is client-side

import React, { useState, useEffect } from 'react';

const MarsWeather = () => {
    const [weather, setWeather] = useState(null); // Manage weather data state
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetch Mars weather when component mounts
        fetchMarsWeather();
    }, []);

    const fetchMarsWeather = async () => {
        try {
            const response = await fetch('https://api.maas2.apollorion.com/');
            const data = await response.json();
            setWeather(data); // Set the weather data
        } catch (error) {
            console.error('Error fetching Mars weather:', error);
        } finally {
            setLoading(false); // Stop loading once the data is fetched
        }
    };

    return (
        <div className="mars-weather-container component">
            <h2>Mars Weather</h2>
            {loading ? (
                <p>Loading...</p> // Show loading state
            ) : (
                weather && (
                    <div className="weather-card">
                        <h3>Mars Weather Report</h3>
                        <p>Temperature: {weather.atmo_opacity}</p>
                        <p>Season: {weather.season}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default MarsWeather;