import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './K1.css';

export function K1() {
    const navigate = useNavigate();

    const vocabWords = [
        { english: "table", italian: "tavolo" },
        { english: "chair", italian: "sedia" },
        { english: "bed", italian: "letto" },
        { english: "desk", italian: "scrivania" },
        { english: "door", italian: "porta" },
        { english: "shelf", italian: "scaffale" },
    ];

    // Shuffle words on initial render
    const [shuffledWords, setShuffledWords] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    const [matches, setMatches] = useState([]);
    const [incorrectDrops, setIncorrectDrops] = useState({}); // Tracks incorrect drops

    useEffect(() => {
        const shuffled = [...vocabWords].sort(() => Math.random() - 0.5);
        setShuffledWords(shuffled);
    }, []);

    useEffect(() => {
        if (matches.length === vocabWords.length) {
            setTimeout(() => {
                navigate('/rw1'); // Redirect after a brief delay
            }, 1000); // 1-second delay for smoother transition
        }
    }, [matches, navigate, vocabWords.length]);

    const handleDragStart = (word) => {
        setDraggedItem(word);
    };

    const handleDrop = (italianWord) => {
        if (draggedItem) {
            if (draggedItem.italian === italianWord) {
                setMatches((prev) => [...prev, draggedItem.english]);
                setIncorrectDrops((prev) => ({ ...prev, [italianWord]: false }));
            } else {
                setIncorrectDrops((prev) => ({ ...prev, [italianWord]: true }));
                setTimeout(() => {
                    setIncorrectDrops((prev) => ({ ...prev, [italianWord]: false }));
                }, 1000); // Remove red color after 1 second
            }
        }
        setDraggedItem(null);
    };

    const isMatched = (word) => matches.includes(word);

    return (
        <div className="drag-drop-game">
            <h1>Drag the English words to match the Italian translations.</h1>
            <div className="game-area">
                <div className="english-words">
                    <h2>English</h2>
                    <div className="word-grid">
                        {shuffledWords.map((word) => (
                            <div
                                key={word.english}
                                className={`word ${isMatched(word.english) ? "matched" : ""}`}
                                draggable={!isMatched(word.english)}
                                onDragStart={() => handleDragStart(word)}
                            >
                                {word.english}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="italian-words">
                    <h2>Italian</h2>
                    <div className="word-grid">
                        {vocabWords.map((word) => (
                            <div
                                key={word.italian}
                                className={`drop-zone ${
                                    incorrectDrops[word.italian] ? "incorrect" : ""
                                } ${isMatched(word.english) ? "matched" : ""}`}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDrop(word.italian)}
                            >
                                {word.italian}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {matches.length === vocabWords.length && (
                <div className="completion-message">
                    🎉 Well done! You matched all the words! 🎉
                </div>
            )}
        </div>
    );
}

export default K1;
