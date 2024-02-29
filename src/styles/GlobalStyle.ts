// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        font-family: "Poppins", sans-serif;

    }
`;
 
export default GlobalStyle;