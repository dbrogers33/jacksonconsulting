import { createGlobalStyle } from 'styled-components';


const Typography = createGlobalStyle`  
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald';
        text-transform: uppercase;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2.25rem;
        line-height: 3rem;
    }
    h3 {
        font-size: 1.75rem;
    }
    p {
        font-family: 'Open Sans';
        line-height: 1.75rem;
        font-size: 18px;
        color: #767676;
        margin-top: 0;
    }
`

export default Typography;