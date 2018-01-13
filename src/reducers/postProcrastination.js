import undoable, { includeAction } from 'redux-undo'

var startingState = [
  {completed: false,
    id: 1515766203684,
    text: 'Jeremy KyleXXXX'},
  {completed: false,
    id: 1515766203784,
    text: 'Cash in the attic'},
  {completed: false,
    id: 1515766203884,
    text: 'GTA San Andreas'},
  {completed: false,
    id: 1515766203984,
    text: 'Shaved the cat'},
  {completed: false,
    id: 1515766204184,
    text: 'Jeremy Kyle again'},
]

const postProcrastinationItem = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO_POST_PROCRASTINATION':
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

const postProcrastination = (state = startingState, action) => {
  switch (action.type) {
    case 'ADD_TODO_POST_PROCRASTINATION':
      return [
        ...state,
        postProcrastinationItem(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        postProcrastinationItem(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(postProcrastination, { filter: includeAction(['ADD_TODO_POST_PROCRASTINATION', 'TOGGLE_TODO']) })

export default undoableTodos
