// import {FETCH_ALL,CREATE} from '../constants/actionType';
import {FETCH_ALL,CREATE} from '../constants/actionTypes';
import * as api from '../api/index.js';
/** Create Post API */ 

export const createPost = () =>async (dispatch) =>{
  console.log('here is jogi');
}

/** FETCH_ALL API  */
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};