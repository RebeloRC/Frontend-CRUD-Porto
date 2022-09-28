import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  body{
    background: #E5E5E5;
    color: #13181E;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
  html {
    scroll-behavior: smooth;
  }
`
