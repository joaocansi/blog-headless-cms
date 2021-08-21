import Logo from 'components/Logo'
import PostItem from 'components/PostItem'
import client from 'graphql/client'

import { GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { Container, PostsContainer } from 'styles/global'

export default function Home({ posts }: GetPostsQuery) {
  return (
    <Container>
      <Logo />
      <PostsContainer>
        {posts.map((item) => {
          return (
            <PostItem
              key={`post-${item.id}`}
              inner={{
                id: item.id,
                slug: item.slug || '',
                title: item.title,
                tags: item.tags,
                createdAt: new Date(item.createdAt)
              }}
            />
          )
        })}
      </PostsContainer>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      posts
    },
    revalidate: 60
  }
}
