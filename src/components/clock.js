import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledClock = styled.div`
	width: 100%;
	text-align: center;
	font-size: 200px;

	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		font-size: 100px;
	}
`;

const msRefreshRate = 1000; // Every 1sec

function formatTime(datetime) {
	const timeOptions = {
		hour: "numeric",
		minute: "numeric",
	}

	let time = datetime.toLocaleTimeString("en-US", timeOptions);
	time = time.replace("AM","").replace("PM","");

	return time;
}


export default function Clock() {
	const [datetime, setDatetime] = useState(new Date());	
	const timerRef = useRef();

	// Executed upon mounting
	useEffect(() => {
		timerRef.current = setInterval(() => setDatetime(new Date()), msRefreshRate);

		// clean up function
		return () => { 			
			clearInterval(timerRef.current);
		}
	}, [timerRef, setDatetime]);
	
	const time = formatTime(datetime);
	return (
		<StyledClock>
			{time}
		</StyledClock>
	);
}
