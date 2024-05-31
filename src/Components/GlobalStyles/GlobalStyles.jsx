import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    :root{
        --energyRed: #FF2121;
        --energyPurple: #5E60CE;
        --energyDarkRed: #540808;
        --energyBlack: #000000;
        --energyDarkBlue: #04091A;
        --energyGrey: #353535;
        --energyDarkGrey: #444444;
        --anotherGrey: #848484;
        --secondary: #212529;
        --myGrey: #a3a2a2;
        --energyLightGrey: #F5F8FA;
        --energyLightRed: #fc7c7c;
        --energyWhite: #FFFFFF;
        --energyYellow: #FFC700;
        --boxShadow: 5px 5px 5px rgba(199, 192, 192, 0.3);
    }
`;


export default GlobalStyles;