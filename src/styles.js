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
  :root {
    
    html {
      font-size: 16px;
      line-height: 1.5;
    }

    --font-family: ${montserrat.style}, sans-serif;

    --font-headine-1: normal 600 3rem var(--font-family);
    --font-headline-2: normal 600 2.5rem var(--font-family);
    --font-headline-3: normal 600 2rem var(--font-family);
    --font-headline-4: normal 500 1.75rem var(--font-family);
    --font-headline-5: normal 500 1.5rem var(--font-family);
    --font-headline-6: normal 500 1.25rem var(--font-family);
    
    --font-body-large: normal 400 1.25rem var(--font-family);
    --font-body: normal 400 1rem var(--font-family);
  
    --font-caption: normal 400 0.85rem var(--font-family);
    --font-caption: normal 400 0.65 rem var(--font-family);
    --font-button: normal 500 0.85rem var(--font-family);
    
  }

  @media (max-width: 768px) {
    :root
      html {  
        font-size: 14px;
        line-height: 1.2;
      }

       --font-family: ${montserrat.style}, sans-serif;

      --font-headine-1: normal 600 3rem var(--font-family);
      --font-headline-2: normal 600 2.5rem var(--font-family);
      --font-headline-3: normal 600 2rem var(--font-family);
      --font-headline-4: normal 500 1.75rem var(--font-family);
      --font-headline-5: normal 500 1.5rem var(--font-family);
      --font-headline-6: normal 500 1.25rem var(--font-family);
    
      --font-body-large: normal 400 1.25rem var(--font-family);
      --font-body: normal 400 1rem var(--font-family);
  
      --font-caption: normal 400 0.85rem var(--font-family);
      --font-caption: normal 400 0.65 rem var(--font-family);
      --font-button: normal 500 0.85rem var(--font-family);

    }     

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: lightgrey;
    background-color: #262626;
    margin: 0;
    font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;


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