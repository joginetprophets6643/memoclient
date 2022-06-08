import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import CircularProgress from "./CircularProgress";
function Posts({setCurrentId}) {
    const posts = useSelector((state) => state.posts);
  return (
    !posts.length ? <CircularProgress /> : (
          <div className="row">
          {posts.map((post) => (
              <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </div>
      )
   
  );
}

export default Posts;
