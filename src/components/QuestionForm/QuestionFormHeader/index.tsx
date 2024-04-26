import { useFormSelector } from 'src/hooks/redux'

import { FormHeader, HeaderSubtitle, HeaderTitle } from './styles'

export const QuestionFormHeader: React.FC = () => {
  const questionInForm = useFormSelector((state) => state.questionInForm)
  const isEditing = !!questionInForm.id

  return (
    <FormHeader>
      <HeaderTitle>
        {!isEditing ? 'Create a question' : 'Editing question'}
      </HeaderTitle>
      <HeaderSubtitle>
        {!isEditing
          ? 'Fill in the fields below to create a new question'
          : 'Edit the fields below to update the question'}
      </HeaderSubtitle>
    </FormHeader>
  )
}
