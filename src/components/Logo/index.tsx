import { LogoContainer, LogoName, LogoContent, LogoAbout } from './style'
import { Twitter, Linkedin, Instagram, Github } from '@styled-icons/fa-brands'
import LinkIcon from 'components/LinkIcon'

export default function Logo() {
  return (
    <LogoContainer>
      <LogoName>João Guilherme</LogoName>
      <LogoContent>
        <LinkIcon
          href="https://twitter.com/joaocansi"
          icon={Twitter}
          size={24}
        />
        <LinkIcon
          href="https://twitter.com/joaocansi"
          icon={Instagram}
          size={24}
        />
        <LinkIcon
          href="https://twitter.com/joaocansi"
          icon={Linkedin}
          size={24}
        />
        <LinkIcon
          href="https://twitter.com/joaocansi"
          icon={Github}
          size={24}
        />
      </LogoContent>
      <LogoAbout>Programming the future</LogoAbout>
    </LogoContainer>
  )
}
