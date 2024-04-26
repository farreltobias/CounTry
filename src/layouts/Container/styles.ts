import styled from 'styled-components'

export const Container = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 3.875rem 6.75rem 5.75rem 6.75rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    padding-top: 4rem;
  }

  background: ${({ theme }) => theme['gray-4']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
