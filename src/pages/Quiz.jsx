import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { questions } from './../data/question';
import { reset, submitAnswer } from '../features/quizSlice/quizSlice';

const Quiz = () => {
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
    const currentQuestion = useSelector((state) => questions[currentQuestionIndex])
    const score = useSelector((state) => state.quiz.score)
    const isQuizOver = useSelector((state) => state.quiz.isQuizOver)   

    const dispatch = useDispatch()
    
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className='w-[800px] bg-gray-200 p-10 rounded-md relative'>
                    <h1 className='text-center text-3xl font-bold mb-5'>Quiz Application</h1>
                    <h2 className='text-xl font-bold mb-3'>{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
                    <div className="flex items-center gap-x-5">
                        {
                            currentQuestion.options.map((item,index) => (
                                <button key={index} className='border-2 border-white py-2 px-5' onClick={()=>dispatch(submitAnswer(item))}>{item}</button>
                            ))
                        }
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <p className='text-xl font-bold'>Your Score is : {score}</p>
                        <button className='text-red-600 uppercase border border-red-700 rounded-md py-2 px-3 text-center font-bold transition-all duration-300 hover:bg-red-700 hover:text-white' onClick={()=>dispatch(reset())}>Reset</button>
                    </div>
                    {
                        isQuizOver
                        &&
                        <div className="w-full h-full bg-white absolute left-0 top-0 flex justify-center items-center flex-col">
                            <span className='text-5xl font-bold capitalize'>quiz Is Over</span>
                            <p className='mt-4 text-xl font-bold'>Your Score is : {score}</p>
                            <button className='text-red-600 uppercase border border-red-700 mt-4 rounded-md py-2 px-3 text-center font-bold transition-all duration-300 hover:bg-red-700 hover:text-white' onClick={()=>dispatch(reset())}>Restart</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Quiz;