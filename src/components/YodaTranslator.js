'use client'; // Ensures the component is client-side

import React, { useState } from 'react';

const YodaTranslator = () => {
    const [input, setInput] = useState(''); // Manage input state
    const [translated, setTranslated] = useState(''); // Manage translation state
    const [loading, setLoading] = useState(false); // Loading state

    const translateToYoda = async () => {
        if (!input) return; // Do nothing if input is empty
        setLoading(true); // Start loading
        try {
            const response = await fetch(`https://api.funtranslations.com/translate/yoda.json?text=${input}`);
            const data = await response.json();
            setTranslated(data.contents.translated); // Set translated text
        } catch (error) {
            console.error('Error translating text:', error);
        } finally {
            setLoading(false); // Stop loading once translation is done
        }
    };

    return (
        <div className="yoda-translator-container component">
            <h2>Yoda Translator</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update input state on change
                placeholder="Enter text"
            />
            <button onClick={translateToYoda}>
                {loading ? 'Translating...' : 'Translate to Yoda'} 
            </button>
            {translated && (
                <div className="yoda-card">
                    <p className="yoda-translation">{translated}</p>
                </div>
            )}
        </div>
    );
};

export default YodaTranslator;