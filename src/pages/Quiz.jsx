import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { questions } from './../data/question';
import { submitAnswer } from '../features/quizSlice/quizSlice';

const Quiz = () => {
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
    const currentQuestion = useSelector((state) => questions[currentQuestionIndex])
    const score = useSelector((state) => state.quiz.score)
    console.log(score);
    

    const dispatch = useDispatch()
    
    return (
        <>
            <h1>Quiz Number : {currentQuestionIndex + 1}</h1>
            <h2>{currentQuestion.question}</h2>
            {
                currentQuestion.options.map((item,index) => (
                    <button key={index} className='border mx-2 py-2 px-5' onClick={()=>dispatch(submitAnswer(item))}>{item}</button>
                ))
            }
            <p>Your Score is : {score}</p>
        </>
    );
};

export default Quiz;