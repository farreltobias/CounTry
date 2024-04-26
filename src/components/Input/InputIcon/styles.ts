import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;

  position: absolute;
  bottom: 0.75rem;

  color: ${({ theme }) => theme['gray-2']};

  input:focus + & {
    color: ${({ theme }) => theme['green-light']};
  }
`
