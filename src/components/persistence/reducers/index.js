import {combineReducers} from 'redux';
import AuthReducer from './auth';
import {reducer as formReducer} from 'redux-form';
let rootReducers = {
    auth : AuthReducer,
    form: formReducer
}; 


export default combineReducers(rootReducers)