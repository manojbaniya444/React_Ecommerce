import styled, { createGlobalStyle } from "styled-components";
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

  .btn{
  padding: 1rem 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.color.blue1};
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
  transition: 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.color.blue2};
  }
  }

@media (max-width: ${({ theme }) => theme.responsive.mobile}){
    html{
        font-size: 14px;
    }
}
;`;
