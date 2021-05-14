import React from 'react'
import styled from 'styled-components'


const StyledDate = styled.div`
	display: inline-block;
	height: 100%;
	width: 80px;
	padding: 5px;
	border: 2px solid;
	border-radius: 8px;
	font-weight: 200;
`;

const Month = styled.div`
	font-size: 28px;
	text-align: center;
`;

const Day = styled.div`
	font-size: 30px;
	text-align: center;
`;


class CalendarPreview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			month: null,
			day: null,
		};
	}

	componentDidMount() {
		const datetime = new Date();
		const day = datetime.getDate();
		const monthIndex = datetime.getMonth();
		const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		const month = months[monthIndex];
		this.setState({
			month: month,
			day: day
		});
	}

	render() {
		return (
			<StyledDate>
				<Month>{this.state.month}</Month>
				<Day>{this.state.day}</Day>	
			</StyledDate>
		);
	};
}


export default CalendarPreview;
