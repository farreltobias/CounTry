import { Outlet, useParams } from 'react-router-dom'
import { Quiz } from 'src/@types/types'
import { useAppSelector } from 'src/hooks/redux'

import { Container } from './styles'

export type QuizLayoutProps = {
  quiz?: Quiz
}

export function ContainerLayout() {
  const { slug } = useParams()

  const quiz = useAppSelector((state) =>
    state.quizzes.entities.find((q) => q.slug === slug),
  )

  return (
    <Container>
      <Outlet context={{ quiz } satisfies QuizLayoutProps} />
    </Container>
  )
}
