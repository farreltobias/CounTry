import styled from 'styled-components'

export const QuizCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 9rem;
  padding: 0.375rem;

  background-color: ${({ theme }) => theme['gray-5']};
  border-color: ${({ theme }) => theme['gray-3']};

  border-width: 0.2rem;
  border-bottom-width: 0.35rem;
  border-style: solid;
  border-radius: 0.5rem;
`

export const QuizCardHeader = styled.header`
  display: flex;
  gap: 0.75rem;

  width: 100%;
  padding: 0.75rem;
`

export const Icon = styled.span`
  font-size: 2rem;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    align-self: stretch;

    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1rem;
    font-weight: normal;
  }

  > p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-2']};
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-top: 0.2rem solid ${({ theme }) => theme['gray-3']};
  padding: 0.35rem;
`

export const Separator = styled.div`
  width: 0.2rem;
  height: 75%;

  margin: 0 0.25rem;

  background-color: ${({ theme }) => theme['gray-3']};
`

export const FooterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 0.4rem;

  color: ${({ theme }) => theme['gray-1']};
  background: transparent;

  border-radius: 0.25rem;

  &:last-child {
    color: ${({ theme }) => theme['red-light']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-4']};
  }
`
