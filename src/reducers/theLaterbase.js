
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

const theLaterbase = (state = [], action) => {
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

export default theLaterbase
