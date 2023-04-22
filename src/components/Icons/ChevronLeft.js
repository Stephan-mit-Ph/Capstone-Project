import * as React from 'react'
const SvgChevronLeft = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M15.325 4.62a.5.5 0 0 1 .055.705L9.659 12l5.72 6.675a.5.5 0 1 1-.759.65l-6-7a.5.5 0 0 1 0-.65l6-7a.5.5 0 0 1 .705-.055Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronLeft
