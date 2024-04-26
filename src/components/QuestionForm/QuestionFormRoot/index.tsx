import { Button } from 'src/components/Button'
import { useFormDispatch, useFormSelector } from 'src/hooks/redux'
import { updateQuiz } from 'src/features/form/quizSlice'

import { FormSection } from './styles'
import { QuestionMapper } from 'src/utils/question-mapper'
import { removeQuestion, updateQuestion } from 'src/features/form/questionSlice'
import { Question } from 'src/@types/types'
import * as z from 'zod'
import { QuestionValidation } from 'src/utils/form-validation'

type Props = React.PropsWithChildren<{}>

export const QuestionFormRoot: React.FC<Props> = ({ children }) => {
  const dispatch = useFormDispatch()

  const quizInForm = useFormSelector((state) => state.quizInForm)
  const questionInForm = useFormSelector((state) => state.questionInForm)

  const isEditing = !!questionInForm.id
  const isSubmitDisabled =
    !!Object.values(questionInForm.errors).filter(Boolean).length ||
    !questionInForm.title ||
    !questionInForm.theme ||
    !(
      questionInForm.alternatives.length >= 2 &&
      questionInForm.alternatives.length <= 4
    )

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let questionFormatted = {} as Question

    try {
      questionFormatted = QuestionMapper.toQuestion(questionInForm)
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors = QuestionValidation.formatError(err)
        return dispatch(updateQuestion({ errors }))
      }

      return
    }

    const newQuestions = [...quizInForm.questions]

    if (!isEditing) {
      newQuestions.push(questionFormatted)
    } else {
      const questionIndex = quizInForm.questions.findIndex(
        (quizQuestion) => quizQuestion.id === questionFormatted.id,
      )

      newQuestions[questionIndex] = questionFormatted
    }

    dispatch(removeQuestion())

    if (quizInForm.errors.questions) {
      const { questions: _, ...errors } = quizInForm.errors

      return dispatch(
        updateQuiz({
          errors: { ...errors },
          questions: newQuestions,
        }),
      )
    }

    dispatch(updateQuiz({ questions: newQuestions }))
  }

  return (
    <FormSection onSubmit={handleFormSubmit}>
      {children}

      <Button.Root type="submit" size="sm" disabled={isSubmitDisabled}>
        {!isEditing ? 'Create Question' : 'Update Question'}
      </Button.Root>
    </FormSection>
  )
}
