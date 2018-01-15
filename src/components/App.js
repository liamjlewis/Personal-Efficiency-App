import React from 'react'
import DayScreen from '../containers/DayScreen'
import HomeScreen from '../containers/HomeScreen'
import InfoScreen from './InfoScreen'

import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => (
	<Router>
		<div>
			<Route path="/" exact={true} component={HomeScreen} />
			<Route path="/day/:date" component={DayScreen} />
			<Route path="/info" exact={true} render={InfoScreen} />
		</div>
	</Router>
)

export default App
