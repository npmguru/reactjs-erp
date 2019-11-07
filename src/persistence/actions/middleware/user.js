import axios from 'axios';
import { AUTH_USER,AUTH_ERROR } from '../../types/userType';



const UserMiddleware = {

      userSignup :  (signupProps, callback) => {
        return async (dispatch, getState) => {
           try{
            const url      = 'http://localhost:3090/api/v1/signup';
            const userAuth = await axios.post(url,signupProps);
            dispatch({type : AUTH_USER, payload : userAuth.data.token});
            callback();
           }catch(error){
            dispatch({type : AUTH_ERROR, payload : error});
           }
        };
      }

}


export default UserMiddleware;