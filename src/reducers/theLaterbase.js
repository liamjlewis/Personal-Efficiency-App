import undoable, { includeAction } from 'redux-undo'

var startingState = [
  {completed: false,
    id: 1515766202684,
    text: 'Buy cleaning products'},
  {completed: false,
    id: 1515766202784,
    text: 'Watch house decay.'},
]

const laterbaseItem = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO_THE_LATERBASE':
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

const theLaterbase = (state = startingState, action) => {
  switch (action.type) {
    case 'ADD_TODO_THE_LATERBASE':
      return [
        ...state,
        laterbaseItem(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        laterbaseItem(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(theLaterbase, { filter: includeAction(['ADD_TODO_THE_LATERBASE', 'TOGGLE_TODO']) })

export default undoableTodos
