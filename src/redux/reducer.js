import { combineReducers } from 'redux';
import authUser from './reducers/authUser';
import { routerReducer } from 'react-router-redux';
import users from './reducers/users';

export default combineReducers({
    authUser,
    users,
    router: routerReducer
})