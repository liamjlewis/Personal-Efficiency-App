import { combineReducers } from 'redux'
import todos from './todos'
import theLaterbase from './theLaterbase'
import postProcrastination from './postProcrastination'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  theLaterbase,
  postProcrastination,
  visibilityFilter
})

export default todoApp
