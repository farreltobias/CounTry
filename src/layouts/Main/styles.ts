import styled, { createGlobalStyle } from 'styled-components'
import img from 'src/assets/background.svg'

export const GlobalStyle = createGlobalStyle`
  html, body, div#root {
    height: 100%;
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 0.75rem;

  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5.125rem;

  padding: 0.625rem;
  border-bottom: 0.125rem solid ${({ theme }) => theme['gray-3']};
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  padding-bottom: 5%;

  text-align: center;
  max-width: 42.5rem;

  gap: 3.625rem;
`
