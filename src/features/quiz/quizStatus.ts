import { createSlice } from '@reduxjs/toolkit'
import { QuizStatus } from 'src/@types/types'

const quizStatusSlice = createSlice({
  name: 'quizStatus',
  initialState: {
    slug: '',
    correctAnswers: 0,
    totalQuestions: 0,
    answeredQuestions: 0,
  } as QuizStatus,
  reducers: {
    addQuizStatus(state, action) {
      return { ...state, ...action.payload }
    },
    addAnsweredQuestion(state) {
      return { ...state, answeredQuestions: state.answeredQuestions + 1 }
    },
    addCorrectAnswer(state) {
      return { ...state, correctAnswers: state.correctAnswers + 1 }
    },
    removeQuizStatus() {
      return {
        slug: '',
        correctAnswers: 0,
        totalQuestions: 0,
        answeredQuestions: 0,
      }
    },
  },
})

export const {
  addCorrectAnswer,
  addAnsweredQuestion,
  addQuizStatus,
  removeQuizStatus,
} = quizStatusSlice.actions
export default quizStatusSlice.reducer
