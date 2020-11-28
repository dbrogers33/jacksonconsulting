import { createGlobalStyle } from 'styled-components';


const Typography = createGlobalStyle`  
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald';
        text-transform: uppercase;
        font-display: swap;
    }
    h1 {
        font-size: 3rem;
        @media only screen and (max-width: 670px) {
          font-size: 2.5rem;
        }
    }
    h2 {
        font-size: 2rem;
        line-height: 3rem;
        @media only screen and (max-width: 670px) {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
    }
    h3 {
        font-size: 1.5rem;
        @media only screen and (max-width: 670px) {
          font-size: 1.25rem;
        }
    }
    p {
        font-family: 'Open Sans';
        line-height: 1.75rem;
        font-size: 1rem;
        color: #767676;
        margin-top: 0;
        font-display: swap;
    }
`

export default Typography;