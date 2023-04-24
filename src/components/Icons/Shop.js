import * as React from 'react'
const SvgShop = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none" viewBox="0 0 24 24" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.334 1.5H16.666c.828 0 1.345 0 1.8.125A3.5 3.5 0 0 1 20.67 3.43c.212.421.313.928.475 1.74l.017.082.598 2.99a3.542 3.542 0 0 1-.759 2.98v2.816c0 1.853 0 3.294-.15 4.417-.155 1.144-.474 2.032-1.168 2.726s-1.581 1.013-2.726 1.167c-1.123.151-2.564.151-4.417.151H11.46c-1.852 0-3.294 0-4.417-.15-1.144-.155-2.032-.474-2.726-1.168S3.305 19.6 3.151 18.456c-.15-1.123-.15-2.564-.15-4.417v-2.816a3.542 3.542 0 0 1-.76-2.98l.599-2.99.016-.082c.162-.812.264-1.319.475-1.74a3.5 3.5 0 0 1 2.203-1.806c.455-.125.972-.125 1.8-.125ZM4 12.052V14c0 1.9.001 3.274.142 4.323.14 1.033.406 1.674.883 2.152.478.477 1.119.744 2.153.883.519.07 1.118.105 1.822.123v-3.004c0-.448 0-.817.027-1.117.029-.312.09-.597.241-.86a2 2 0 0 1 .732-.732c.263-.152.548-.213.86-.24.3-.028.67-.028 1.117-.028h.046c.448 0 .817 0 1.117.027.312.028.597.09.86.241a2 2 0 0 1 .732.732c.152.263.213.548.241.86.027.3.027.67.027 1.117v3.004a17.287 17.287 0 0 0 1.823-.123c1.034-.139 1.675-.406 2.152-.883.477-.478.744-1.119.883-2.152C20 17.274 20 15.9 20 14v-1.948a3.56 3.56 0 0 1-4.834-1.367A3.663 3.663 0 0 1 12 12.5a3.663 3.663 0 0 1-3.165-1.815A3.56 3.56 0 0 1 4 12.052Zm5.346-3.485a2.667 2.667 0 1 0 5.308 0L14.048 2.5H9.953l-.607 6.067ZM8.948 2.5h-1.53c-.94 0-1.31.004-1.62.089a2.5 2.5 0 0 0-1.573 1.29c-.143.286-.22.65-.405 1.57l-.598 2.99a2.56 2.56 0 1 0 5.056.757l.67-6.696Zm6.105 0 .67 6.696a2.56 2.56 0 1 0 5.055-.757l-.598-2.99c-.184-.92-.261-1.284-.405-1.57a2.5 2.5 0 0 0-1.573-1.29c-.309-.085-.68-.089-1.62-.089h-1.53ZM14 21.497V18.5c0-.477 0-.8-.023-1.05-.022-.242-.062-.365-.11-.45a1 1 0 0 0-.367-.366c-.085-.05-.207-.089-.45-.11-.25-.024-.573-.024-1.05-.024-.476 0-.8 0-1.05.023-.242.022-.365.062-.45.111a1 1 0 0 0-.366.366c-.05.085-.089.208-.11.45C10 17.7 10 18.023 10 18.5v2.997c.46.003.96.003 1.5.003h1c.541 0 1.04 0 1.5-.003Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgShop
