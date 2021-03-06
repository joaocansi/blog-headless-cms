import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f9f9f9;
    --white: #ffffff;
    --black: #000000;
    --black-700: #2A2929;
    --red: #FFC4C4;
    --blue: #A1E8FF;
    --green: #65EB72;
    --gray-400: #8B8B8B;
    --gray-500: #7C7C7C;
    --gray-600: #666665;

    --container: 980px;

    --logo-name-size: 4.5em;
    --logo-about-size: 2em;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    background-color: var(--bg);
  }

  body {
    font-family: 'Roboto Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
export default GlobalStyle

export const Container = styled.div`
  width: 90%;
  max-width: var(--container);
  margin: 0 auto;
  min-height: 100vh;
`
export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 75px;
  margin: 8rem 0;
`
export const Footer = styled.footer`
  position: static;
  bottom: 0;
  text-align: center;
  font-size: 1.25em;
  padding: 1.5rem;
`
