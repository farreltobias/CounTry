import { configureStore } from '@reduxjs/toolkit'
import quizzesReducer from './features/quizzes/quizzesSlice'
import quizStatusReducer from './features/quiz/quizStatus'

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    quizStatus: quizStatusReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
