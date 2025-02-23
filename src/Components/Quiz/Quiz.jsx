import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

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

    const checkAns = (e, ans) => {
        if (!lock) {
            let currentSet = Math.floor(index / 3); // Determine which set (0,1,2,3)

            if (question.ans === ans) {
                e.target.classList.add('correct');
                setScore((prev) => {
                    let newScore = [...prev];
                    newScore[currentSet] += 1;
                    return newScore;
                });
            } else {
                e.target.classList.add('wrong');
                option_array[question.ans - 1].current.classList.add('correct');
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
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
            });
        }
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
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
                    <p>Visual: {score[0]} / 3 correct</p>
                    <p>Auditory: {score[1]} / 3 correct</p>
                    <p>Kinesthetics: {score[2]} / 3 correct</p>
                    <p>Read/Write: {score[3]} / 3 correct</p>
                </>
            )}
        </div>
    );
}

export default Quiz;
