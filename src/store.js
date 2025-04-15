import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './features/quizSlice/quizSlice'


export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
})