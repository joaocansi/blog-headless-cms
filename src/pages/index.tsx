import Logo from 'components/Logo'
import client from 'graphql/client'

import { GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { Container } from 'styles/global'

type HomeProps = {
  posts: GetPostsQuery[]
}

export default function Home({ posts }: HomeProps) {
  console.log(posts)
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      posts
    }
  }
}
