import React from 'react'
import styled from 'styled-components'

const StyledClock = styled.div`
	width: 100%;
	text-align: center;
	font-size: 200px;

	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		font-size: 100px;
	}
`;

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			datetime: new Date(),	
		};

		this.getTime = this.getTime.bind(this)
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			datetime: new Date(),
		});
	}

	getTime(datetime) {
		const timeOptions = {
			hour: "2-digit",
			minute: "2-digit",
		}
		let time = this.state.datetime.toLocaleTimeString("en-US", timeOptions);
		time = time.replace("AM","").replace("PM","")
		return time;
	}

	render() {
		const time = this.getTime(this.state.datetime);
		return (
			<StyledClock>
				{time}
			</StyledClock>
		);
	}
}

export default Clock;
