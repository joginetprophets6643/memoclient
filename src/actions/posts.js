
import {FETCH_ALL,CREATE, UPDATE,DELETE,LIKE,START_LOADING,FETCH_BY_SEARCH,END_LOADING} from '../constants/actionTypes';
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
  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
}
/**END LIKE POST */

/** SEARCH API*/
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
        try {
          dispatch({ type: START_LOADING });
          
          const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
      
          dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
          dispatch({ type: END_LOADING });
        } catch (error) {
          console.log(error);
        }
      }
/** END SEARCH API  */