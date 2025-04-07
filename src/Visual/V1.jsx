import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './V1.css';

export function V1() {
    const vocabWords = [
        { src: "https://img.freepik.com/free-vector/cute-dog-cartoon-character-standing_1308-133833.jpg", english: "dog", italian: "cane" },
        { src: "https://img.freepik.com/free-vector/bird-with-red-feathers_1308-106864.jpg", english: "bird", italian: "uccello" },
        { src: "https://img.freepik.com/free-vector/dairy-cow-standing-cartoon-character_1308-92233.jpg", english: "cow", italian: "mucca" },
        { src: "https://img.freepik.com/free-vector/grizzly-bear-white-background_1308-38222.jpg", english: "bear", italian: "orso" },
        { src: "https://img.freepik.com/free-vector/pretty-brown-horse-white-background_1308-110204.jpg", english: "horse", italian: "cavallo" },
        { src: "https://img.freepik.com/free-vector/white-sheep-standing-white-background_1308-81697.jpg", english: "sheep", italian: "pecora" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loopCount, setLoopCount] = useState(0);
    const maxLoops = 3;
    const navigate = useNavigate();

    useEffect(() => {
        if (loopCount < maxLoops) {
            const timer = setTimeout(() => {
                const nextIndex = (currentIndex + 1) % vocabWords.length;

                // If we're wrapping around to the start of the list,
                // that means a full round just finished
                if (nextIndex === 0) {
                    setLoopCount((prev) => prev + 1);
                }

                setCurrentIndex(nextIndex);
            }, 6000); // every 6 seconds

            return () => clearTimeout(timer);
        } else {
            const redirectTimer = setTimeout(() => {
                navigate('/a1');
            }, 1000); // 1 second pause

            return () => clearTimeout(redirectTimer);
        }
    }, [currentIndex, loopCount, navigate, vocabWords.length]);

    if (loopCount >= maxLoops) {
        return <div className='contv1'><h1>Review Complete!</h1></div>;
    }

    const currentWord = vocabWords[currentIndex];

    return (
        <div className='contv1'>
            <h1>Memorize the following words. You will see each word three times.</h1>
            <h2>Round {loopCount + 1}</h2>
            <div className='pic'>
                <div className='english-box'>{currentWord.english}</div>
                <div className='italian-box'>
                    <img src={currentWord.src} alt={`Image of ${currentWord.italian}`} />
                    <p>{currentWord.italian}</p>
                </div>
            </div>
        </div>
    );
}

export default V1;
