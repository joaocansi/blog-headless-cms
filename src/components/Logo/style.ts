import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
`
export const LogoName = styled.h1`
  font-family: 'Rochester';
  font-weight: 400;
  font-size: var(--logo-name-size);
  color: var(--gray-400);
`
export const LogoAbout = styled.h2`
  font-size: var(--logo-about-size);
  font-weight: 300;
  color: var(--gray-500);
`
export const LogoContent = styled.div`
  padding: 3.5rem 3.35rem;
  margin: 0.5rem 0 0.25rem;
  background: var(--red);
  background: linear-gradient(
    90deg,
    var(--red) 0%,
    var(--red) 61%,
    var(--white) 61%,
    var(--white) 67%,
    var(--blue) 67%,
    var(--blue) 100%
  );

  & svg {
    margin: 7.5px;
  }
`
