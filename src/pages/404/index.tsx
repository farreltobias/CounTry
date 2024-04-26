import { Button } from 'src/components/Button'

import { ButtonContainer, Title } from './styles'

export function NotFound() {
  return (
    <>
      <Title>Page not found...</Title>
      <ButtonContainer>
        <Button.Root size="lg" variant="secondary" to="/">
          Back Home
        </Button.Root>
      </ButtonContainer>
    </>
  )
}
