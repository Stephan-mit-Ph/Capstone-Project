import * as React from 'react'
const SvgPlus = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M13.5 1.75a.75.75 0 0 0-1.5 0V12H1.75a.75.75 0 0 0 0 1.5H12v9.25a.75.75 0 0 0 1.5 0V13.5h9.25a.75.75 0 0 0 0-1.5H13.5V1.75Z"
    />
  </svg>
)
export default SvgPlus
