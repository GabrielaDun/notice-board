import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import userReduces from './userRedux';
import adsReduces from './adsRedux';


// combine reducers
const subreducer = {
  ads: adsReduces,
  user: userReduces
}

const reducer = combineReducers(subreducer)
const store = createStore(
  reducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;