import { combineReducers } from 'redux';
import hodor from './reducers/authUser';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    hodor,
    router: routerReducer
})