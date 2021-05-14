import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const GreetingStyle = styled.div`
	width: 100%;
	text-align: center;
	font-size: 50px;

	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		font-size: 30px;
	}
`;

export default function Greeting({name}) {
	const [timeOfDay, setTimeOfDay] = useState();

	useEffect(() => {
		const datetime = new Date();
		const hour = datetime.getHours();
		let timeOfDay = 'evening';
		if (hour >= 5 && hour < 12) {
			timeOfDay = 'morning';
		} else if (hour >= 12 && hour <= 17) {
			timeOfDay = 'afternoon'
		}

		setTimeOfDay(timeOfDay);
	}, [name]);

	return (
		<GreetingStyle>
			Good {timeOfDay}{name ? ', ' + name : ''}.
		</GreetingStyle>
	);
}
