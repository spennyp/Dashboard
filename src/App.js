import React from 'react'
import styled, {css} from 'styled-components'
import Weather from './components/weather'
import Clock from './components/clock'
import CalendarPreview from './components/calendarPreview'
import Greeting from './components/greeting'
import GasTracker from './components/gasTracker'

const outsidePadding = '10px';

const Dashboard = styled.div`
	width: 100%;
	height: 100%;
	padding: ${outsidePadding};
	color: ${props => props.theme.primaryWhite};
	background-image: ${props => props.imgUrl};
	background-repeat: no-repeat;
	background-size: 100% 100%;
`;

const Top = styled.div`
	width: 100%;
	height: 80px;
	position: relative;
`;

const Right = styled.div`
	float: right;
	height: 100%;
	display: inline-block;
`;

const Bottom = styled.div`
	height: 80px;
	position: absolute;
	bottom: ${outsidePadding};
	font-size: 10px;
	width: calc(100% - 2*${outsidePadding});
`;


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: null,
		};
	}

	componentDidMount() {
		const clientId = 'c_Mh-IYia-rRAxpMVjEXew6rcrvySdE3lVI3xnG4Vrk';
		//const clientId = '9i_xH3I1PGmz4bSd5TjXVViHg7hq2WUz9iVEyq74POA';
		//const clientId = '0K6ecqqXYKMvm7wJt8GpZ0qA6tpvbkqjNrQ8e6qKpP0';

		var url = 'https://api.unsplash.com/photos/random/?client_id=' + clientId + '&orientation=landscape&collections=';
		fetch(url)
			.then(response => response.json())
			.then(data => {
				const urls = data['urls'];
				const {raw, regular, full, small} = urls;
				const url = 'url(' + regular + ')'
				this.setState({
					imgUrl: url,
				});
			})
			.catch(() => {
				console.log('Error');
				document.body.style.backgroundColor = '#474749'; // Set to gray if there is an error
			});

	}

	render() {
		return (
			<Dashboard imgUrl={this.state.imgUrl}>
				<Top>
					<CalendarPreview />
					<Right>
						<Weather weatherImg={this.props.weatherImg} lat={this.props.lat} long={this.props.long}/>
					</Right>
				</Top>
				<Clock />
				<Greeting name={this.props.name} />
				<Bottom>
					<GasTracker />
					<Right>
					</Right>
				</Bottom>
			</Dashboard>
		);
	}
}

export default App;
