import styled from 'styled-components'

const SIZES = {
  sm: '0.875rem',
  md: '1.5rem',
  lg: '6rem',
}

type Props = {
  size: keyof typeof SIZES
}

export const LogoContainer = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  font-size: ${({ size }) => SIZES[size]};

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme['gray-1']};

    &:focus {
      box-shadow: none;
    }
  }
`

export const TagContainer = styled(LogoContainer)`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;

  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme['gray-3']};

  border-radius: 0rem 0rem 0.75rem 0rem;
`
