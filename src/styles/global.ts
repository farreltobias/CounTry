import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  li {
    list-style: none;
  }

  label {
    cursor: inherit;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-light']};
    transition: box-shadow 0.1s;
  }

  body {
    background-color: ${({ theme }) => theme['gray-5']};
    color: ${({ theme }) => theme['gray-1']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Sora, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    html {
      font-size: 80%;
    }
  }
`
