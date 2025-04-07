import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RW1.css';

export function RW1() {
    const vocabWords = [
        { english: "pencil", italian: "matita" },
        { english: "paper", italian: "carta" },
        { english: "book", italian: "libro" },
        { english: "bag", italian: "borsa" },
        { english: "crayon", italian: "pastello" },
        { english: "pen", italian: "penna" }
    ];

    const navigate = useNavigate(); // Hook for navigation
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer); // Cleanup on unmount
        } else {
            navigate('/quiz'); // Redirect to quiz page when time is up
        }
    }, [timeLeft, navigate]); // Re-run effect when timeLeft changes

    // Format the time in MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="container">
            <h1>
                Write down the following words and definitions, or
                type them below.
            </h1>

            <div className="content">
                {/* Display the list of vocabulary words */}
                <div className="vocab-list">
                    {vocabWords.map((word, index) => (
                        <div key={index} className="vocab-item">
                            <strong>{word.english}</strong> - {word.italian}
                        </div>
                    ))}
                </div>

                {/* Timer */}
                <div className="timer">
                    <h2>Time Left: {formatTime(timeLeft)}</h2>
                </div>
            </div>

            {/* Text area for users to type the words */}
            <textarea 
                className="input-area" 
                rows="6" 
                placeholder="Type the words here..." 
            />
        </div>
    );
}

export default RW1;
