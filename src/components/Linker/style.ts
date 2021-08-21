import styled from 'styled-components'

type LinkerTagProps = {
  color: string
  colorHovered: string
}

export const LinkerTag = styled.a<LinkerTagProps>`
  color: ${(props) => props.color};
  transition: color 0.25s;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.colorHovered};
  }
`
