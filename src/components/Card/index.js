import React from 'react'

import { Link } from '../commons'
import {
  CardContainer,
  StyledTitle,
  StyledInfo,
  StyledDescription
} from './elements'

const Card = ({ date, description, link, time, title, words }) => (
  <CardContainer align="unset" justify="unset" pad="1rem 0.75rem">
    <div>
      <StyledTitle>
        <Link href={link} label={title} text={title} />
      </StyledTitle>
      <StyledInfo>
        {date} • {time} minutes • {words} words
      </StyledInfo>
    </div>
    <div>
      <StyledDescription>{description}</StyledDescription>
    </div>
  </CardContainer>
)

export default Card
