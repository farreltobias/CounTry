import styled from 'styled-components'

export const QuizContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  > h2 {
    text-align: center;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  align-self: stretch;

  gap: 5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`

export const Title = styled.h1`
  font-size: 0.75rem;
  letter-spacing: calc(0.2 * 0.75rem);
  color: ${({ theme }) => theme['gray-2']};

  text-align: justify;
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1.25rem;
  color: ${({ theme }) => theme['green-light']};

  gap: 0 0.25rem;

  font-size: 1.25rem;
  font-weight: bold;

  border: 1px solid ${({ theme }) => theme['green-light']};
  border-radius: 0.5rem;
`

export const AlternativeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 34.125rem;
  height: 18.875rem;

  gap: 2.875rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    height: auto;
    gap: 1.5rem;
  }
`

export const AlternativeItem = styled.li`
  width: 15.625rem;
  height: 8rem;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  align-self: stretch;
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;
`

export const Current = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`

export const Total = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: calc(0.03 * 1.25rem);
`

export const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem 0.5625rem 0.625rem 0.6875rem;
  border-radius: 100%;

  color: ${({ theme }) => theme['gray-2']};
  background-color: ${({ theme }) => theme['gray-3']};

  &:hover {
    color: ${({ theme }) => theme['gray-1']};
    background-color: ${({ theme }) => theme['gray-2']};
    transition: background-color 0.1s;
  }

  &:active {
    color: ${({ theme }) => theme['green-dark']};
    background-color: ${({ theme }) => theme['green-light']};
    transition: background-color 0.1s;
  }
`
