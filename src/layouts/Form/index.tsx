import { Provider } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { Quiz } from 'src/@types/types'
import { setQuizzes } from 'src/api/storage'
import { Logo } from 'src/components/Logo'
import { updateQuizzes } from 'src/features/quizzes/quizzesSlice'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'

import { store } from './store'
import { LayoutContainer } from './styles'

export type FormLayoutContext = {
  quiz: Quiz | undefined
  handleFormSubmit: (quizFormatted: Quiz) => void
}

export function FormLayout() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const quizzes = useAppSelector((state) => state.quizzes.entities)
  const quiz = quizzes.find((quiz) => quiz.slug === slug)

  const isEditPage = !!slug

  const handleFormSubmit = async (quizFormatted: Quiz) => {
    const newQuizzes = [...quizzes]

    if (!isEditPage) {
      newQuizzes.push(quizFormatted)
    } else {
      const quizIndex = newQuizzes.findIndex(
        (quiz) => quiz.slug === quizFormatted.slug,
      )

      newQuizzes[quizIndex] = quizFormatted
    }

    dispatch(updateQuizzes(newQuizzes))
    await setQuizzes(newQuizzes)

    navigate('/quizzes')
  }

  return (
    <Provider store={store}>
      <LayoutContainer>
        <Logo asTag />
        <Outlet
          context={{ quiz, handleFormSubmit } satisfies FormLayoutContext}
        />
      </LayoutContainer>
    </Provider>
  )
}
