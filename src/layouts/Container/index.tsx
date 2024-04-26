import { Outlet, useParams } from 'react-router-dom'

import { Container } from './styles'
import { useAppSelector } from 'src/hooks/redux'
import { Quiz } from 'src/@types/types'

export type QuizLayoutProps = {
  quiz?: Quiz
}

export function ContainerLayout() {
  const { slug } = useParams()

  const quiz = useAppSelector((state) =>
    state.quizzes.entities.find((q) => q.slug === slug)
  )

  return (
    <Container>
      <Outlet context={{ quiz } satisfies QuizLayoutProps} />
    </Container>
  )
}
