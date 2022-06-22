// import axios from 'axios';
// const url = 'http://localhost:7000/posts';
// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url,newPost);
// export const updatePost = (id,updatePost) => axios.patch(`${url}/${id}`,updatePost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

/**NEw URL FOR */
import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:7000'})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const fetchPosts = () =>API.get('/posts');
export const createPost = (newPost) =>API.post('/posts',newPost);
export const updatePost = (id,updatePost) => API.patch(`posts/${id}`,updatePost);
export const deletePost = (id) => API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

/**AUTH URL  */
 export const signUp = (formData) => API.post('/user/signup',formData);
 export const signIn = (formData) => API.post('/user/signin',formData);