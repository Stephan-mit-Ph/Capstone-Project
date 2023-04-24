import * as React from 'react'
const SvgChevronDown = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M4.62 8.675a.5.5 0 0 1 .705-.055L12 14.342l6.675-5.722a.5.5 0 1 1 .65.76l-7 6a.5.5 0 0 1-.65 0l-7-6a.5.5 0 0 1-.055-.705Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronDown
