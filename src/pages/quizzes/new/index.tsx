import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { QuestionForm } from 'src/components/QuestionForm'
import { QuizForm } from 'src/components/QuizForm'
import { removeQuestion } from 'src/features/form/questionSlice'

import { removeQuiz } from 'src/features/form/quizSlice'
import { useFormSelector } from 'src/hooks/redux'

export function NewQuiz() {
  const dispatch = useDispatch()

  const quizInForm = useFormSelector((state) => state.quizInForm)

  useEffect(() => {
    dispatch(removeQuestion())
    dispatch(removeQuiz())
  }, [])

  return (
    <>
      <QuestionForm.Root>
        <QuestionForm.Header />
        <QuestionForm.Inputs.Root>
          <QuestionForm.Inputs.Title />
          <QuestionForm.Inputs.Theme />
          <QuestionForm.Inputs.Alternatives />
        </QuestionForm.Inputs.Root>
      </QuestionForm.Root>

      <QuizForm.Root>
        <QuizForm.Header />
        {quizInForm.questions.length ? (
          <QuizForm.List>
            {quizInForm.questions.map((question, index) => (
              <QuizForm.Question
                key={question.id}
                question={question}
                number={index + 1}
              />
            ))}
          </QuizForm.List>
        ) : (
          <QuizForm.Empty />
        )}
      </QuizForm.Root>
    </>
  )
}
