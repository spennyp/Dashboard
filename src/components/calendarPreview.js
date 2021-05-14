import React, { useState, useEffect } from 'react'
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


export default function CalendarPreview() {
	const [month, setMonth] = useState(null);
	const [day, setDay] = useState(null);

	useEffect(() => {
		const datetime = new Date();
		const day = datetime.getDate();
		const monthIndex = datetime.getMonth();
		const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		const month = months[monthIndex];
		setMonth(month);
		setDay(day);
	}, []);

	return (
		<StyledDate>
			<Month>{month}</Month>
			<Day>{day}</Day>	
		</StyledDate>
	);
}
