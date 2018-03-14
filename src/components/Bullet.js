import React from 'react'
import PropTypes from 'prop-types'

const Bullet = ({ onClick, completed, text, completedToggle, deleteTodo }) => (
  <li
    onClick={onClick}
    className={
      completed ? 'completed-todo' : ''
    }
  >
    <input className="checkbox-todo" type="checkbox" onClick={ () => completedToggle() } />
    {text}
    <div className="delete-todo" onClick={ () => deleteTodo() }>&#10005;</div>
  </li>
)

Bullet.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Bullet
