import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const searchIconPath = '../assets/searchIcon.svg'

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

export default function SearchBar() {
	const [search, setSearch] = useState('');

	// On load, make cursor select search box
	useEffect(() => {
    	document.getElementById("searchBox").select(); // Make the cursor select the search box on load
	}, []);

	function handleSubmit(event) {
		window.location.href = "https://www.duckduckgo.com?q=" + search;
		event.preventDefault()
	}

	function handleChange(event) {
		setSearch(event.target.value);
	}

	const startSearch = search === '' ? false : true;
	return (
		<StyledSearchBar>
			<SearchForm onSubmit={handleSubmit} startSearch={startSearch}>
				<SearchText id='searchBox' type='text' value={search} onChange={handleChange} /> 
				<SearchButton type='submit' onClick={handleSubmit}><img src={searchIconPath} alt=''/></SearchButton>
			</SearchForm>
		</StyledSearchBar>
	);
}
