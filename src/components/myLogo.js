import React from 'react'
import styled from 'styled-components'

const StyledMyLogo = styled.a`
	display: flex;
	height: 100%;
	align-items: flex-end;
	opacity: 0.3;
	font-size: 50px;
	text-decoration: none;
	color: ${props => props.theme.primaryWhite};
	font-weight: 300;

	&:hover {
		opacity: 1;
	}

	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		font-size: 40px;
	}
`;

class MyLogo extends React.Component {
	render() {
		return (
			<StyledMyLogo href='https://www.spencerperkins.me'>[S]</StyledMyLogo>			
		);
	}
}

export default MyLogo;
