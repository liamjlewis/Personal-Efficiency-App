
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

const postProcrastination = (state = [], action) => {
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

export default postProcrastination
