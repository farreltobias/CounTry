import { Outlet } from 'react-router-dom'
import { Button } from 'src/components/Button'
import { Logo } from 'src/components/Logo'

import { Center, Container, GlobalStyle, Header, Nav } from './styles'

export function MainLayout() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo />
          <Nav>
            <Button.Root variant="secondary" to={'/quizzes'}>
              My Quizzes
            </Button.Root>
            <Button.Root variant="secondary" to={'/quizzes/new'}>
              Create Quiz
            </Button.Root>
          </Nav>
        </Header>
        <Center>
          <Outlet />
        </Center>
      </Container>
    </>
  )
}
