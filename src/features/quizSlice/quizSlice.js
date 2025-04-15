import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../../data/question'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: questions,
    currentQuestionIndex: 0,
    score: 0,
    isQuizOver: false,
  },
  reducers: {
    submitAnswer: (state, action) => {
      const currentQuestion = state.questions[state.currentQuestionIndex]
          if( action.payload == currentQuestion.correctAnswer){
            state.score += 1;
          }
        if( state.currentQuestionIndex === state.questions.length - 1 ){
            state.isQuizOver = true;
        }else{
            state.currentQuestionIndex++
        }
        console.log(action.payload, currentQuestion.correctAnswer, state.score)
    },
  },
})

export const { submitAnswer, } = quizSlice.actions

export default quizSlice.reducer