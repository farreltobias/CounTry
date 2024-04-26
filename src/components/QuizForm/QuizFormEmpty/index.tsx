import { useFormSelector } from 'src/hooks/redux'

import { Empty, Error } from './styles'

export const QuizFormEmpty: React.FC = () => {
  const quizInForm = useFormSelector((state) => state.quizInForm)

  return (
    <Empty>
      <p>Create your first question aside :)</p>
      {quizInForm.errors.questions && (
        <Error>{quizInForm.errors.questions}</Error>
      )}
    </Empty>
  )
}
