import { getMonthInitials } from 'helpers/DateHandler'
import { useState } from 'react'
import { Container } from 'styles/global'
import { Header, Content } from './style'

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
  console.log(inner.content)

  return (
    <Container>
      <Header>
        <h1>{inner.title}</h1>
        <p>
          Published {getMonthInitials(date.getMonth())} {date.getDate()},
          {date.getFullYear()}
        </p>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: inner.content }} />
    </Container>
  )
}

export default PostTemplate
