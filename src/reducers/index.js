import { combineReducers } from 'redux';

import users from './userReducers';
import meals from './mealReducers';


let initState ={
    isLoggedIn: false,
    curr_user: null,
    isUser:false
}

const rootReducer = combineReducers({
    users,
    meals
})
export default rootReducer;