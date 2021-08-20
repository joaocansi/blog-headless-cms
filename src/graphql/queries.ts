import { gql } from 'graphql-request'

export const GET_POSTS = gql`
  query getPosts($first: Int) {
    posts(first: $first) {
      id
      title
      slug
      tags
      createdAt
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      tags
      content {
        html
      }
      createdAt
    }
  }
`
