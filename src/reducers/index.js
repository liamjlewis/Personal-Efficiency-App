import { combineReducers } from 'redux'
import todos from './todos'
import theLaterbase from './theLaterbase'
import postProcrastination from './postProcrastination'
import visibilityFilter from './visibilityFilter'
import serverActivity from './serverActivity'

const todoApp = combineReducers({
  todos,
  theLaterbase,
  postProcrastination,
  visibilityFilter,
  serverActivity
})

export default todoApp
