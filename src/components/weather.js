import React from 'react'
import styled from 'styled-components'

// Data
const weatherImgBase = 'weather/'
const WEATHER_IMG = {
	default: weatherImgBase + 'default.svg',
	thunderstorm: weatherImgBase + 'thunderstorm.svg',
	drizzle: weatherImgBase + 'drizzle.svg',
	rain: weatherImgBase + 'rain.svg',
	snow: weatherImgBase + 'snow.svg',
	clouds: weatherImgBase + 'clouds.svg',
	clearnight: weatherImgBase + 'clearnight.svg',
	clearday: weatherImgBase + 'clearday.svg',
	hazy: weatherImgBase + 'hazy.svg',
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


// Component
class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temp: null,
			city: null,
			imgPath: null 
		};
	}

	componentDidMount() {
		const apiKey = 'a68f7eba17ff810319e0698eb480852e'; // Shouldn't really be here
		const lat = this.props.lat
		const long = this.props.long
		const weatherImg = WEATHER_IMG
		
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
				let imgPath = weatherImg.hazy // catch all: mist, smoke, fog, etc. 
				if (weatherType in weatherImg) {
					imgPath = weatherImg[weatherType]
				}
				
				// Update the state with this data
				this.setState({ 
					temp: main.temp.toFixed(0),
					imgPath: imgPath,
					city: name,
				});
			}) 
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const hidden = this.state.temp ? '' : 'hidden'  // Only show once loaded, don't show if there is an error
		return (
			<StyledWeather className={hidden}>
				<WeatherTop>
					<WeatherIcon src={this.state.imgPath} />
					<WeatherTemp className='vertical-center'>{this.state.temp}&deg;</WeatherTemp>
				</WeatherTop>
				<WeatherBottom>	
					{this.state.city}
				</WeatherBottom>
			</StyledWeather>
		);
	}
}

export default Weather;
