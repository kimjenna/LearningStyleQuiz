import React, { useRef, useState, useEffect } from 'react';
import './Instructions.css';
import { Link, useNavigate } from 'react-router-dom';

export function Instructions() {
    const [seconds, setSeconds] = useState(10); // Initial timer value
    const navigate = useNavigate();
    const intervalRef = useRef(null);

    // Start the timer when component mounts
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Redirect to '/v1' when timer reaches 0
        if (seconds === 0) {
            clearInterval(intervalRef.current);
            navigate('/v1');
        }

        // Clean up the interval on component unmount
        return () => clearInterval(intervalRef.current);
    }, [seconds, navigate]);

    return (
        <div className='cont'>
            <h1>Instructions</h1>
            <hr />
            <h2>In the four following sections, you will be given six Italian vocabulary words. Memorize them!</h2>
            <p>Redirecting in {seconds} seconds...</p>
        </div>
    );
}

export default Instructions;
