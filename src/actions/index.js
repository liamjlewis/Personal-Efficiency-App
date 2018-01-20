import firebaseInitialised from '../fbConfig'

let nextTodoId = () => Date.now();

export const addTodoDOM = ( listSuffix, text, dayRef, theId ) => {
	return {
	  type: 'ADD_TODO'+listSuffix,
	  text,
	  dayRef: dayRef,
	  id: (!theId) ? nextTodoId() : theId,
	}
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (params) => {
	let {day, id, listSuffix} = params
	return {
	  type: 'TOGGLE_TODO'+listSuffix,
	  day,
	  id }
}

const fillAllLists = (theResponse, dayRef) => dispatch => {
	let theLists = {
		todos: '',
		theLaterbase: '_THE_LATERBASE',
		postProcrastination: '_POST_PROCRASTINATION'
	}

	for(var key in theLists){
		for(var itemId in theResponse[key]){
			dispatch(addTodoDOM( theLists[key], theResponse[key][itemId].text, dayRef, itemId))
		}
	}
}

const shouldFetchPosts = (state) => {
	if(
		Object.keys(state.todos).length === 0 &&
		Object.keys(state.theLaterbase).length === 0 &&
		Object.keys(state.postProcrastination).length === 0 &&
		state.serverActivity.getting !== 'true'){
			return true;
		}
	return false;
}

export const gettingItems = (val) => ({
  type: 'GETTING',
  val
})

export const fetchPostsIfNeeded = theParam => (dispatch, getState) => {
	if( shouldFetchPosts(getState()) ){
		dispatch(gettingItems('true'));
		firebaseInitialised.database().ref('/1515848814142rfe/days/').once('value').then(function(snapshot) {
			if(snapshot.val() !== null){
				dispatch(gettingItems('false'));
				let response = snapshot.val();
				for(var dayRef in response){
					dispatch( fillAllLists( response[dayRef], dayRef)  )
				}
			}else{
				//this will have to do as error processing until I figure out what's up with firebase .catch()
				dispatch(gettingItems('noresponse'));
			}
		});
	}
}
