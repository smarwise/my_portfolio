import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        position: relative;
        background-color: #F5F5F5;
    }

    body::before {
        content: '';
        position: absolute;
        top: 2em;
        left: 2em;
        right: 2em;
        bottom: 2em;
        border: 1px solid black;
    }
`;
 
export default GlobalStyle;