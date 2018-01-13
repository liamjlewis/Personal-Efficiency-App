import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import BulletList from '../components/BulletList'
import UndoRedo from '../containers/UndoRedo'
import Footer from '../components/Footer'

class DayScreen extends Component {
  render(){

    const { todos, theLaterbase, postProcrastination, onTodoClick } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>DataBase</h1>
            <p>When you're about to start any task that's not on <strong>Essentials</strong>, enter that task in <strong>LaterBase</strong>.</p>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <BulletList 
              theTitle="Todo Today" 
              onTodoClick={onTodoClick} 
              todos={todos} 
              actionRef="ADD_TODO" 
            />
          </div>
          <div className="six columns">
            <div className="twelve columns">
              <BulletList 
                theTitle="The LaterBase" 
                onTodoClick={onTodoClick} 
                todos={theLaterbase} 
                actionRef="ADD_TODO_THE_LATERBASE" 
              />
            </div>
            <div className="twelve columns">
              <BulletList 
                theTitle="After Procrastination" 
                onTodoClick={onTodoClick} 
                todos={postProcrastination} 
                actionRef="ADD_TODO_POST_PROCRASTINATION" 
              />
            </div>
          </div>  
        </div>
        <Footer />
        <UndoRedo />
      </div>
    )
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  return { 
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter),
    theLaterbase: getVisibleTodos(state.theLaterbase.present, state.visibilityFilter),
    postProcrastination: getVisibleTodos(state.postProcrastination.present, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoClick: theId => dispatch(toggleTodo(theId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DayScreen)
