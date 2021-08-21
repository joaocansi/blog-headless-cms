import Link from 'next/link'

import { ArrowRight } from '@styled-icons/fa-solid'
import { getMonthInitials } from 'helpers/DateHandler'
import { useState } from 'react'
import {
  PostItemContainer,
  PostItemDate,
  PostItemLink,
  PostItemTag,
  PostItemTagsContainer,
  PostItemTitle
} from './style'
import Linker from 'components/Linker'

type PostItem = {
  id: string
  title: string
  tags: string
  slug: string
  createdAt: Date
}

type PostItemProps = {
  inner: PostItem
}

const PostItem = ({ inner }: PostItemProps) => {
  const [tags] = useState(inner.tags.split(';'))

  return (
    <PostItemContainer>
      <PostItemDate>
        {getMonthInitials(inner.createdAt.getMonth())}{' '}
        {inner.createdAt.getDate()}, {inner.createdAt.getFullYear()}
      </PostItemDate>
      <Linker href={`/${inner.slug}`}>
        <PostItemTitle>{inner.title}</PostItemTitle>
      </Linker>
      <PostItemTagsContainer>
        {tags.map((item) => {
          const [tag, color] = item.split(':')
          return (
            <PostItemTag key={`post-${inner.id}-tag-${tag}`} color={color}>
              {tag}
            </PostItemTag>
          )
        })}
      </PostItemTagsContainer>
      <Link passHref href={`/${inner.slug}`}>
        <PostItemLink>
          <ArrowRight size={32} />
        </PostItemLink>
      </Link>
    </PostItemContainer>
  )
}

export default PostItem
