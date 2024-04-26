import styled from 'styled-components'

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: 1rem;
  height: 100%;
  
  color: ${({ theme }) => theme['gray-2']};
`

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['red-light']};
`
