
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

const nestedState = (theState, action) => {//NOTE: this is reapeated in several reducers, make a utilities scripts import
  let todoItem = todo(undefined, action)
  let theStateNewProp = Object.assign({}, theState)
  theStateNewProp[action.dayRef] = Array(todoItem)
  return theState.hasOwnProperty(action.dayRef) 
  ? theState[action.dayRef].push(todoItem)
  : theStateNewProp
}

const todos = (state = {}, action) => {
  //NOTE: the data-stucture here is different than the API
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, ...nestedState(state, action)}
    case 'TOGGLE_TODO':
      let updatedDay = {}//NOTE: see if this stuff can go in todo() Actually, isn't this doing almost the same as nestedState() ?
      updatedDay[action.day] = state[action.day].map(t => 
        todo(t, action)
      )
      return Object.assign({}, state, updatedDay)
    default:
      return state
  }
}

export default todos
