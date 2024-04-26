import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { useFormDispatch, useFormSelector } from 'src/hooks/redux'
import { FormLayoutContext } from 'src/layouts/Form'
import { QuestionForm } from 'src/components/QuestionForm'
import { QuizForm } from 'src/components/QuizForm'
import { updateQuiz } from 'src/features/form/quizSlice'

import { QuizMapper } from 'src/utils/quiz-mapper'
import { removeQuestion } from 'src/features/form/questionSlice'

export function EditQuiz() {
  const navigate = useNavigate()
  const dispatch = useFormDispatch()

  const { quiz: initialQuiz } = useOutletContext<FormLayoutContext>()
  const quizInForm = useFormSelector((state) => state.quizInForm)

  useEffect(() => {
    dispatch(removeQuestion())

    if (!initialQuiz) {
      return navigate('/quizzes')
    }

    const editableQuiz = QuizMapper.toEditableQuiz(initialQuiz)
    dispatch(updateQuiz(editableQuiz))
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
