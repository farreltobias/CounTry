import styled from 'styled-components'

export const AlternativesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: repeat(2, 120px);

  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;

    > li {
      height: 150px;
    }
  }

  gap: 2rem;
`

export const CardItem = styled.li`
  width: 100%;
`
