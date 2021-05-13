import React from 'react'
import styled from 'styled-components'


const StyledSearchBar = styled.div`
	height: 40px;
	width: 100%;
	text-align: center;
`;

const SearchForm = styled.form`
	display: inline-block;
	height: 100%;
	background-color: ${props => props.theme.primaryWhite};
	border-radius: 20px;
	width: 350px;
	opacity: ${props => props.startSearch ? 1 : 0.5};


	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		width: 300px;
	}
`;

const SearchText = styled.input`
	display: inline-block;
	height: 100%;
	width: 300px;
	float: left;
	padding-left: 20px;
	border: none;
	font-size: 15px;
	background-color: transparent;
	box-sizing: border-box;

	&:focus {
		outline: none;
	}

	@media screen and (max-width: ${props => props.theme.smallScreen}px) {
		width: 250px;
	}
`;

const SearchButton = styled.button`
	display: inline-block;	
	height: 100%;
	width: 50px;
	border: none;
	background-color: transparent;
	cursor: pointer;

	& > img {
		height: 100%;
		width: 18px;
	}
`;

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		//    	document.getElementById("searchBox").select(); // Make the cursor select the search box on load
	}

	handleChange(event) {
		this.setState({
			search: event.target.value,
		});
	}

	handleSubmit(event) {
		window.location.href = "https://www.duckduckgo.com?q=" + this.state.search;
		event.preventDefault()
	}

	render() {
		const startSearch = this.state.search === '' ? false : true;
		return (
			<StyledSearchBar>
				<SearchForm onSubmit={this.handleSubmit} startSearch={startSearch}>
					<SearchText id='searchBox' type='text' value={this.state.search} onChange={this.handleChange} /> 
					<SearchButton type='submit' onClick={this.handleSubmit}><img src={`${process.env.PUBLIC_URL}/searchIcon.svg`} alt=''/></SearchButton>
				</SearchForm>
			</StyledSearchBar>
		);
	}
}

export default SearchBar;
