import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 672px 1fr;
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;

    > * {
      flex: 1;
    }
  }

  height: 100vh;

  padding: 0.75rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: reverse;

  overflow: auto;
`

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
