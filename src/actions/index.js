let nextTodoId = Date.now();

export const addTodo = (text, choosenList) => {
	return {
	  type: choosenList,
	  id: nextTodoId++,
	  text
	}
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
