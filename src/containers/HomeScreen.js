import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, manageQueues } from '../actions'

class HomeScreen extends Component {

  render(){
    const {theState} = this.props;

    return (
      <div className="container">
    		<h1>Home Screen</h1>
    		<p>blurb</p>
    		<p>And remember... this will only work if you do it every day. Let the green calender days and upwards graphs be your inspiration!</p>
    		<pre>
    		{JSON.stringify(theState, null, '\t')}
    		</pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  	theState: state
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)