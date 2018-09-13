import { createStore , combineReducers } from 'redux';


function navShowReducer( state=false , action ){
	if( action.type === 'CHANGE_NAVSHOW' ){
		return action.payload;
	}
	else{
		return state;
	}
}

var reducers = combineReducers({
	navShow : navShowReducer
});

var store = createStore( reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;