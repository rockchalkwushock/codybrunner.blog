import React from 'react'

import { Container, Icon, Link } from '../commons'
import { StyledFooter } from './elements'

const Footer = ({ buildTime, copyright, icons, links }) => (
  <StyledFooter>
    <Container dir="row">
      {icons.map(icon => (
        <Link ext href={icon.href} key={icon.label} label={icon.label}>
          <Icon icon={icon.className.split(', ')} size="2x" />
        </Link>
      ))}
    </Container>
    <Container>
      <Link ext href={links.src.href} text={`Last build: ${buildTime}`} />
      <Link ext href="https://codybrunner.me" text={copyright} />
      <Link
        ext
        href={links.creativeCommons.href}
        text={links.creativeCommons.text}
      />
      <Link ext href={links.styled.href} text={links.styled.text} />
      <Link ext href={links.gatsby.href} text={links.gatsby.text} />
      <Link ext href={links.now.href} text={links.now.text} />
    </Container>
  </StyledFooter>
)

export default Footer
