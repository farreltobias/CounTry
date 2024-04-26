import styled from 'styled-components'

export const QuestionItem = styled.li`
  width: 15.625rem;
  height: 8rem;
`

export const QuestionNumber = styled.span`
  color: ${({ theme }) => theme['green-light']};
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`
