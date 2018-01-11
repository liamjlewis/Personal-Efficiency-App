import React from 'react'
import DayScreen from './DayScreen'
import InfoScreen from './InfoScreen'

import { HashRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => (
	<Router>
		<div>
			<Route path="/" exact={true} render={DayScreen} />
			<Route path="/info" exact={true} render={InfoScreen} />
		</div>
	</Router>
)

export default App
