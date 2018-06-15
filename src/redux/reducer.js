import { combineReducers } from 'redux';
import hodor from './reducers/authUser';
import { routerReducer } from 'react-router-redux';
import users from './reducers/users';

export default combineReducers({
    hodor,
    users,
    router: routerReducer
})