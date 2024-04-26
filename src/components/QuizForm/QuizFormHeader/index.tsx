import { Button } from 'src/components/Button'
import { Input } from 'src/components/Input'
import { Buttons, FormHeader, HeaderText } from './styles'
import { useFormDispatch, useFormSelector } from 'src/hooks/redux'
import { updateQuiz } from 'src/features/form/quizSlice'

export const QuizFormHeader: React.FC = () => {
  const dispatch = useFormDispatch()
  const quizInForm = useFormSelector((state) => state.quizInForm)

  const isSubmitDisabled =
    !!Object.values(quizInForm.errors).filter(Boolean).length ||
    !quizInForm.title ||
    !quizInForm.questions.length

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value && quizInForm.errors.title) {
      const { title: _, ...errors } = quizInForm.errors

      return dispatch(
        updateQuiz({
          title: event.target.value,
          errors: { ...errors },
        })
      )
    }

    dispatch(updateQuiz({ title: event.target.value }))
  }

  return (
    <FormHeader>
      <HeaderText>
        <h1>
          <Input.Root
            placeholder="Name your quiz"
            variant="title"
            value={quizInForm.title}
            onChange={onInputChange}
            error={quizInForm.errors.title}
          />
        </h1>
        <p>Organize the questions for your quiz below</p>
      </HeaderText>
      <Buttons>
        <Button.Root size="sm" type="button" to="/quizzes" variant="secondary">
          Cancel
        </Button.Root>
        <Button.Root size="sm" type="submit" disabled={isSubmitDisabled}>
          {quizInForm.slug ? 'Save Changes' : 'Create Quiz'}
        </Button.Root>
      </Buttons>
    </FormHeader>
  )
}
