import React from 'react'
import styled from 'styled-components'

const GreetingStyle = styled.div`
	width: 100%;
	text-align: center;
	font-size: 50px;

	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		font-size: 30px;
	}
`;


class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeOfDay: null
		};
	}

	componentDidMount() {
		const datetime = new Date();
		const hour = datetime.getHours();
		let timeOfDay = 'evening';
		if (hour >= 5 && hour < 12) {
			timeOfDay = 'morning';
		} else if (hour >= 12 && hour <= 17) {
			timeOfDay = 'afternoon'
		}
		
		this.setState({
			timeOfDay: timeOfDay,
		});
	}

	render() {
		return (
			<GreetingStyle>
				Good {this.state.timeOfDay}{this.props.name ? ', ' + this.props.name : ''}.
			</GreetingStyle>
		);
	}
}

export default Greeting;
