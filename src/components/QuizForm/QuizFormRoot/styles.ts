import styled from 'styled-components'

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 5rem 7rem;

  @media screen and (max-width: 1440px) {
    padding: 2rem;
    padding-top: 4rem;
  }

  overflow: auto;
`