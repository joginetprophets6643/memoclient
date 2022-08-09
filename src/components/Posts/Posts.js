import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import CircularProgress from "./CircularProgress";
function Posts({setCurrentId,searchValue}) {
    const [finalPosts,setPosts]=useState([])
    const posts = useSelector((state) => state.posts);

    useEffect(()=>{
      if(posts.length){
        setPosts(posts)
      }
    },[posts])

    useEffect(()=>{
      if(searchValue!==''){
        const temp=posts.filter((post)=>{
          if(post['title'].includes(searchValue) || post['tags'][0].includes(searchValue) || post['creator'].includes(searchValue) || post['message'].includes(searchValue)){
            return post
          }
        })
          setPosts(temp)
      }
      else{
        setPosts(posts)
      }
    },[searchValue])
    
  return (
    !finalPosts.length ? <CircularProgress /> : (
          <div className="row border">
          {finalPosts.map((post) => (
              <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </div>
      )
   
  );
}

export default Posts;
