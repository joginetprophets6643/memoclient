// import {FETCH_ALL,CREATE} from '../constants/actionType';
import {FETCH_ALL,CREATE, UPDATE,DELETE,LIKE} from '../constants/actionTypes';
import * as api from '../api/index.js';

/** Create Post API */ 
export const createPost = (post) =>async (dispatch) =>{
  try {
    const {data} = await api.createPost(post);
    dispatch({type:CREATE,payload:data})
  } catch (error) {
    console.log(error.message);
  }
}
/** END Create POST/

/** UPDATE POST */
export const updatePost = (id,post)=>async(dispatch)=>{
 try {
   const {data} = await api.updatePost(id,post);
   dispatch({type:UPDATE,payload:data});
 } catch (error) {
   console.log(error.message);
 }
}
/**END UPDATE POST */

/** FETCH_ALL API  */
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
/**END  FETCH_ALL API*/

/**DELETE POST */
export const deletePost = (id) => async(dispatch)=>{
  try {
    await api.deletePost(id);
    dispatch({type:DELETE,payload:id})
  } catch (error) {
    console.log(error.message);
  }
}
/**END DELETE POST */


/** LIKE POST */
export const likePost = (id) => async(dispatch) =>{
  const user = JSON.parse(localStorage.getItem('profile'));
   console.log(user,'kkkk');
  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
}
/**END LIKE POST */