// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    body {
        background-color: ${props => props.theme.background};
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`;
 
export default GlobalStyle;