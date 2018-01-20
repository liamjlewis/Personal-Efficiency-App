const serverActivity = (state = {isGetting: false, isPosting: false, queue: []}, action) => {
  switch (action.type) {
    case 'GETTING':
      return {
        ...state,
        isGetting: action.val,
      }
    case 'POSTING':
      return {
        ...state,
        isPosting: true,
      }
    case 'QUEUE':
      return {
        ...state
      }
    default:
      return state
  }
}

export default serverActivity
