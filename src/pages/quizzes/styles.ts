import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100%;

  > section {
    height: 80%;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-2']};
  max-width: 70%;
`
