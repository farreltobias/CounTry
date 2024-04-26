import { Button } from 'src/components/Button'
import { Logo } from 'src/components/Logo'

import { ButtonContainer, Subtitle, Title } from './styles'

export function Home() {
  return (
    <>
      <Title>
        <span>Welcome to</span>
        <Logo size="lg" rotate />
      </Title>
      <Subtitle>
        The best quiz platform for geography countries curiosities! Try out your
        knowledge and challenge your friends with your own custom quizzes! Start
        by clicking the button bellow!
      </Subtitle>
      <ButtonContainer>
        <Button.Root size="lg" variant="secondary" to={'/quizzes'}>
          Create your own Quiz!
        </Button.Root>
      </ButtonContainer>
    </>
  )
}
