import firebaseInitialised from '../fbConfig'

let nextTodoId = () => Date.now();

export const addTodo = (text, choosenList) => {
	return {
	  type: choosenList,
	  id: nextTodoId(),
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
/*
const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}
*/

export const fetchPostsIfNeeded = param => (dispatch) => {
	if(1 === 1){
		dispatch(addTodo('YAY', 'ADD_TODO'))
	}
}