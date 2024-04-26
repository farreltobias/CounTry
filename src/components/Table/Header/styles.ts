import styled from 'styled-components'

type TableHeaderProps = {
  $active: boolean
}

export const TableHeaderContainer = styled.header<TableHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.75rem 1.25rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, $active }) =>
    $active ? theme['green-light'] : theme['gray-3']};

  > label {
    width: 50%;
  }
`
