import { combineReducers } from 'redux';
import users from '../reducers/users';
import tweets from '../reducers/tweets';
import authedUser from '../reducers/authedUser';

export default combineReducers({ 
    authedUser,
    users,
    tweets
})