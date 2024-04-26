import styled from 'styled-components'

type TableSectionProps = {
  $bg: 'gray-5' | 'transparent'
  $active: boolean
}

export const TableSection = styled.section<TableSectionProps>`
  display: flex;
  flex-direction: column;

  user-select: none;

  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;

  border-color: ${({ theme, $active }) =>
   $active ? theme['green-light'] : theme['gray-3']};

  background-color: ${({ theme, $bg }) =>
    $bg !== 'transparent' ? theme[$bg] : 'transparent'};
`
