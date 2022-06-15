import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index';
export const signin = (formData) =>async(dispatch)=>{
 try {
     const {data} = await api.signIn(formData);
     dispatch({type:AUTH,data});
     window.location.href = '/';
 } catch (error) {
     console.log(error.response.data.message);
     alert(error.response.data.message);
 }

}
export const signup = (formData) =>async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData)
        dispatch({type:AUTH,data})
        window.location.href = '/';
    } catch (error) {
        console.log(error);
    }

}