import { Children } from 'react'
import { EditPencil, Trash, Xmark } from 'iconoir-react'
import { Reorder, useMotionValue } from 'framer-motion'

import { Question } from 'src/@types/types'
import { Button } from 'src/components/Button'
import { Card } from 'src/components/Card'
import { Table } from 'src/components/Table'
import { useRaisedShadow } from 'src/utils/use-raised-shadows'

import { useFormDispatch, useFormSelector } from 'src/hooks/redux'
import { removeQuestion, updateQuestion } from 'src/features/form/questionSlice'
import { updateQuiz } from 'src/features/form/quizSlice'
import { Actions, QuestionItem, QuestionNumber } from './styles'

type Props = React.PropsWithChildren<{
  question: Question
  number: number
}>

export const QuizFormQuestion: React.FC<Props> = ({ question, number }) => {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)

  const quizInForm = useFormSelector((state) => state.quizInForm)
  const questionInForm = useFormSelector((state) => state.questionInForm)
  const dispatch = useFormDispatch()

  const isEditing = questionInForm.id === question.id

  function onDeleteClick() {
    const newQuestions = quizInForm.questions.filter(
      (q) => q.id !== question.id,
    )

    dispatch(updateQuiz({ questions: newQuestions }))

    if (isEditing) {
      dispatch(removeQuestion())
    }
  }

  function onEditClick() {
    if (isEditing) {
      return dispatch(removeQuestion())
    }

    dispatch(updateQuestion(question))
  }

  return (
    <Reorder.Item
      value={question}
      id={question.id}
      style={{ boxShadow, y, cursor: 'grab' }}
    >
      <Table.Root bg="gray-5" active={isEditing}>
        <Table.Header active={isEditing}>
          <div>
            <QuestionNumber>{number}.</QuestionNumber> {question.title}
          </div>
          <Actions>
            <Button.Root
              variant="secondary"
              size="sm"
              onClick={onEditClick}
              data-testid="edit-question-button"
            >
              <Button.Icon icon={!isEditing ? <EditPencil /> : <Xmark />} />
            </Button.Root>
            <Button.Root variant="danger" size="sm" onClick={onDeleteClick}>
              <Button.Icon icon={<Trash strokeWidth={2} />} />
            </Button.Root>
          </Actions>
        </Table.Header>
        <Table.Body display="flex">
          {Children.toArray(
            question.alternatives.map(({ label, correct, image }) => (
              <QuestionItem>
                <Card.Root disabled correct={correct}>
                  {image ? (
                    <Card.Image src={image} />
                  ) : (
                    <Card.Text>{label}</Card.Text>
                  )}
                </Card.Root>
              </QuestionItem>
            )),
          )}
        </Table.Body>
      </Table.Root>
    </Reorder.Item>
  )
}
