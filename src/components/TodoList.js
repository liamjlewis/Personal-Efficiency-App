import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import AddTodo from '../containers/AddTodo'

const TodoList = ({ todos, onTodoClick, listType }) => (
  <div>
    <h2>{listType}</h2>
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
    <AddTodo />
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
