import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'
import FileBase64 from 'react-file-base64';

function Form({currentId,setCurrentId}) {
    const [postData,setPostData] = useState({title:'',message:'',creator:'',tags:'',selectedFile:''});
    const post = useSelector((state)=>(currentId?state.posts.find(message=>message._id===currentId):null));
    const dispatch =  useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user);
    /** UseEffect for onClick Edit Button then Data Populate in From  */
    useEffect(() => {
      if(post) setPostData(post)
    }, [post])
    /** End UseEffect for onClick Edit Button then Data Populate in From  */

    /** Submit form script.. */ 
    const handleSubmit = async(e) =>{
        console.log(postData);
        e.preventDefault();
        if(currentId===0)
        {
            // dispatch(createPost(postData));
            dispatch(createPost({...postData,name: user?.result?.name }));
            alert('Form Successfully Sumbitted');
            clear();
        }
        else{
            // dispatch(updatePost(currentId,postData)); 
            dispatch(updatePost(currentId,{...postData,name: user?.result?.name })); 
            alert('Form Updated Successfully..');
            clear();
            
        }
       
    }
 /** END Submit form script.. */ 

    /** Clear Function Apply */
    const clear = () =>{
        setCurrentId(0);
        setPostData({title:'',message:'',creator:'',tags:'',selectedFile:''})
    }
    /** END Clear Function Apply */
 
    if (!user?.result?.name) {
        return (
          
            <h1 align="center">
              Please Sign In to create your own memories and like other's memories.
            </h1>
         
        );
      }

  return (
    <div className='container mb-3'>
         <h2>{currentId ? `Editing "${post?.title}"` : 'Creating a Memory'}</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Title</label>
                <input type="text" className="form-control" name='title' id="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <input type="message" className="form-control" name="message" value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} id="message"/>
            </div>
            <div className="mb-3">
                <label htmlFor="creator" className="form-label">Creator</label>
                <input type="creator" className="form-control" name="creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})} id="creator"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="tags" className="form-control" name="tags" value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})} id="message"/>
            </div>
            <div className="mb-3">
                {/* <input className="form-control form-control" id="selectedFile"  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} name='selectedFile' type="file"/> */}
                {/* <input className="form-control form-control" id="selectedFile"  onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })} name='selectedFile' type="file"/> */}
                <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
            </div>
      
            <button type="submit"  className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={clear}> Clear </button>
        </form>
    </div>
  )
}

export default Form