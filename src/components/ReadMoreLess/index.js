import { useState } from 'react'
import { StyledProductDetails, StyledButton } from './ReadMoreLess.styled'

export default function ReadMoreLess({ text, content }) {
  const [isReadMore, setReadMore] = useState(false)

  const toggle = () => {
    setReadMore((prevState) => !prevState)
  }

  return (
    <StyledProductDetails>
      {content.length < 100 ? content : isReadMore ? content + ' ' : content.slice(0, 100)}
      <StyledButton onClick={toggle}>{content.length < 100 ? '' : isReadMore ? ' show less' : '... read more'}</StyledButton>
    </StyledProductDetails>
  )
}
