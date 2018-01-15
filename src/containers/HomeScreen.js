import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions'

class HomeScreen extends Component {
  
  componentDidMount() {
    const { fetchPostsIfNeeded } = this.props
    fetchPostsIfNeeded('2018-01-13');
  }

  render(){
    const {theState} = this.props;

    return (
      <div className="container">
    		<h1>Home Screen</h1>
    		<p>
    		{JSON.stringify(theState)}
    		</p>
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
  fetchPostsIfNeeded: theParam => dispatch(fetchPostsIfNeeded(theParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)