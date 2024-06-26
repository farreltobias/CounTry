import { configureStore } from '@reduxjs/toolkit'
import formQuestionSlice from 'src/features/form/questionSlice'
import formQuizSlice from 'src/features/form/quizSlice'

export const store = configureStore({
  reducer: {
    quizInForm: formQuizSlice,
    questionInForm: formQuestionSlice,
  },
})

export type FormState = ReturnType<typeof store.getState>
export type FormDispatch = typeof store.dispatch
export type FormStore = typeof store
