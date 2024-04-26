export type Alternative = {
  image?: string
  label: string
  value: string
  correct: boolean
}

export type Question = {
  id: string
  title: string
  theme: {
    value: string
    label: string
  }
  alternatives: Alternative[]
}

export type EditableQuestion = {
  id?: string
  title: string
  theme: {
    value: string
    label: string
  } | null
  errors: {
    title?: string
    theme?: string
    alternatives?: string
  }
} & Omit<Question, 'id' | 'title' | 'theme'>

export type Quiz = {
  slug: string
  title: string
  questions: Question[]
}
export type QuizState = {
  entities: Quiz[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

export type EditableQuiz = {
  slug?: string
  title: string
  errors: {
    title?: string
    questions?: string
  }
} & Omit<Quiz, 'slug' | 'title'>

export type QuizStatus = {
  slug: string
  correctAnswers: number
  totalQuestions: number
  answeredQuestions: number
}
