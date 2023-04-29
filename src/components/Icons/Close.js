import * as React from 'react'
const SvgClose = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currenColor" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M2.64645 2.64645C2.84171 2.45118 3.15829 2.45118 3.35355 2.64645L12 11.2929L20.6464 2.64652C20.8417 2.45126 21.1583 2.45126 21.3536 2.64652C21.5488 2.84178 21.5488 3.15836 21.3536 3.35363L12.7071 12L21.3535 20.6464C21.5487 20.8416 21.5487 21.1582 21.3535 21.3535C21.1582 21.5487 20.8416 21.5487 20.6464 21.3535L12 12.7071L3.35363 21.3536C3.15837 21.5488 2.84179 21.5488 2.64652 21.3536C2.45126 21.1583 2.45126 20.8417 2.64652 20.6464L11.2929 12L2.64645 3.35355C2.45118 3.15829 2.45118 2.84171 2.64645 2.64645Z"/>
  </svg>
)
export default SvgClose
