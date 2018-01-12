import React from 'react'
import PropTypes from 'prop-types'
import Bullet from './Bullet'
import AddBullet from '../containers/AddBullet'

const BulletList = ({ todos, onTodoClick, listType }) => {

  let listTypeCompiled = {}

  switch (listType){
    case 'todos':
      listTypeCompiled = {title: 'To do today', actionRef: 'ADD_TODO'}
      break
    case 'theLaterbase':
      listTypeCompiled = {title: 'The Laterbase', actionRef: 'ADD_TODO_THE_LATERBASE'}
      break
    case 'postProcrastination':
      listTypeCompiled = {title: 'After procrastination', actionRef: 'ADD_TODO_POST_PROCRASTINATION'}
      break
    default:
      listTypeCompiled = {title: 'Error', actionRef: ''}
  }

  return (
    <div>
      <h2>{listTypeCompiled.title}</h2>
      <ul>
        {todos.map(todo =>
          <Bullet
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
      <AddBullet chosenList={listTypeCompiled.actionRef} />
    </div>
  )
}

BulletList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default BulletList
