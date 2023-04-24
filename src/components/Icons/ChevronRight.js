import * as React from 'react'
const SvgChevronRight = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M8.675 4.62a.5.5 0 0 1 .705.055l6 7a.5.5 0 0 1 0 .65l-6 7a.5.5 0 1 1-.76-.65L14.342 12 8.62 5.325a.5.5 0 0 1 .055-.705Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronRight
