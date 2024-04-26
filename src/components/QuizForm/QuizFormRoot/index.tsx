import { useOutletContext } from 'react-router-dom'
import * as z from 'zod'

import { useFormDispatch, useFormSelector } from 'src/hooks/redux'
import { FormLayoutContext } from 'src/layouts/Form'
import { FormSection } from './styles'
import { QuizMapper } from 'src/utils/quiz-mapper'
import { Quiz } from 'src/@types/types'
import { QuizValidation } from 'src/utils/form-validation'
import { updateQuiz } from 'src/features/form/quizSlice'

type Props = React.PropsWithChildren<{}>

export const QuizFormRoot: React.FC<Props> = ({ children }) => {
  const quizInForm = useFormSelector((state) => state.quizInForm)
  const dispatch = useFormDispatch()

  const { handleFormSubmit } = useOutletContext<FormLayoutContext>()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let quizFormatted = {} as Quiz

    try {
      quizFormatted = QuizMapper.toQuiz(quizInForm)
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors = QuizValidation.formatError(err)
        return dispatch(updateQuiz({ errors }))
      }

      return
    }

    handleFormSubmit(quizFormatted)
  }

  return <FormSection onSubmit={onSubmit}>{children}</FormSection>
}
