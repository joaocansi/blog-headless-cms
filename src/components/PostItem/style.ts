import styled from 'styled-components'

interface TagProps {
  color: string
}

export const PostItemContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`
export const PostItemDate = styled.h6`
  font-size: 1.5em;
  font-weight: 300;
  color: var(--gray-600);
  margin-bottom: -0.5rem;
`
export const PostItemTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2em;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const PostItemTagsContainer = styled.div`
  display: flex;
  grid-gap: 7.5px;
  margin-bottom: 0.85rem;
`
export const PostItemTag = styled.div<TagProps>`
  background: ${(props) => props.color};
  border-radius: 13px;
  padding: 7px 9px;
  font-size: 1.15em;
  color: var(--white);
  cursor: pointer;
  transition: filter 0.25s;

  &:hover {
    filter: brightness(0.975);
  }
`
export const PostItemLink = styled.a`
  color: var(--gray-600);
  transition: filter 0.25s;

  &:hover {
    filter: brightness(0.95);
  }
`
