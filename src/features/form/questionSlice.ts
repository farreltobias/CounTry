import { createSlice } from '@reduxjs/toolkit'
import { EditableQuestion } from 'src/@types/types'

const formQuestionSlice = createSlice({
  name: 'formQuestion',
  initialState: {
    title: '',
    alternatives: [],
    theme: null,
    errors: {},
  } as EditableQuestion,
  reducers: {
    removeQuestion() {
      return {
        title: '',
        alternatives: [],
        theme: null,
        errors: {},
      }
    },
    updateQuestion(state, action) {
      return { ...state, ...action.payload }
    },
  },
})

export const { removeQuestion, updateQuestion } = formQuestionSlice.actions
export default formQuestionSlice.reducer
