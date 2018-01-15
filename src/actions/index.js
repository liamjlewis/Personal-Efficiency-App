import firebaseInitialised from '../fbConfig'

let nextTodoId = () => Date.now();

export const addTodo = ( choosenList, text, theId ) => {
	return {
	  type: choosenList,
	  text,
	  id: (!theId) ? nextTodoId() : theId
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

const fillAllLists = theSnapshot => dispatch => {
	let theLists = {
		todos: 'ADD_TODO',
		theLaterbase: 'ADD_TODO_THE_LATERBASE',
		postProcrastination: 'ADD_TODO_POST_PROCRASTINATION'
	}

	for(var stateName in theLists){
		for(var itemId in theSnapshot[stateName]){
			dispatch(addTodo( theLists[stateName], theSnapshot[stateName][itemId].text, itemId))
		}
	}
}

const shouldFetchPosts = (state) => {
	if(
		state.todos.length === 0 &&
		state.theLaterbase.length === 0 &&
		state.postProcrastination.length === 0){
		return true;
	}
	return false;
}

export const fetchPostsIfNeeded = theParam => (dispatch, getState) => {
	if( shouldFetchPosts(getState()) ){
		firebaseInitialised.database().ref('/1515848814142rfe/days/'+theParam).once('value').then(function(snapshot) {
			dispatch( fillAllLists( snapshot.val() ) )
		});
	}
}
