import React from "react";
import moment from 'moment';
import { useDispatch } from "react-redux";
import {deletePost,likePost} from '../../../actions/posts'
function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const deletefyn = async(e) =>{
            dispatch(deletePost(post._id));
            alert('data Successfully Deleted');
            window.location.reload(false);
      
    }
    
  return (
  <div className="card" style={{width:'23.6rem'}}>
  <div className="row">
    <div className="card h-100">
      <img src={post.selectedFile?post.selectedFile:"https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.message}</p>
        <p>{post.tags.map((tag) => `#${tag} `)}</p>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <>
          <button type="button" className="btn btn-outline-primary" onClick={() => setCurrentId(post._id)}>EDIT</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>deletefyn(deletePost(post._id))}>DELETE</button>
          </>
        )}
        
          <button type="button" className="btn btn-outline-primary">Like</button>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">{moment(post.createdAt).fromNow()}({user?.result?.name})</small>
      </div>
    </div>
  </div>
  
</div>
    
  );
}

export default Post;
