import axios from 'axios';
import { AUTH_USER, AUTH_SAVE } from '../../types/userType';



const UserMiddleware = {

      userSignup :  (signupProps) => {
        return async (dispatch, getState) => {


            const url = '/signup';
            var config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                data: signupProps
            };

            let userAuth = await axios.get(url, config);
            console.log(userAuth)
           // dispatch({type : AUTH_USER, payload : userAuth});
           
        };
      }

}


export default UserMiddleware;