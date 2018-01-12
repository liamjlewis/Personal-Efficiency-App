import undoable, { includeAction } from 'redux-undo'

var startingState = [
  {completed: false,
    id: 1515766202284,
    text: 'Buy a dog'},
  {completed: false,
    id: 1515766202384,
    text: 'Train dog to write elegant code'},
  {completed: false,
    id: 1515766202484,
    text: 'Move to a Thai island'},
]

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = startingState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) })

export default undoableTodos
