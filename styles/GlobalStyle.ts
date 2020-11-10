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

       
        @media (max-width: 1200px) {
            font-size: 0.9rem;
        }

        
        @media (max-width: 900px) {
            font-size: 0.8rem;
        }
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
        transition: 0.2s all ease-in-out;
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        padding: .9rem 2rem;
        border-radius: 5px;
        cursor: pointer;
        &:focus {
        outline: 0 !important;
            }
    }
`
