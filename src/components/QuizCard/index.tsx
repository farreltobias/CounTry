import { EditPencil, OpenInWindow, Trash } from 'iconoir-react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setQuizzes } from 'src/api/storage'
import { removeQuiz } from 'src/features/quizzes/quizzesSlice'
import { useAppSelector } from 'src/hooks/redux'

import {
  Footer,
  FooterButton,
  Icon,
  QuizCardContainer,
  QuizCardHeader,
  Separator,
  Text,
} from './styles'

type Props = {
  title: string
  icon: string
  slug: string
  total: number
}

export const QuizCard: React.FC<Props> = ({ icon, title, total, slug }) => {
  const dispatch = useDispatch()
  const quizzes = useAppSelector((state) => state.quizzes.entities)

  const onDeleteClick = async () => {
    dispatch(removeQuiz(slug))

    const newQuizzes = quizzes.filter((quiz) => quiz.slug !== slug)
    await setQuizzes(newQuizzes)
  }

  return (
    <QuizCardContainer>
      <QuizCardHeader>
        <Icon>{icon}</Icon>
        <Text>
          <h1>{title}</h1>
          <p>{total} questions</p>
        </Text>
      </QuizCardHeader>
      <Footer>
        <FooterButton
          as={Link}
          to={`/quizzes/${slug}`}
          data-testid="open-quiz-button"
        >
          <OpenInWindow strokeWidth={2} />
        </FooterButton>
        <Separator />
        <FooterButton
          as={Link}
          to={`/quizzes/${slug}/edit`}
          data-testid="edit-quiz-button"
        >
          <EditPencil strokeWidth={2} />
        </FooterButton>
        <Separator />
        <FooterButton onClick={onDeleteClick}>
          <Trash strokeWidth={2} />
        </FooterButton>
      </Footer>
    </QuizCardContainer>
  )
}
