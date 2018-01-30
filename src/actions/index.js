import firebaseInitialised from '../fbConfig'

/* TO DO MANAGEMENT ••••••••••••••••••••••••••••••••••••••••••••• */

	/* LOCAL••••••••••••••••••••••••••••••••••••••••••••• */

	let nextTodoId = () => Date.now();

	export const addTodoDOM = ( listSuffix, text, dayRef, theId ) => {
		return {
		  type: 'ADD_TODO'+listSuffix,
		  text,
		  dayRef: dayRef,
		  id: (!theId) ? nextTodoId() : theId,
		}
	}

	/*export const addTodoAPI = theParam => (dispatch, getState) => {
		dispatch(gettingItems('true'));
		firebaseInitialised.database().ref('/1515848814142rfe/days/').once('value').then(function(snapshot) {
	}*/

	export const toggleTodo = (params) => {
		let {day, id, listSuffix} = params
		return {
		  type: 'TOGGLE_TODO'+listSuffix,
		  day,
		  id }
	}

	export const setVisibilityFilter = (filter) => ({
	  type: 'SET_VISIBILITY_FILTER',
	  filter
	})

/* SERVER ACTIVITIES ••••••••••••••••••••••••••••••••••••••••••••• */

	const fillAllLists = theResponse => dispatch => {

		let theLists = {
			todos: '',
			theLaterbase: '_THE_LATERBASE',
			postProcrastination: '_POST_PROCRASTINATION'
		}

		for(var dayRef in theResponse){
			for(var listRef in theLists){
				for(var itemId in theResponse[dayRef][listRef]){
					dispatch(addTodoDOM( theLists[listRef], theResponse[dayRef][listRef][itemId].text, dayRef, itemId))
				}
			}
		} //NOTE: is there a nicer way to do this?

	}

	const ArePostsEmpty = (state) => {
		if(
			Object.keys(state.todos).length === 0 &&
			Object.keys(state.theLaterbase).length === 0 &&
			Object.keys(state.postProcrastination).length === 0 &&
			state.serverActivity.getting !== 'true'){
				return true;
			}
		return false;
	}

	export const fetchPostsIfNeeded = theParam => (dispatch, getState) => {

		if( ArePostsEmpty(getState()) ){
			dispatch(initGettingItems(true));
			let endpoint = (theParam) ? theParam : '/15158488141INVALID42rfe/days/'
			firebaseInitialised.database().ref(endpoint).once('value').then(function(snapshot) {
				if(snapshot.val() !== null){ //NOTE: firebase .catch()
					dispatch( initGettingItems(false) )
					dispatch( initInvalidated( false ) )
					dispatch( fillAllLists(snapshot.val()) )
				}else{
					dispatch( initGettingItems(false) );
					dispatch( initInvalidated( true ) )
					dispatch( initAddToQueue( endpoint ) )
				}
			});
		}

	}

	export const manageQueues = () => (dispatch, getState) => {

		let theState = getState()
		let activityTypes = ['initGet', 'getting', 'posting', 'deleting', 'updating']

		activityTypes.map( a => {
			if(!theState.serverActivity[a].isQuerying && theState.serverActivity[a].queue.length !== 0){
				console.log('THERE IS A QUEUE FOR '+a+' '+theState.serverActivity[a].queue[0])

				switch (a) {//this needs to be below
					case 'initGet':
						dispatch( gettingInvalidated( false ) )
						dispatch( initClearQueue() )
						setTimeout( () => (
							dispatch( fetchPostsIfNeeded('/1515848814142rfe/days/') )
						), 1000)
			    case 'getting':
						dispatch( gettingInvalidated( false ) )
				}

				theState.serverActivity[a].queue.map( i => {
					//here I will fire another API call
					//dispatch( gettingRemoveFromQueue(0) )
				})
				

				/*dispatch( gettingItems(true) );
				firebaseInitialised.database().ref(theState.serverActivity[a].queue[0]).once('value').then(function(snapshot) {
					dispatch( gettingItems(false) );
					if(snapshot.val() !== null){ //NOTE: firebase .catch()
						
					}else{
						dispatch( gettingInvalidated( true ) )
						
					}
				});*/
			}else{
				console.log('NOTHING IN QUEUE')
			}
		})

	}

	/* INIT GET ••••••••••••••••••••••••••••••••••••••••••••• */
	export const initGettingItems = (val) => ({
	  type: 'INIT_GETTING',
	  val
	})

	export const initInvalidated = (val) => ({
	  type: 'INIT_DID_INVALIDATE',
	  val
	})

	export const initAddToQueue = (val) => ({
	  type: 'INIT_ADD_TO_QUEUE',
	  val
	})

	export const initClearQueue = (val) => ({
	  type: 'INIT_CLEAR_QUEUE',
	  val
	})

	/* GETTING ••••••••••••••••••••••••••••••••••••••••••••• */
	export const gettingItems = (val) => ({
	  type: 'GETTING',
	  val
	})

	export const gettingInvalidated = (val) => ({
	  type: 'GETTING_DID_INVALIDATE',
	  val
	})

	export const gettingAddToQueue = (val) => ({
	  type: 'GETTING_ADD_TO_QUEUE',
	  val
	})

	export const gettingRemoveFromQueue = (val) => ({
	  type: 'GETTING_REMOVE_FROM_QUEUE',
	  val
	})

