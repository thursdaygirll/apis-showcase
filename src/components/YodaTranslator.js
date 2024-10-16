import React, { useState } from 'react';

const YodaTranslator = () => {
    const [input, setInput] = useState('');
    const [translated, setTranslated] = useState('');
    const [loading, setLoading] = useState(false);

    const getYodaTranslation = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.funtranslations.com/translate/yoda.json?text=${input}`
            );
            const data = await response.json();
            setTranslated(data.contents.translated);
        } catch (error) {
            console.error('Error translating to Yoda:', error);
        }
        setLoading(false);
    };

    return (
        <div className="yoda-translator-container component">
            <h2>Yoda Translator</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text"
            />
            <button onClick={getYodaTranslation}>
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