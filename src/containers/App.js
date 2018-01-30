import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayScreen from './DayScreen'
import HomeScreen from './HomeScreen'
import InfoScreen from '../components/InfoScreen'
import { fetchPostsIfNeeded, manageQueues } from '../actions'
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    const { fetchPostsIfNeeded } = this.props
    fetchPostsIfNeeded('2018-01-13');
  }

  componentDidUpdate(){
    const { manageQueues } = this.props
    manageQueues();
  }

  render(){
  	const {theState} = this.props;

	  return (

			<Router>
				<div>
					<Route path="/" exact={true} component={HomeScreen} />
					<Route path="/day/:date" component={DayScreen} />
					<Route path="/info" exact={true} render={InfoScreen} />
				</div>
			</Router>

		)
	}
}

const mapStateToProps = (state) => {
  return {
  	theState: state
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPostsIfNeeded: theParam => dispatch(fetchPostsIfNeeded(theParam)),
  manageQueues: theParam => dispatch(manageQueues(theParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
