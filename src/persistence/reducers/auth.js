import {AUTH_USER,AUTH_ERROR, AUTH_SIGNOUT} from '../types/userType';

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
        case AUTH_SIGNOUT : 
             //console.log("###########ERROR@@@@@@@@@@@@@@@@@@")
            return INITIAL_STATE;    
        default:
            return state;

    }
}