import { FontQuestion } from 'iconoir-react'

import { Input } from 'src/components/Input'
import { useFormDispatch, useFormSelector } from 'src/hooks/redux'
import { updateQuestion } from 'src/features/form/questionSlice'

export const QuestionTitleInput: React.FC = () => {
  const dispatch = useFormDispatch()
  const questionInForm = useFormSelector((state) => state.questionInForm)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value && questionInForm.errors.title) {
      const { title: _, ...errors } = questionInForm.errors

      return dispatch(
        updateQuestion({
          title: event.target.value,
          errors: { ...errors },
        }),
      )
    }

    dispatch(updateQuestion({ title: event.target.value }))
  }

  return (
    <>
      <Input.Root
        value={questionInForm.title}
        placeholder="What's your question?"
        onChange={onInputChange}
        error={questionInForm.errors.title}
        data-testid="question-title-input"
      >
        <Input.Label>Questions</Input.Label>
        <Input.Icon icon={<FontQuestion />} />
      </Input.Root>
    </>
  )
}
