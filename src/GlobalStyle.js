import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;

}
html{
    font-size: 16px;
}
.loading {
    text-align: center;
    font-size: 3rem;
    margin: 2rem 0;
  }
@media (max-width: ${({theme})=> theme.responsive.mobile}){
    html{
        font-size: 14px;
    }
}
;`