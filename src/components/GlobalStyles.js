import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body{
        font-family: Roboto;
        width: 100%;
        background: linear-gradient(to right, #17161a, #242124 50%, #17161a);
    }
    h2{
        font-size: 3rem;
        font-family: Roboto;
        font-weight: lighter;
        color: #fff;
    }
    h3{
        font-size: 1.3rem;
        color: #fff;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: Roboto;
    }

`;

export default GlobalStyles;
