import { Reorder } from 'framer-motion'
import { Question } from 'src/@types/types'
import { updateQuiz } from 'src/features/form/quizSlice'
import { useFormDispatch, useFormSelector } from 'src/hooks/redux'

import { QuestionsList } from './styles'

type Props = React.PropsWithChildren<{}>

export const QuizFormList: React.FC<Props> = ({ children }) => {
  const quizInForm = useFormSelector((state) => state.quizInForm)
  const dispatch = useFormDispatch()

  const onReorder = (questions: Question[]) => {
    dispatch(updateQuiz({ questions }))
  }

  return (
    <QuestionsList
      as={Reorder.Group<Question>}
      axis="y"
      onReorder={onReorder}
      values={quizInForm.questions}
      data-testid="quiz-list"
    >
      {children}
    </QuestionsList>
  )
}
