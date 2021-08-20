import client from 'graphql/client'
import PostTemplate, { Post } from 'templates/Posts'

import { GetPostBySlugQuery, GetPostsQuery } from 'graphql/generated/graphql'
import { GET_POSTS, GET_POST_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

export default function PostPage({ title, content, createdAt }: Post) {
  const router = useRouter()
  if (router.isFallback) return null

  return <PostTemplate inner={{ title, content, createdAt }} />
}

export async function getStaticPaths() {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, { first: 3 })

  const paths = posts.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!post) return { notFound: true }

  return {
    props: {
      title: post.title,
      content: post.content.html,
      createdAt: post.createdAt
    }
  }
}
