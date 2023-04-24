import * as React from 'react'
const SvgChevronUp = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M11.675 8.62a.5.5 0 0 1 .65 0l7 6a.5.5 0 1 1-.65.76L12 9.659l-6.675 5.72a.5.5 0 1 1-.65-.759l7-6Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronUp
