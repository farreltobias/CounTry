import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 10rem - 9.625rem);
`

export const TradeMark = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  text-align: center;
`

export const QuizName = styled.span`
  font-size: 0.75rem;
  letter-spacing: calc(0.2 * 0.75rem);
  color: ${({ theme }) => theme['gray-2']};
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 60%;
  gap: 2.5rem;

  padding: 2rem;
  margin: auto;
`

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`

export const Answers = styled.span`
  color: ${({ theme }) => theme['green-light']};
`

export const Options = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1.25rem;
`
