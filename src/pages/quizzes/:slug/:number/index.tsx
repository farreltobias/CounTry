import { Check, NavArrowRight } from 'iconoir-react'
import { useParams } from 'react-router'

import { Logo } from 'src/components/Logo'
import { Card } from 'src/components/Card'
import {
  AlternativeItem,
  AlternativeList,
  Current,
  FeedbackButton,
  Footer,
  Header,
  Progress,
  QuizContainer,
  Score,
  Title,
  TitleContainer,
  Total,
} from './styles'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { QuizLayoutProps } from 'src/layouts/Container'
import { createRef, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import {
  addAnsweredQuestion,
  addCorrectAnswer,
} from 'src/features/quiz/quizStatus'
import { Alternative } from 'src/@types/types'

export function Question() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const formRef = createRef<HTMLFormElement>()
  const [answered, setAnswered] = useState<Alternative | null>(null)

  const { number: numberString } = useParams()
  const { quiz } = useOutletContext<QuizLayoutProps>()
  const quizStatus = useAppSelector((state) => state.quizStatus)

  useEffect(() => {
    if (!quiz || !numberString) {
      return navigate('/404')
    }

    if (quizStatus.slug !== quiz.slug) {
      return navigate(`/quizzes/${quiz.slug}`)
    }
  }, [])

  const questionNumber = parseInt(numberString || '0')
  const question = quiz?.questions[questionNumber - 1]

  const nextPage = questionNumber + 1
  const linkTo =
    nextPage > quizStatus.totalQuestions
      ? `/quizzes/${quizStatus.slug}/result`
      : `/quizzes/${quizStatus.slug}/${nextPage}`

  const onSubmitQuestion = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (answered) {
      formRef.current?.reset()
      setAnswered(null)
      return navigate(linkTo)
    }

    const formData = new FormData(event.currentTarget)
    const answer = formData.get('answer')

    if (typeof answer !== 'string') return

    const alternative = question?.alternatives.find(
      (alternative) => alternative.value === answer
    )

    const isCorrect = !!alternative?.correct

    if (isCorrect) {
      dispatch(addCorrectAnswer())
    }

    dispatch(addAnsweredQuestion())
    setAnswered(alternative || null)
  }

  return (
    <QuizContainer ref={formRef} onSubmit={onSubmitQuestion}>
      <Header>
        <TitleContainer>
          <Logo />
          <Title>{quiz?.title}</Title>
        </TitleContainer>

        <Score>
          <Check />
          <span>{quizStatus.correctAnswers}</span>
        </Score>
      </Header>

      <h2>{question?.title}</h2>

      <AlternativeList>
        {question?.alternatives.map((alternative) => (
          <AlternativeItem key={alternative.value}>
            <Card.Root
              name="answer"
              value={alternative.value}
              correct={!!answered && alternative.correct}
              incorrect={
                !!answered &&
                answered.value === alternative.value &&
                !alternative.correct
              }
              disabled={!!answered}
            >
              {alternative.image ? (
                <Card.Image src={alternative.image} alt={alternative.value} />
              ) : (
                <Card.Text>{alternative.label}</Card.Text>
              )}
            </Card.Root>
          </AlternativeItem>
        ))}
      </AlternativeList>

      <Footer>
        <Progress>
          <Current>{questionNumber}</Current>
          <Total>/{quizStatus.totalQuestions}</Total>
        </Progress>

        <FeedbackButton type="submit" data-testid="next-question-button">
          <NavArrowRight />
        </FeedbackButton>
      </Footer>
    </QuizContainer>
  )
}
