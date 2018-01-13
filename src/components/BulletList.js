import React from 'react'
import PropTypes from 'prop-types'
import Bullet from './Bullet'
import AddBullet from '../containers/AddBullet'

const BulletList = ({ todos, onTodoClick, theTitle, actionRef }) => {

  return (
    <div>
      <h2>{theTitle}</h2>
      <ul>
        {todos.map(todo =>
          <Bullet
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
      <AddBullet chosenList={actionRef} />
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
