import * as React from 'react'
const SvgTrashBin = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      d="M9.17 4a3.001 3.001 0 0 1 5.66 0M20.5 6h-17M18.833 8.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5M14.5 11l-.5 5"
    />
  </svg>
)
export default SvgTrashBin
