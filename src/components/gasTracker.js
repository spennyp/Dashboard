import React from 'react'
import styled from 'styled-components'


const StyledGasTracker = styled.div`
	font-weight: 200;
	height: 100%;
	width: 100px;
`;

const Title = styled.div`
	font-size: 20px;
	text-align: center;
`;

const Content = styled.div`
	padding-top: 3px;
	height: 50%;
`;

const Value = styled.div`
	font-size: 30px;
	display: inline-block;
	width: 50%;
	height: 100%;
	text-align: right;
	padding-right: 1px;
`;

const Unit = styled.div`
	font-size: 15px;
	display: inline-block;
	height: 100%;
	width: 50%;
	float: right;
	padding-top: 8px;
	padding-left: 1px;
`;

class GasTracker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}

	componentDidMount() {
		const url = 'https://www.gasnow.org/api/v3/gas/price?utm_source=dashboard';
		fetch(url)
			.then(response => response.json())
			.then(data => {
				const stdGwei = (data.data.standard * 10**(-9)).toFixed(0)
				this.setState({
					value: stdGwei,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
	
	render() {
		
		return (
			<StyledGasTracker>
				<Title>Gas Fee</Title>
				<Content>
					<Value>{this.state.value}</Value>	
					<Unit>gwei</Unit>
				</Content>
			</StyledGasTracker>
		);
	}
}

export default GasTracker;
