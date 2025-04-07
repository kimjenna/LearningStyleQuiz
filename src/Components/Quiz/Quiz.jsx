import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
import { Link } from 'react-router-dom';

export function Quiz() {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState([0, 0, 0, 0]); // Track correct answers per group
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const learningStyles = ["Visual", "Auditory", "Kinesthetic", "Read/Write"];
    const learningStyleLinks = {
        "Visual": "/visual",
        "Auditory": "/auditory",
        "Kinesthetic": "/kinesthetic",
        "Read/Write": "/read-write"
    };

    const checkAns = (e, ans) => {
        if (!lock) {
            let currentSet = Math.floor(index / 3); // Determine which set (0,1,2,3)

            if (question.ans === ans) {
                e.target.classList.add('correct');
                e.target.textContent += " (Correct Answer)";
                setScore((prev) => {
                    let newScore = [...prev];
                    newScore[currentSet] += 1;
                    return newScore;
                });
            } else {
                e.target.classList.add('wrong');
                e.target.textContent += " (Your Answer)";
                option_array[question.ans - 1].current.classList.add('correct');
                option_array[question.ans - 1].current.textContent += " (Correct Answer)";
            }
            setLock(true);
        }
    };

    const next = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true); // Show results after the last question
                return;
            }
            setIndex(index + 1);
            setQuestion(data[index + 1]);
            setLock(false);

            option_array.forEach((option) => {
                option.current.classList.remove('wrong', 'correct');
                option.current.textContent = question[`option${option_array.indexOf(option) + 1}`];
            });
        }
    };

    const getLearningStyle = () => {
        let maxScore = Math.max(...score);
        let dominantStyles = score
            .map((s, i) => (s === maxScore ? learningStyles[i] : null))
            .filter(Boolean); // Get all highest scoring learning styles

        if (dominantStyles.length === 1) {
            return (
                <>
                    Your learning style is{" "}
                    <Link to={learningStyleLinks[dominantStyles[0]]} className="learning-style-link">
                        {dominantStyles[0]}
                    </Link>.
                </>
            );
        } else {
            return (
                <>
                    You have a mixed learning style:{" "}
                    {dominantStyles.map((style, i) => (
                        <React.Fragment key={style}>
                            {i > 0 && " & "}
                            <Link to={learningStyleLinks[style]} className="learning-style-link">
                                {style}
                            </Link>
                        </React.Fragment>
                    ))}
                    .
                </>
            );
        }
    };

    return (
        <div className="container">
            <h1>Quiz Time!</h1>
            <hr />
            {!result ? (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {data.length} questions</div>
                </>
            ) : (
                <>
                    <h2>Quiz Completed!</h2>
                    <h3>{getLearningStyle()}</h3> {/* Learning style is now a clickable link */}
                    <hr />
                    <p>Visual: {score[0]} / 3 correct</p>
                    <p>Auditory: {score[1]} / 3 correct</p>
                    <p>Kinesthetic: {score[2]} / 3 correct</p>
                    <p>Read/Write: {score[3]} / 3 correct</p>
                </>
            )}
        </div>
    );
}

export default Quiz;
