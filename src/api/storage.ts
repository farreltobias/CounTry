// get quizzes from local storage

import { Quiz } from 'src/@types/types'

export const getQuizzes = async (): Promise<Quiz[]> => {
  const quizzes = localStorage.getItem('quizzes')

  if (!quizzes) {
    return []
  }

  return JSON.parse(quizzes)
}

export const setQuizzes = async (quizzes: Quiz[]): Promise<void> => {
  localStorage.setItem('quizzes', JSON.stringify(quizzes))
}
