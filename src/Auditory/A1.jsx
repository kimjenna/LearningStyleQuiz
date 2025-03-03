import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './A1.css';

export function A1() {
    const navigate = useNavigate();
    const [timeRemaining, setTimeRemaining] = useState(120); // 120 seconds (2 minutes)

    // Function to play the corresponding audio
    const playAudio = (audioFile) => {
        const audio = new Audio(`/audio/${audioFile}.m4a`);
        audio.play();
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer); // Clear timer when it reaches 0
                    navigate('/k1'); // Redirect to /k1
                    return 0; // Prevent negative time
                }
                return prevTime - 1; // Decrease time by 1 second
            });
        }, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [navigate]);

    // Calculate minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div>
            <h1>Click to hear the word.</h1>

            {/* Timer moved to the top right */}
            <div className="timer-container">
                <h2>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
            </div>

            {/* Buttons in a vertical column */}
            <div className="button-container">
                <button onClick={() => playAudio('apple')}>apple - mela</button>
                <button onClick={() => playAudio('celery')}>celery - sedano</button>
                <button onClick={() => playAudio('cake')}>cake - torta</button>
                <button onClick={() => playAudio('rice')}>rice - riso</button>
                <button onClick={() => playAudio('bread')}>bread - pane</button>
                <button onClick={() => playAudio('cucumber')}>cucumber - cetriolo</button>
            </div>
        </div>
    );
}

export default A1;
