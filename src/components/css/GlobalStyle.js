import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-bg-dark : #f5f5f5;
    --color-bg: #fdfffd;
    --color-grey: #d1d1d1;
    --color-text: #22243b;
    --color-accent:#148c66;
    --color-white:white;
}

html.dark{
    --color-bg-dark : #1a1c35;
    --color-bg: #22243b;
    --color-text: white;

}
body {
    width : 100vw;  
    height : 100vh;
    font-size: 1.2rem;
    accent-color :  #8ed0bb;
    display : flex;
    justify-content : center;
    align-items : center;
    // background: rgb(208,174,223);
    background: linear-gradient(90deg, rgba(208,174,223,1) 35%, rgba(190,218,199,1) 100%);
}

button {
    outline: none;
    border: none;
  }

#root {
    width : 100%;
    height : 60%;
    max-width : 500px;
    background-color :var(--color-bg-dark);
    overflow : hidden;
    border-radius :1rem;
    display : flex;
flex-direction : column;
box-shadow: 13px 16px 15px 1px rgba(110,87,87,0.75);
-webkit-box-shadow: 13px 16px 15px 1px rgba(110,87,87,0.75);
-moz-box-shadow: 13px 16px 15px 1px rgba(110,87,87,0.75);
}
ul {
    list-style : none;
    padding-left:0;
}

*{
    box-sizing : border-box
}
`;

export default GlobalStyle;
