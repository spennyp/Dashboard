import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const theme = (darkMode, color) => ({
	primaryWhite: '#FFFFFF',	

	// Media query sizes
	mediumScreen: 800, 
	smallScreen: 500,
});

// Everything that is child of theme, gets theme as its props, so it can be used everywhere
export default function Theme({children}) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const GlobalStyle = createGlobalStyle`
	html {font-family: 'Roboto', sans-serif}

	html, body, #root {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-size: 18px;
		font-weight: 400;
		overflow: hidden;
	}

	div {
		box-sizing: border-box;
	}
	
	.hidden {
		opacity: 0;
	}
`;

