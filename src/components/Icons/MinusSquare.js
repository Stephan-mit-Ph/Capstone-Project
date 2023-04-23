import * as React from 'react'
const SvgMinusSquare = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.96 1.5h.08c2.323 0 4.118 0 5.513.188 1.417.19 2.495.582 3.336 1.423.84.84 1.233 1.919 1.424 3.336.187 1.395.187 3.19.187 5.514v.078c0 2.324 0 4.12-.188 5.514-.19 1.417-.582 2.495-1.423 3.336-.84.84-1.919 1.233-3.336 1.424-1.395.187-3.19.187-5.514.187h-.078c-2.324 0-4.12 0-5.514-.188-1.417-.19-2.495-.582-3.336-1.423-.84-.84-1.233-1.919-1.423-3.336-.188-1.395-.188-3.19-.188-5.514v-.078c0-2.324 0-4.12.188-5.514.19-1.417.582-2.495 1.423-3.336.84-.84 1.919-1.233 3.336-1.423C7.842 1.5 9.637 1.5 11.961 1.5ZM6.58 2.679c-1.306.175-2.138.515-2.762 1.139-.624.624-.964 1.456-1.14 2.762C2.502 7.9 2.5 9.63 2.5 12s.001 4.1.179 5.42c.175 1.306.515 2.138 1.139 2.762.624.624 1.456.964 2.762 1.14 1.32.177 3.049.178 5.42.178s4.1-.001 5.42-.179c1.306-.175 2.138-.515 2.762-1.139.624-.624.964-1.456 1.14-2.762.177-1.32.178-3.049.178-5.42s-.001-4.1-.179-5.42c-.175-1.306-.515-2.138-1.139-2.762-.624-.624-1.456-.964-2.762-1.14C16.1 2.502 14.37 2.5 12 2.5s-4.1.001-5.42.179ZM8.5 12a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMinusSquare
