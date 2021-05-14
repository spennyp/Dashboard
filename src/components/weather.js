import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Data
const WEATHER_IMG = {
	default: require('../assets/weather/default.svg'),
	thunderstorm: require('../assets/weather/thunderstorm.svg'),
	rain: require('../assets/weather/rain.svg'),
	clouds: require('../assets/weather/clouds.svg'),
	clearnight: require('../assets/weather/clearnight.svg'),
	clearday: require('../assets/weather/clearday.svg'),
	hazy: require('../assets/weather/hazy.svg'),
};


// Style
const StyledWeather = styled.div`
	height: 100%;
	display: inline-block;
	font-weight: 200;
`;

const WeatherTop = styled.div`
	height: 70%;
`;

const WeatherIcon = styled.img`
	height:100%;
	height: 100%;
	float: left;
`;

const WeatherTemp = styled.div`
	height: 100%;
	float: right;
	font-size: 35px;
	padding-top: 8px;
`;

const WeatherBottom = styled.div`
	height: 30%;
	text-align: center;
	font-size: 20px;
`;


export default function Weather({lat, long}) {
	const [temp, setTemp] = useState();
	const [city, setCity] = useState();
	const [imgPath, setImgPath] = useState();

	useEffect(() => {
		const apiKey = 'a68f7eba17ff810319e0698eb480852e'; // Shouldn't really be here
		const weatherImg = WEATHER_IMG;
		
		var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

		fetch(url)
			.then(response => response.json())
			.then(data => {
				const {main, name, sys, weather} = data;
				if(!weather) return;
				var weatherType = weather[0]['main'].toLowerCase();
				var {sunrise, sunset} = sys;
				var now = new Date(); // Unix time since epoche

				// Set to clear night or clear day (for sun or moon)
				if (weatherType === 'clear') {
					if (now > sunrise && now < sunset) {
						weatherType = 'clearday';
					} else {
						weatherType = 'clearnight';
					}
				}

				// Set the weather image
				let newImgPath = weatherImg.hazy // catch all: mist, smoke, fog, etc. 
				if (weatherType in weatherImg) {
					newImgPath = weatherImg[weatherType]
				}
				
				// Update state
				setTemp(main.temp.toFixed(0));
				setImgPath(newImgPath);
				setCity(name);
			}) 
			.catch((error) => {
				console.log(error);
			});
	}, [lat, long]);


	const hidden = temp && imgPath !== WEATHER_IMG.default ? '' : 'hidden'  // Only show once loaded, don't show if there is an error
	return (
		<StyledWeather className={hidden}>
			<WeatherTop>
				<WeatherIcon src={imgPath ? imgPath.default : null} />
				<WeatherTemp className='vertical-center'>{temp}&deg;</WeatherTemp>
			</WeatherTop>
			<WeatherBottom>	
				{city}
			</WeatherBottom>
		</StyledWeather>
	);
}

