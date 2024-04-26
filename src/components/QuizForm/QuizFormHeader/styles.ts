import styled from 'styled-components'

export const FormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 2rem;

  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
`

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > p {
    color: ${({ theme }) => theme['gray-2']};
    font-size: 0.875rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`
