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
    // <div className="card text-center" style={{width:'18rem'}}>
    //     <img
    //       src={post.selectedFile?post.selectedFile:"https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4"}
    //       className="card-img-top"
    //       style={{ height: "200px" }}
    //       alt="..."
    //     />
    //   <div className="card-header">{post.title}</div>
    //   <div className="card-body">
    //     <h5 className="card-title">{post.message}</h5>
    //     <p className="card-text">
    //     {post.tags.map((tag) => `#${tag} `)}
    //     </p>
    //     {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && ( */}
    //     <button type="button" onClick={() => setCurrentId(post._id)} className="btn btn-primary">Edit</button>
    //     {/* )} */}
    //     {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && ( */}
    //     <button type="button" onClick={()=>deletefyn(deletePost(post._id))} className="btn btn-danger">Delete</button>
    //     {/* )} */}
    //     <button type="button" className="btn btn-info" disabled={!user?.result}  onClick={() => dispatch(likePost(post._id))}>Like</button>
    //   </div>
    //   <div className="card-footer text-muted">{post.creator}</div>
    //   <div className="card-footer text-muted">{moment(post.createdAt).fromNow()}</div>
    // </div>


  <div className="card" style={{width:'23.6rem'}}>
  <div className="row">
    <div className="card h-100">
      <img src={post.selectedFile?post.selectedFile:"https://i.picsum.photos/id/372/200/300.jpg?grayscale&hmac=s1kZeGEVsozh8gSDtyyFn-ssukemkrwBNcnuWIiJsV4"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.message}</p>
        <p>{post.tags.map((tag) => `#${tag} `)}</p>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
        {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.id) && ( */}
          <>
          <button type="button" className="btn btn-outline-primary" onClick={() => setCurrentId(post._id)}>EDIT</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>deletefyn(deletePost(post._id))}>DELETE</button>
          </>
        {/* )} */}
        
          <button type="button" className="btn btn-outline-primary">Like</button>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">{moment(post.createdAt).fromNow()}({post.creator})</small>
      </div>
    </div>
  </div>
  
</div>
    
  );
}

export default Post;
