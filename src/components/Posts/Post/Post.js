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
    <div className="card text-center" style={{width:'18rem'}}>
        <img
          src="https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4"
          className="card-img-top"
          style={{ height: "200px" }}
          alt="..."
        />
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <h5 className="card-title">{post.message}</h5>
        <p className="card-text">
        {post.tags.map((tag) => `#${tag} `)}
        </p>
        {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && ( */}
        <button type="button" onClick={() => setCurrentId(post._id)} className="btn btn-primary">Edit</button>
        {/* )} */}
        {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && ( */}
        <button type="button" onClick={()=>deletefyn(deletePost(post._id))} className="btn btn-danger">Delete</button>
        {/* )} */}
        <button type="button" className="btn btn-info"  onClick={() => dispatch(likePost(post._id))}>Like</button>
      </div>
      <div className="card-footer text-muted">{post.creator}</div>
      <div className="card-footer text-muted">{moment(post.createdAt).fromNow()}</div>
    </div>
    
  );
}

export default Post;
