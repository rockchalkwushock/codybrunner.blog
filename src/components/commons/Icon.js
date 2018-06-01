import React from 'react'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft'
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faRss from '@fortawesome/fontawesome-free-solid/faRss'

// By setting things up like this react-fontawesome knows of the icons
// I am also only using these icons from the libraries so less overhead.
fontawesome.library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faTwitter,
  faYoutube,
  faArrowCircleLeft,
  faArrowCircleRight,
  faEnvelope,
  faRss
)

const UnstyledIcon = props => <FontAwesomeIcon {...props} />

const StyledIcon = styled(UnstyledIcon)``

const SiteIcon = ({ icon, size }) => <StyledIcon icon={icon} size={size} />

export default SiteIcon
