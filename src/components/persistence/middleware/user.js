import axios from 'axios';
import { AUTH_USER, AUTH_SAVE } from '../types/userType';



const UserMiddleware = {

      userSignup :  ({email,password}) => {
        return async (dispatch, getState) => {
            const url = '/api/v1/users';
            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            };
            let userAuth = await axios.get(url, config);

            dispatch({type : AUTH_USER, payload : userAuth});
           
        };
      }

}


export default UserMiddleware;