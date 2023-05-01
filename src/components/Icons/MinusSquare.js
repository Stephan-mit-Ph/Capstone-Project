import * as React from 'react'
const SvgMinusSquare = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.25 12C15.25 12.1381 15.1381 12.25 15 12.25H9C8.86193 12.25 8.75 12.1381 8.75 12C8.75 11.8619 8.86193 11.75 9 11.75H15C15.1381 11.75 15.25 11.8619 15.25 12Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMinusSquare
