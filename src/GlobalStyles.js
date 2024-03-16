import { createGlobalStyle } from "styled-components";
import backgroundPortfolio from "./img/backgroundportfolio.png";

const GlobalStyles = createGlobalStyle`

  body {
		font-family: 'Space Mono', sans-serif;
		margin: 0;
		background: url(${backgroundPortfolio});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;

	}
h1{
    margin: 0;
}
`;

export default GlobalStyles;
