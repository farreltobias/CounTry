import styled from 'styled-components'

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 5rem;
  gap: 2rem;

  @media screen and (max-width: 1440px) {
    padding: 2rem;
    padding-top: 4rem;
  }

  height: 100%;
  overflow: auto;

  background: ${({ theme }) => theme['gray-4']};
  border-radius: 0.5rem;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 6px 12px 0px rgba(0, 0, 0, 0.25);
`
