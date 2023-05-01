import * as React from 'react'
const SvgPlusSquare = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8.75C12.1381 8.75 12.25 8.86193 12.25 9L12.25 11.75L15 11.75C15.1381 11.75 15.25 11.862 15.25 12C15.25 12.1381 15.1381 12.25 15 12.25L12.25 12.25L12.25 15C12.25 15.1381 12.1381 15.25 12 15.25C11.8619 15.25 11.75 15.1381 11.75 15L11.75 12.25L9 12.25C8.86193 12.25 8.75 12.1381 8.75 12C8.75 11.862 8.86193 11.75 9 11.75L11.75 11.75L11.75 9C11.75 8.86193 11.8619 8.75 12 8.75Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgPlusSquare
