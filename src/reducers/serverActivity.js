import {pushToArray, removeFromArray} from '../utilities'

const stateShape = {
  initGet:{
    isQuerying: false, 
    didInvalidate: false, 
    queue: []
  },
  getting:{
    isQuerying: false, 
    didInvalidate: false, 
    queue: []
  },
  posting:{
    isQuerying: false, 
    didInvalidate: false, 
    queue: []
  },
  deleting:{
    isQuerying: false, 
    didInvalidate: false, 
    queue: []
  },
  updating:{
    isQuerying: false, 
    didInvalidate: false, 
    queue: []
  }
}

const serverActivity = (state = stateShape, action) => { //NOTE: this will all need cleaning up and seperating into different files/folders
  switch (action.type) {

    //INIT GETTING
    case 'INIT_GETTING':
      return {
        ...state,
        initGet: { 
            ...state.initGet, isQuerying: action.val
        },
      }
    case 'INIT_DID_INVALIDATE':
      return {
        ...state,
        initGet: { 
            ...state.initGet, didInvalidate: action.val
        },
      }
    case 'INIT_ADD_TO_QUEUE':
      return {
        ...state,
        initGet: { 
            ...state.initGet, 
            queue: pushToArray(state.initGet.queue, action.val)
        },
      }
    case 'INIT_CLEAR_QUEUE':
      return {
        ...state,
        initGet: { 
            ...state.initGet, 
            queue: []
        },
      }

    //GETTING
    case 'GETTING':
      return {
        ...state,
        getting: { 
            ...state.getting, isQuerying: action.val
        },
      }
    case 'GETTING_DID_INVALIDATE':
      return {
        ...state,
        getting: { 
            ...state.getting, didInvalidate: action.val
        },
      }
    case 'GETTING_ADD_TO_QUEUE':
      return {
        ...state,
        getting: { 
            ...state.getting, 
            queue: pushToArray(state.getting.queue, action.val)
        },
      }
    case 'GETTING_REMOVE_FROM_QUEUE':
      return {
        ...state,
        getting: { 
            ...state.getting, 
            queue: removeFromArray(state.getting.queue, action.val)
        },
      }

    default:
      return state
  }
}

export default serverActivity
