import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	userReducer,
	usersReducer,
	confectionReducer,
	categoryReducer,
	cartReducer,
} from './reducers'

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	confection: confectionReducer,
	category: categoryReducer,
	cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
