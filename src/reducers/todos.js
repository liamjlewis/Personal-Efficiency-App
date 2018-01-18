
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

const nestedState = (theState, action) => {
  let todoItem = todo(undefined, action)
  return theState.hasOwnProperty(action.dayRef) 
  ? theState[action.dayRef].push(todoItem)
  : theState[action.dayRef] = Array(todoItem)
}

const todos = (state = [], action) => {
  //the data-stucture here is different than the API
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, ...nestedState(state, action)}
    case 'TOGGLE_TODO':
      return state[action.dateRef].map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
