import { createGlobalStyle } from 'styled-components'
import { Orbitron, Montserrat } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  style: ['normal'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal'],
})

const GlobalStyle = createGlobalStyle`
  :root {

    --bg-color-200: #C4C4C4;
    --bg-color-300: #333333;
    --bg-color-400: #262626;
    --bg-color-500: #1D1D1D;

    --text-color: #ECECEC;

    --primary-color-300: #FF0A68;
    --primary-color-400: #F7095F;
    --primary-color-500: #E10856;
    --primary-color-600: #CA074D;
    --primary-color-700: #B60646;
    --primary-color-800: #A4063F;

    --secondary-color-300: #16FFFF;
    --secondary-color-400: #11FFFF;
    --secondary-color-500: #0FEFFD;
    --secondary-color-600: #0ED7E4;
    --secondary-color-700: #0CC2CD;
    --secondary-color-800: #0BAEB8;

    --secondary-color-400-opacity-20: rgba(17, 255, 255, 0.2);;
    --secondary-color-700-opacity-20: rgba(12, 194, 205, 0.2);

    --tertiary-color-500: #FF00F5;    

    --toastify-color-dark : var(--bg-color-500);
    --toastify-text-color-dark: var(--text-color);
    --toastify-color-success: var(--secondary-color-500);
    --toastify-color-error: var(--primary-color-500);

    --font-family-1: ${orbitron.style.fontFamily}, sans-serif;
    --font-family-2: ${montserrat.style.fontFamily}, sans-serif;

    --font-display-title: normal 400 2rem/1.5 var(--font-family-1);

    --font-title: normal 400 3rem/1.5 var(--font-family-2);
    --font-subtitle: normal 400 2.5rem/1.5 var(--font-family-2);

    --font-card-title: normal 400 1.2rem/1.5 var(--font-family-2);

    --font-body-large: normal 300 1.2rem/1.5 var(--font-family-2);
    --font-body-medium: normal 300 1.1rem/1.5 var(--font-family-2);
    --font-body-medium-bold: normal 500 1.1rem/1.5 var(--font-family-2);
    --font-body-small: normal 300 0.8rem/1.5 var(--font-family-2);


    @media screen and (max-width: 568px) {
      --font-display-title: normal 400 1.3rem/1.3 var(--font-family-1);

      --font-title: normal 400 1.8rem/1.2 var(--font-family-2);
      --font-subtitle: normal 400 1.8rem/1.2 var(--font-family-2);

      --font-card-title: normal 400 1rem/1.5 var(--font-family-2);

      --font-body-large: normal 300 1.06rem/1.2 var(--font-family-2);
      --font-body-medium: normal 300 0.875rem/1.5 var(--font-family-2);
      --font-body-medium-bold: normal 500 0.875rem/1.2 var(--font-family-2);
      --font-body-small: normal 300 0.75rem/1.2 var(--font-family-2);
    }

        body{
          color: var(--text-color);
          font-family: var(--font-family-2);
          background-color:  var(--bg-color-500);
        }
  }


  *,*::before,*::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-user-select: none;
    user-select: none;
  
  }

  
  img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`

export default GlobalStyle
