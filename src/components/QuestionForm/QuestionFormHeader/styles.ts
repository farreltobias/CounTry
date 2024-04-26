import styled from 'styled-components'

export const FormHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

export const HeaderSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-2']};
  max-width: 70%;
`
