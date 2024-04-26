import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { Logo } from 'src/components/Logo'
import { Button } from 'src/components/Button'

import {
  ButtonContainer,
  CenterContainer,
  Footer,
  MainContainer,
  PoweredBy,
  Questions,
  TextContainer,
  Title,
  Total,
  TradeMark,
} from './styles'
import { QuizLayoutProps } from 'src/layouts/Container'
import { useAppDispatch } from 'src/hooks/redux'
import { addQuizStatus, removeQuizStatus } from 'src/features/quiz/quizStatus'

export function Quiz() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { quiz } = useOutletContext<QuizLayoutProps>()

  useEffect(() => {
    if (!quiz) {
      return navigate('/404')
    }

    dispatch(removeQuizStatus())

    dispatch(
      addQuizStatus({
        slug: quiz.slug,
        totalQuestions: quiz.questions.length,
      }),
    )
  }, [])

  return (
    <MainContainer>
      <CenterContainer>
        <TextContainer>
          <Title>{quiz?.title}</Title>
          <TradeMark>
            <PoweredBy>Powered by</PoweredBy>
            <Logo size="sm" />
          </TradeMark>
        </TextContainer>

        <ButtonContainer>
          <Button.Root to={`/quizzes/${quiz?.slug}/1`} variant="secondary">
            Start Quiz
          </Button.Root>
        </ButtonContainer>
      </CenterContainer>

      <Footer>
        <Total>{quiz?.questions.length}</Total>
        <Questions>questions</Questions>
      </Footer>
    </MainContainer>
  )
}
