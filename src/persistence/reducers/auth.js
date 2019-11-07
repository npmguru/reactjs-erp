import {AUTH_USER,AUTH_ERROR} from '../types/userType';

const INITIAL_STATE = {
    authentication:null,
    message:null ,
    isAuthenticate : false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AUTH_USER : 
            return {...state,authentication:action.payload,message:'Success',isAuthenticate:true};
        case AUTH_ERROR : 
            return {...state,authentication:null,message:action.payload,isAuthenticate:false};
        default:
            return state;

    }
}