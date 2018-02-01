import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import PropTypes from 'prop-types'
import Bullet from '../components/Bullet'
import AddBullet from './AddBullet'
import { withRouter } from 'react-router'
import { listNameToSuffix } from '../utilities'

class BulletList extends Component {

  render(){
    const { theList, onTodoClick, onTodoAdd, theTitle, listName } = this.props
    const today = this.props.match.params.date
    let listSuffix = ""

    listSuffix = listNameToSuffix(listName)

    return (
      <div>
        <h2>{theTitle}</h2>
        <ul>
          {theList[today] && theList[today].map(todo =>
            <Bullet
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick({day: today, id: todo.id, listSuffix: listSuffix})}
            />
          )}
        </ul>
        <AddBullet todoParams={{day: today, id: 0, listSuffix: listSuffix}} />
      </div>
    )
  }
}

BulletList.propTypes = {
  theList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
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

const mapStateToProps = (state, ownProps) => {
  return { 
    theList: getVisibleTodos(state[ownProps.listName], state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoClick: todoParams => dispatch(toggleTodo(todoParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(BulletList) )
