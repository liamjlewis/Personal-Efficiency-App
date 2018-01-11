import React from 'react'
import DayScreen from './DayScreen'
import Todo from './Todo'

import { HashRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => (
	<Router>
		<div>
			<Route path="/" exact={true} render={DayScreen} />
			<Route path="/todo" exact={true} render={Todo} />
		</div>
	</Router>
)

export default App
