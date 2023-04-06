import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  body {
    line-height: 1.5;
    --webkit-font-smoothing: antialiased;
    font-family: 'System.ui', sans-serif;
    font-weight: 400;
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
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    display: flex;
    text-decoration: none;
  
}
`;
