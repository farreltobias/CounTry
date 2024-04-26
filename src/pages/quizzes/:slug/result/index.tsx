import { useNavigate, useOutletContext } from 'react-router-dom'
import { Logo } from 'src/components/Logo'
import { Button } from 'src/components/Button'

import {
  Answers,
  CenterContainer,
  MainContainer,
  Options,
  QuizName,
  Title,
  TradeMark,
} from './styles'
import { useEffect } from 'react'
import { useAppSelector } from 'src/hooks/redux'
import { QuizLayoutProps } from 'src/layouts/Container'

export function Result() {
  const navigate = useNavigate()

  const { quiz } = useOutletContext<QuizLayoutProps>()
  const quizStatus = useAppSelector((state) => state.quizStatus)

  useEffect(() => {
    if (!quiz) {
      return navigate('/404')
    }

    const didNotAnswerAllQuestions =
      quizStatus.totalQuestions !== quizStatus.answeredQuestions

    if (quizStatus.slug !== quiz.slug || didNotAnswerAllQuestions) {
      return navigate(`/quizzes/${quiz.slug}`)
    }
  }, [])

  return (
    <MainContainer>
      <TradeMark>
        <Logo />
        <QuizName>{quiz?.title}</QuizName>
      </TradeMark>

      <CenterContainer>
        <Title>
          You got <Answers>{quizStatus.correctAnswers}</Answers> answers right!
        </Title>

        <Options>
          <Button.Root
            to={`/quizzes/${quizStatus.slug}`}
            variant="secondary"
            size="md"
          >
            Restart Quiz
          </Button.Root>
          <Button.Root to="/quizzes/" variant="secondary" size="md">
            Create your own quiz
          </Button.Root>
        </Options>
      </CenterContainer>
    </MainContainer>
  )
}
