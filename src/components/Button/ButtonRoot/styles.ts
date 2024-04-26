import styled from 'styled-components'

type ButtonContainerProps = {
  size: 'sm' | 'md' | 'lg'
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  flex: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '0'
      case 'md':
        return '1'
      case 'lg':
        return '1 0 auto'
    }
  }};

  padding: 0.75rem 1rem;
  cursor: pointer;

  white-space: nowrap;
  font-weight: bold;
  text-decoration: none;

  border-radius: 0.5rem;

  transition: background-color 0.1s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    border-color: ${({ theme }) => theme['gray-2']};
  }
`

export const PrimaryButton = styled(ButtonContainer)`
  background: ${({ theme }) => theme['green-dark']};
  color: ${({ theme }) => theme['white']};

  &:hover {
    background: ${({ theme }) => theme['green-light']};
  }
`

export const SecondaryButton = styled(ButtonContainer)`
  background: ${({ theme }) => theme['gray-4']};
  color: ${({ theme }) => theme['gray-1']};
  border: 1px solid ${({ theme }) => theme['gray-3']};

  &:hover {
    background: ${({ theme }) => theme['gray-3']};
  }
`

export const DangerButton = styled(ButtonContainer)`
  background: ${({ theme }) => theme['red-light']};
  color: ${({ theme }) => theme['white']};

  &:hover {
    background: ${({ theme }) => theme['red-dark']};
  }
`
