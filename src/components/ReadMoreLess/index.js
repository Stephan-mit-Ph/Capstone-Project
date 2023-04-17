import { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    font-weight: 500;
    color: lightblue;
    cursor: pointer;
  `

export default function ReadMoreLess({ text, content }) {
  const [isReadMore, setReadMore] = useState(false)


  

  const toggle = () => {
    setReadMore((prevState) => !prevState)
  }

  return (
    
      <div>
        {content.length < 100 ? content : isReadMore ? content + ' ' : content.slice(0, 100)}
        <StyledButton onClick={toggle}>{content.length < 100 ? '' : isReadMore ? ' show less' : '... read more'}</StyledButton>
      </div>
    
  )
}
