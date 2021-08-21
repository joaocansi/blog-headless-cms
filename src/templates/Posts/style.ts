import styled from 'styled-components'

export const Header = styled.div`
  max-width: 700px;
  margin: 3rem auto 0;
  margin-top: 3rem;
  padding: 0 1rem;
`
export const Content = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 5rem auto 5rem;

  p,
  pre,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  ol,
  pre,
  a,
  iframe {
    margin-bottom: 24px;
  }

  ul,
  ol {
    padding-left: 18px;
  }

  ol {
    padding-left: 25px;
  }

  li {
    font-size: 1.4em;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
  }

  h5 {
    font-size: 16px;
    font-weight: 300;
  }

  h6 {
    font-size: 14px;
    font-weight: 200;
  }

  p {
    text-align: left;
    font-family: 'Roboto Mono', Helvetica, Arial, sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    line-height: 22px;
  }

  img {
    width: 100%;
    height: auto;
  }

  iframe {
    width: 100%;
    height: 400px;
  }

  pre {
    padding: 1rem;
    font-size: 1.5em;
    border-radius: 10px;
    background: var(--black-700);
    color: var(--white);
  }
`
export const PostTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 300;
`
export const PostDate = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5em;
  font-weight: 300;
  color: var(--gray-600);

  span {
    color: var(--green);
  }
`
export const PostLinkContainer = styled.div`
  margin-top: 4rem;
`
