import firebaseInitialised from '../fbConfig'

let nextTodoId = () => Date.now();

export const addTodoLocal = ( choosenList, text, dayRef, theId ) => {
	return {
	  type: choosenList,
	  text,
	  dayRef: dayRef,
	  id: (!theId) ? nextTodoId() : theId,
	}
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (dayRef, id) => ({
  type: 'TOGGLE_TODO',
  dayRef,
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

const fillAllLists = (theResponse, dayRef) => dispatch => {
	let theLists = {
		todos: 'ADD_TODO',
		theLaterbase: 'ADD_TODO_THE_LATERBASE',
		postProcrastination: 'ADD_TODO_POST_PROCRASTINATION'
	}

	for(var stateName in theLists){
		for(var itemId in theResponse[stateName]){
			dispatch(addTodoLocal( theLists[stateName], theResponse[stateName][itemId].text, dayRef, itemId))
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
		firebaseInitialised.database().ref('/1515848814142rfe/days/').once('value').then(function(snapshot) {
			let response = snapshot.val();
			for(var dayRef in response){
				dispatch( fillAllLists( response[dayRef], dayRef)  )
			}
		});
	}
}
