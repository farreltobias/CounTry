import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 10rem margin + 9.625rem padding */
  min-height: calc(100vh - 10rem - 9.625rem);
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 7.5rem;

  padding: 2rem;
  margin: auto;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
`

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
`

export const TradeMark = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  font-size: 0.875rem;
  text-align: center;
  line-height: 1.2;
`

export const PoweredBy = styled.span`
  font-weight: bold;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 22.125rem;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  align-self: stretch;

  font-weight: bold;

  gap: 0.25rem;
`

export const Total = styled.span`
  font-size: 1.25rem;
`

export const Questions = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.03rem;
`
