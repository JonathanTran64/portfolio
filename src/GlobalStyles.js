import { createGlobalStyle } from 'styled-components';
import backgroundPortfolio from './img/backgroundportfolio.png';

const GlobalStyles = createGlobalStyle`
:root{
	--theme:#d8bbff;
}

textarea{
	font-family: 'Comme', sans-serif;
}

button{
	font-weight: bold;
}

  body {
		font-family: 'Comme', sans-serif;
		margin: 0 auto;
		background: url(${backgroundPortfolio});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		color: white;

	}
h1{
    margin: 0;
}


`;

export default GlobalStyles;
