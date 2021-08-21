import LinkIcon from 'components/LinkIcon'
import { ArrowLeft } from '@styled-icons/fa-solid'
import { getMonthInitials } from 'helpers/DateHandler'
import { useState } from 'react'
import { Container } from 'styles/global'
import {
  Header,
  Content,
  PostTitle,
  PostDate,
  PostLinkContainer
} from './style'

export type Post = {
  title: string
  content: string
  createdAt: string
}

type PostProps = {
  inner: Post
}

const PostTemplate = ({ inner }: PostProps) => {
  const [date] = useState<Date>(new Date(inner.createdAt))
  return (
    <Container>
      <PostLinkContainer>
        <LinkIcon href="/" size={32} icon={ArrowLeft} />
      </PostLinkContainer>
      <Header>
        <PostTitle>{inner.title}</PostTitle>
        <PostDate>
          <span>◉</span> {getMonthInitials(date.getMonth())} {date.getDate()},
          {date.getFullYear()}
        </PostDate>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: inner.content }} />
    </Container>
  )
}

export default PostTemplate
