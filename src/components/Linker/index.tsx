import Link from 'next/link'
import { ReactNode } from 'react'
import { LinkerTag } from './style'

type LinkerProps = {
  href: string
  color?: string
  colorHovered?: string
  children: ReactNode
}

const Linker = ({
  href,
  children,
  color = '#000',
  colorHovered = '#000'
}: LinkerProps) => {
  return (
    <Link passHref href={href}>
      <LinkerTag color={color} colorHovered={colorHovered}>
        {children}
      </LinkerTag>
    </Link>
  )
}

export default Linker
