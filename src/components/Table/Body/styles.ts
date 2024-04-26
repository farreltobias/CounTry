import styled from 'styled-components'

const TableBodyContainer = styled.ul`
  gap: 1rem;
  padding: 1.5rem;
`

export const TableGridBody = styled(TableBodyContainer)`
  display: grid;
  max-height: 100%;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: 144px;

  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: 1fr;
  }

  overflow: auto;
`

export const TableFlexBody = styled(TableBodyContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
