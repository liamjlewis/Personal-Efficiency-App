import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, fetchPostsIfNeeded } from '../actions'
import BulletList from '../components/BulletList'
import Footer from '../components/Footer'

class DayScreen extends Component {
  
  componentDidMount() {
    const { fetchPostsIfNeeded } = this.props
    fetchPostsIfNeeded(this.props.match.params.date);
  }

  render(){
    const { todos, theLaterbase, postProcrastination, onTodoClick } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h1>DataBase</h1>
            <p>When you're about to start any task that's not on <strong>Essentials</strong>, enter that task in <strong>LaterBase</strong>.</p>
            <p>Hit <strong>'I have sinned'</strong> if you got distracted.</p>
          </div>
        </div>
        <div className="row">
          <div className="six columns bulletlist">
            <BulletList 
              theTitle="Todo Today" 
              onTodoClick={onTodoClick} 
              todos={todos[this.props.match.params.date]} 
              dateRef={this.props.match.params.date}
              listSuffix="" 
            />
          </div>
          <div className="six columns columns bulletlist laterbase">
              <BulletList 
                theTitle="The LaterBase o" 
                onTodoClick={onTodoClick} 
                todos={theLaterbase[this.props.match.params.date]} 
                dateRef={this.props.match.params.date}
                listSuffix="_THE_LATERBASE" 
              />
          </div>
        </div>
        <div className="row sin-bin">
          <div className="six columns bulletlist">
            <BulletList 
              theTitle="Sin Bin" 
              onTodoClick={onTodoClick} 
              todos={postProcrastination[this.props.match.params.date]} 
              dateRef={this.props.match.params.date}
              listSuffix="_POST_PROCRASTINATION" 
            />
          </div>
          <div className="six columns bulletlist">
            <p className="advice">Be sure to enter your sins whenever they happen so that proper stats about your productivity can be compiled.</p>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <Footer />
          </div>
        </div>
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
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    theLaterbase: getVisibleTodos(state.theLaterbase, state.visibilityFilter),
    postProcrastination: getVisibleTodos(state.postProcrastination, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoClick: theId => dispatch(toggleTodo(theId)),
  fetchPostsIfNeeded: param => dispatch(fetchPostsIfNeeded(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(DayScreen)
