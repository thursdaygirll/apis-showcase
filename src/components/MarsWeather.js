import React, { useState } from 'react';

const MarsWeather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const getMarsWeather = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.maas2.apollorion.com/');
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error fetching Mars weather:', error);
        }
        setLoading(false);
    };

    return (
        <div className="mars-weather-container component">
            <h2>Mars Weather</h2>
            <button onClick={getMarsWeather}>
                {loading ? 'Fetching...' : 'Fetch Mars Weather'}
            </button>
            {weather && (
                <div className="weather-card">
                    <h3>Mars Weather Report</h3>
                    <p>Temperature: {weather.atmo_opacity}</p>
                    <p>Season: {weather.season}</p>
                </div>
            )}
        </div>
    );
};

export default MarsWeather;