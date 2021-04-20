import axios from "axios"
import { AUTH_SUCCESS, AUTH_LOGOUT } from "../actionTypes"


export function auth(email, password, isLogin){
    return async dispatch => {
        const userData = {
            email, password, returnSecureToken: true
        }
    
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDjGL6W9mHxDwLHGMNR4pUZeMpXjjnqi9w'
    
        if(!isLogin){
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDjGL6W9mHxDwLHGMNR4pUZeMpXjjnqi9w'
        }
    
        const resp = await axios.post(url, userData)
        const data = resp.data
        console.log('Login has done!');

        dispatch(authSuccess(data.idToken))
    }
}

function authSuccess(token){
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function authLogout(){
    return{
        type: AUTH_LOGOUT
    }
}