import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './V1.css';

export function V1() {
    const vocabWords = [
        { src: "https://img.freepik.com/free-vector/cute-dog-cartoon-character-standing_1308-133833.jpg?t=st=1719892175~exp=1719895775~hmac=135f20aa83146e80ee0020dbd28cf4229beeb3b8099c79affd7652054e99024a&w=740", english: "dog", italian: "cane" },
        { src: "https://img.freepik.com/free-vector/bird-with-red-feathers_1308-106864.jpg?ga=GA1.2.1447454956.1719822818&semt=ais_user", english: "bird", italian: "uccello" },
        { src: "https://img.freepik.com/free-vector/dairy-cow-standing-cartoon-character_1308-92233.jpg?t=st=1719895156~exp=1719898756~hmac=c8e5c92b1db0f8c4d28565ba30760fc83e2f995801cb3e49da18da3db25701d5&w=900", english: "cow", italian: "mucca" },
        { src: "https://img.freepik.com/free-vector/grizzly-bear-white-background_1308-38222.jpg?t=st=1735327407~exp=1735331007~hmac=d9d6fd28891e1d7a493a44ff760bd3e167a181ef510868d7a9ecfc31b5329987&w=740", english: "bear", italian: "orso" },
        { src: "https://img.freepik.com/free-vector/pretty-brown-horse-white-background_1308-110204.jpg?t=st=1719895015~exp=1719898615~hmac=f2a397a2e3759c48c75df20e839e83d44f3d48f84f3623b461881319f842c04d&w=360", english: "horse", italian: "cavallo" },
        { src: "https://img.freepik.com/free-vector/white-sheep-standing-white-background_1308-81697.jpg?t=st=1719896194~exp=1719899794~hmac=ef14e76a0b8823a6b4f1e58f348ac4709809017ae0bdf738e34389205b8f14fd&w=740", english: "sheep", italian: "pecora" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loopCount, setLoopCount] = useState(0);
    const maxLoops = 3;
    const navigate = useNavigate();

    useEffect(() => {
        if (loopCount < maxLoops) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % vocabWords.length;
                    if (newIndex === 0) setLoopCount((prevLoopCount) => prevLoopCount + 1);
                    return newIndex;
                });
            }, 6000); // Change image every 6 seconds

            return () => clearInterval(timer); // Cleanup the interval on component unmount
        } else {
            const redirectTimer = setTimeout(() => {
                navigate('/a1'); // Redirect to /a1 using navigate after 1 second
            }, 1000); // Wait for 1 second

            return () => clearTimeout(redirectTimer); // Cleanup the timeout
        }
    }, [loopCount, vocabWords.length, navigate]);

    if (loopCount >= maxLoops) {
        return <div className='contv1'><h1>Review Complete!</h1></div>;
    }

    const currentWord = vocabWords[currentIndex];

    return (
        <div className='contv1'>
            <h1>Memorize the following words. You will see each word three times.</h1>
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
