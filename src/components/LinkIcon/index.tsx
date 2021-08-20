import Link from 'next/link'
import { LinkIconRef } from './style'
import { StyledIcon } from '@styled-icons/styled-icon'

type LinkIconProps = {
  href: string
  icon: StyledIcon
  size: number
}

export default function LinkIcon({ href, icon: Icon, size }: LinkIconProps) {
  return (
    <Link passHref href={href}>
      <LinkIconRef>
        <Icon size={size} />
      </LinkIconRef>
    </Link>
  )
}
