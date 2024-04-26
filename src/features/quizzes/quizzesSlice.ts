import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { QuizState } from 'src/@types/types'
import { getQuizzes } from 'src/api/storage'

export const fetchQuizzes = createAsyncThunk(
  'quizzes/fetchQuizzes',
  async () => {
    return getQuizzes()
  },
)

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null,
  } satisfies QuizState as QuizState,
  reducers: {
    removeQuiz(state, action) {
      const entries = state.entities.filter(
        (quiz) => quiz.slug !== action.payload,
      )

      return { ...state, entities: entries }
    },
    updateQuizzes(_, action) {
      return { entities: action.payload, loading: 'succeeded', error: null }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuizzes.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchQuizzes.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.entities = action.payload
    })
    builder.addCase(fetchQuizzes.rejected, (state, action) => {
      state.loading = 'failed'
      state.error = action.error.message || null
    })
  },
})

export const { removeQuiz, updateQuizzes } = quizzesSlice.actions
export default quizzesSlice.reducer
