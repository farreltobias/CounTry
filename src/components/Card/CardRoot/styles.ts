import styled from 'styled-components'

export const CardInput = styled.input`
  appearance: none;
  position: fixed;
  opacity: 0;
  pointer-events: none;

  &:not(:disabled) + label {
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme['gray-4']};

      > div {
        border: 0.25rem solid ${({ theme }) => theme['gray-2']};
      }
    }
  }

  &:focus + label {
    background-color: ${({ theme }) => theme['gray-4']};

    > div {
      border: 0.25rem solid ${({ theme }) => theme['gray-2']};
    }
  }

  &:checked + label.correct-as-checked {
    border-color: ${({ theme }) => theme['green-light']};

    > div {
      border-color: ${({ theme }) => theme['green-light']} !important;
      background-color: ${({ theme }) => theme['green-light']};

      .check {
        opacity: 1;
      }

      .minus,
      .cancel {
        opacity: 0;
      }
    }
  }
`

export const CardLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* width: 15.625rem;
  height: 8rem; */

  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;

  position: relative;

  background-color: ${({ theme }) => theme['gray-5']};
  border-color: ${({ theme }) => theme['gray-3']};

  border-width: 0.2rem;
  border-bottom-width: 0.35rem;
  border-style: solid;
  border-radius: 0.5rem;

  transition: border 0.1s;

  input[type='radio']:checked
    + &:not(.correct-as-checked):not(.incorrect):not(.correct) {
    border-color: ${({ theme }) => theme['blue-light']};

    > div {
      border-color: ${({ theme }) => theme['blue-light']};
      background-color: ${({ theme }) => theme['blue-light']};

      .minus {
        opacity: 1;
      }
    }
  }

  &.incorrect {
    border-color: ${({ theme }) => theme['red-light']};

    > div {
      border-color: ${({ theme }) => theme['red-light']};
      background-color: ${({ theme }) => theme['red-light']};

      .cancel {
        opacity: 1;
      }
    }
  }

  &.correct {
    border-color: ${({ theme }) => theme['green-light']};

    > div {
      border-color: ${({ theme }) => theme['green-light']};
      background-color: ${({ theme }) => theme['green-light']};

      .check {
        opacity: 1;
      }
    }
  }
`

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 0.75rem;
  top: 0.75rem;

  border: 0.25rem solid ${({ theme }) => theme['gray-3']};
  border-radius: 100%;
  transition: background-color 0.1s, border-color 0.1s;

  > div {
    position: relative;

    > svg,
    span {
      width: 1.125rem;
      height: 1.125rem;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      opacity: 0;
      transition: opacity 0.1s;
    }

    .minus {
      color: ${({ theme }) => theme['blue-dark']};
    }

    .check {
      color: ${({ theme }) => theme['green-dark']};
    }

    .cancel {
      color: ${({ theme }) => theme['red-dark']};
    }
  }
`
