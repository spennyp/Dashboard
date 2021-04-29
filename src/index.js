import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Theme, {GlobalStyle} from './theme'

ReactDOM.render(
	<>
		<Theme>
			<GlobalStyle />
			<App long={getUrlParam('long')} lat={getUrlParam('lat')} name={getUrlParam('name')}/>
		</Theme>
	</>,
	document.getElementById('root')
);

// Helpers
function getUrlParam(paramName) {
    var pageUrl = window.location.search.substring(1);
    var urlVars = pageUrl.split('&');
    for (var i = 0; i < urlVars.length; i++) {
        var name = urlVars[i].split('=');
        if (name[0] === paramName) {
            return name[1];
        }
    }
}
