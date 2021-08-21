import { StyledIcon } from '@styled-icons/styled-icon'
import Linker from 'components/Linker'

type LinkIconProps = {
  href: string
  icon: StyledIcon
  size: number
}

export default function LinkIcon({ href, icon: Icon, size }: LinkIconProps) {
  return (
    <Linker color="#000000" colorHovered="#383838" href={href}>
      <Icon size={size} />
    </Linker>
  )
}
