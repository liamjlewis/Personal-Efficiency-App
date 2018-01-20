import React from 'react'
import PropTypes from 'prop-types'
import Bullet from './Bullet'
import AddBullet from '../containers/AddBullet'

const BulletList = ({ dateRef, todos, onTodoClick, theTitle, listSuffix }) => {
  return (
    <div>
      <h2>{theTitle}</h2>
      <ul>
        {todos && todos.map(todo =>
          <Bullet
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick({day: dateRef, id: todo.id, listSuffix: listSuffix})}
          />
        )}
      </ul>
      <AddBullet listSuffix={listSuffix} />
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
/* NOTE: this should be a container element so as to reduce the number of props being handed down to it, could be just theTitle and listSuffix */