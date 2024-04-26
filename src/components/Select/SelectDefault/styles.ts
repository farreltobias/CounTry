import Select from 'react-select'
import styled from 'styled-components'

type StyledSelectProps = {
  $error: boolean
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  width: 100%;

  &.select--is-disabled {
    opacity: 0.5;
  }

  .select__control {
    border: 0.125rem solid ${({ theme }) => theme['gray-3']};
    border-radius: 0.5rem;

    padding-left: calc(0.75rem + 1.5rem + 0.5rem);
    background-color: transparent;

    box-shadow: 0 0 0 2px
      ${({ theme, $error }) => (!$error ? 'transparent' : theme['red-light'])};

    &:hover {
      border: 0.125rem solid ${({ theme }) => theme['gray-3']};
    }

    &.select__control--is-focused {
      box-shadow: 0 0 0 2px ${({ theme }) => theme['green-light']};
    }

    .select__value-container {
      padding: 0;

      .select__placeholder {
        color: ${({ theme }) => theme['gray-2']};
      }

      .select__multi-value__label,
      .select__multi-value__remove,
      .select__single-value {
        margin: 0;
        color: ${({ theme }) => theme['gray-1']};
      }

      .select__multi-value {
        background-color: ${({ theme }) => theme['gray-2']};

        .select__multi-value__label {
          display: flex;
          align-items: center;

          img {
            width: 1rem;
            height: 100%;
            margin-right: 0.5rem;
            object-fit: contain;
          }
        }

        .select__multi-value__remove {
          background-color: ${({ theme }) => theme['gray-2']};

          &:hover {
            color: ${({ theme }) => theme['red-dark']};
            background-color: ${({ theme }) => theme['red-light']};
          }
        }
      }
    }

    .select__indicators {
      .select__indicator-separator {
        display: none;
      }

      .select__dropdown-indicator {
        color: ${({ theme }) => theme['gray-1']};
        padding: 0.75rem;
      }
    }
  }

  .select__menu {
    .select__menu-list {
      background-color: ${({ theme }) => theme['gray-4']};

      .select__option {
        &.select__option--is-focused {
          background-color: ${({ theme }) => theme['gray-3']};
        }

        img {
          width: 1rem;
          height: 100%;
          margin-right: 0.5rem;
          object-fit: contain;
        }
      }

      .select__option--is-selected {
        background-color: ${({ theme }) => theme['gray-2']};
        color: ${({ theme }) => theme['gray-1']};
      }
    }
  }
`
