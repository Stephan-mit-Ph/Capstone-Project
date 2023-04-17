import * as React from 'react'
const SvgMinus = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 11.75a.75.75 0 0 1 .75-.75h21a.75.75 0 0 1 0 1.5h-21a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMinus
