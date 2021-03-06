
const postProcrastinationItem = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO_POST_PROCRASTINATION':
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
    case 'TOGGLE_TODO_POST_PROCRASTINATION':
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
  let todoItem = postProcrastinationItem(undefined, action)
  let theStateNewProp = Object.assign({}, theState)
  theStateNewProp[action.dayRef] = Array(todoItem)
  return theState.hasOwnProperty(action.dayRef) 
  ? theState[action.dayRef].push(todoItem)
  : theStateNewProp
}

const postProcrastination = (state = {}, action) => {
  //the data-stucture here is different than the API
  switch (action.type) {
    case 'ADD_TODO_POST_PROCRASTINATION':
      return {...state, ...nestedState(state, action)}
    case 'TOGGLE_TODO_POST_PROCRASTINATION':
      let updatedDay = {}//see if this stuff can go in todo() :D
      updatedDay[action.day] = state[action.day].map(t => 
        postProcrastinationItem(t, action)
      )
      return Object.assign({}, state, updatedDay)
    default:
      return state
  }
}

export default postProcrastination