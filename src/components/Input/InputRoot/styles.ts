import styled from 'styled-components'

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;

  gap: 0.5rem;
`

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['red-light']};
`

type InputContainerProps = {
  $withoutIcon: boolean
  $error: boolean
}

const InputContainer = styled.input<InputContainerProps>`
  width: 100%;

  color: ${({ theme }) => theme['gray-1']};
  background: transparent;

  transition: border-color 0.1s;

  &::placeholder {
    color: ${({ theme }) => theme['gray-2']};
  }
`

export const DefaultInput = styled(InputContainer)`
  border: 0.125rem solid ${({ theme }) => theme['gray-3']};
  border-radius: 0.5rem;

  box-shadow: 0 0 0 2px
    ${({ $error, theme }) => ($error ? theme['red-light'] : 'transparent')};

  padding: 0.75rem;
  /* padding + icon + padding with icon */
  padding-left: ${({ $withoutIcon }) =>
    !$withoutIcon ? `calc(0.75rem + 1.5rem + 0.5rem)` : '0.75rem'};

  + div {
    left: 0.75rem;
  }
`

export const TitleInput = styled(InputContainer)`
  font-size: 1.5rem;
  font-weight: 700;

  border: none;
  border-bottom: 0.125rem solid
    ${({ theme, $error }) => (!$error ? theme['gray-3'] : theme['red-light'])};

  padding: 0.5rem;
  /* icon + padding with icon */
  padding-left: ${({ $withoutIcon }) =>
    !$withoutIcon ? `calc(1.5rem + 0.5rem)` : '0'};

  + div {
    left: 0;
  }

  &:focus {
    box-shadow: none;
    border-bottom: 0.125rem solid ${({ theme }) => theme['green-light']};
  }
`
