import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const DayScreen = () => (
  <div>
		<h1>LaterBase</h1>
		<p>When you're about to start any task that's not on <strong>Essentials</strong>, enter that task in <strong>LaterBase</strong>.</p>
	  <VisibleTodoList listType="Pre" />
	  <VisibleTodoList listType="Post" />
	  <VisibleTodoList listType="LaterBase" />
	  <Footer />
	  <UndoRedo />
	</div>
)

export default DayScreen