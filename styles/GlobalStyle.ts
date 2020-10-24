import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 16px; 
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    ul {
        list-style: none;
    }    

    a {
        text-decoration: none;
        cursor: pointer;
    }

    p {
        line-height: 1.6rem;
    }

    button {
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        padding: 15px 32px;
        border-radius: 5px;
        &:focus {
        outline: 0 !important;
            }
    }
`
