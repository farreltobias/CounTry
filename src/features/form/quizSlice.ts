import { createSlice } from '@reduxjs/toolkit'
import { EditableQuiz } from 'src/@types/types'

const formQuizSlice = createSlice({
  name: 'formQuiz',
  initialState: {
    title: '',
    questions: [],
    errors: {},
  } as EditableQuiz,
  reducers: {
    removeQuiz() {
      return {
        title: '',
        questions: [],
        errors: {},
      }
    },
    updateQuiz(state, action) {
      return { ...state, ...action.payload }
    },
  },
})

export const { removeQuiz, updateQuiz } = formQuizSlice.actions
export default formQuizSlice.reducer
