import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const StyledGasTracker = styled.a`
	display: inline-flex;
	flex-direction: column;
	font-weight: 200;
	height: 100%;
	float: left;
	vertical-align: bottom;
	color: ${props => props.theme.primaryWhite};
	text-decoration: none;
`;

const Title = styled.div`
	font-size: 20px;
	text-align: center;
	height: 50%;
	display: flex;
	align-items: flex-end;
`;

const Content = styled.div`
	padding-top: 3px;
	height: 50%;
	display: flex;
`;

const Value = styled.div`
	font-size: 30px;
	display: inline-block;
	height: 100%;
	text-align: right;
	padding-right: 1px;
`;

const Unit = styled.div`
	font-size: 15px;
	display: inline-block;
	height: 100%;
	float: right;
	padding-top: 8px;
	padding-left: 1px;
`;

export default function GasTracker() {
	const [gasPrice, setGasPrice] = useState(null);	
	
	// Get the gas price, runs on mount only
	useEffect(() => {
		const url = 'https://www.gasnow.org/api/v3/gas/price?utm_source=dashboard';
		fetch(url)
			.then(response => response.json())
			.then(data => {
				const stdGwei = (data.data.standard * 10**(-9)).toFixed(0)
				setGasPrice(stdGwei);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const hidden = gasPrice ? '' : 'hidden'  // Only show once loaded, don't show if there is an error
	return (
		<StyledGasTracker href='https://www.gasnow.org/' className={hidden}>
			<Title>Gas Fee</Title>
			<Content>
				<Value>{gasPrice}</Value>	
				<Unit>gwei</Unit>
			</Content>
		</StyledGasTracker>
	);
}
