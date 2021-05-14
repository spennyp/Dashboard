import React from 'react'
import styled from 'styled-components'
import Weather from './components/weather'
import Clock from './components/clock'
import CalendarPreview from './components/calendarPreview'
import Greeting from './components/greeting'
import GasTracker from './components/gasTracker'
import SearchBar from './components/searchBar'
import MyLogo from './components/myLogo'

const outsidePadding = '20px';

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
	display: inline;
	position: absolute;
	right: 0;
	height: 100%;
`;

const Bottom = styled.div`
	height: 80px;
	position: absolute;
	bottom: ${outsidePadding};
	font-size: 10px;
	width: calc(100% - 2*${outsidePadding});
`;

const Spacer = styled.div`
 	height: 10%;
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
				const {regular} = urls;
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
						<Weather lat={this.props.lat} long={this.props.long}/>
					</Right>
				</Top>
				<Spacer />
				<SearchBar />
				<Spacer />
				<Clock />
				<Greeting name={this.props.name} />
				<Bottom>
					<GasTracker />
					<Right>
						<MyLogo />
					</Right>
				</Bottom>
			</Dashboard>
		);
	}
}

export default App;
