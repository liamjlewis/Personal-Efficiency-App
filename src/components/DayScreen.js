import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const DayScreen = () => (
  <div className="container">
  	<div className="row">
  		<div className="twelve columns">
				<h1>DataBase</h1>
				<p>When you're about to start any task that's not on <strong>Essentials</strong>, enter that task in <strong>LaterBase</strong>.</p>
			</div>
		</div>
		<div className="row">
  		<div className="six columns">
	  		<VisibleTodoList listType="To do" />
	  	</div>
  		<div className="six columns">
	  		<div className="twelve columns laterbase">
		  		<VisibleTodoList listType="LaterBase" />
		  	</div>
		  	<div className="twelve columns">
	  			<VisibleTodoList listType="Post" />
	  		</div>
	  	</div>
	  </div>
	  <Footer />
	  <UndoRedo />
	</div>
)

export default DayScreen