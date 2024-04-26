import styled from 'styled-components'

export const AlternativesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(2, minmax(128px, 1fr));

  > li {
    margin: 0 auto;
  }

  gap: 2rem;
`
