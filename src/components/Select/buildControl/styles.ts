import styled from 'styled-components'

export const SelectContainer = styled.label`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 0.5rem;
`

export const LabelSpan = styled.span`
  font-weight: bold;
  line-height: 1.5;
`

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['red-light']};
`

export const IconContainer = styled.div`
  display: flex;

  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;

  color: ${({ theme }) => theme['gray-2']};

  .select__control--is-focused & {
    color: ${({ theme }) => theme['green-light']};
  }

  > img {
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`
