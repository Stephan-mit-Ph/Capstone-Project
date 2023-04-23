import { createGlobalStyle } from 'styled-components'
import localFont from '@next/font/local'

const montserrat = localFont({
  src: '../public/fonts/Montserrat-Italic-VariableFont_wght.ttf',
  src: '../public/fonts/Montserrat-VariableFont_wght.ttf',
})

const orbiton = localFont({
  src: '../public/fonts/Orbitron-VariableFont_wght.ttf',
})



export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;


  }

  body {
    line-height: 1.5;
    --webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    }

    img, 
    picture, 
    video, 
    canvas, 
    svg {
      display: block;
      max-width: 100%;
    }

    input, 
    button, 
    textarea, 
    select {
      font: inherit;
    }
    
    p, 
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6 {
      overflow-wrap: break-word;
    }

    p {
    hyphens: auto;
    }

    #root, #__next {
  isolation: isolate;
}
`
