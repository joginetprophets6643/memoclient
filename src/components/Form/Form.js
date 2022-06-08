import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'
function Form({currentId,setCurrentId}) {
    const [postData,setPostData] = useState({title:'',message:'',creator:'',tags:'',selectedFile:''});
    const post = useSelector((state)=>(currentId?state.posts.find(message=>message._id===currentId):null));
 
    const dispatch =  useDispatch()
    
    /** UseEffect for onClick Edit Button then Data Populate in From  */
    useEffect(() => {
      if(post) setPostData(post)
    }, [post])
    /** End UseEffect for onClick Edit Button then Data Populate in From  */

    /** Submit form script.. */ 
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(currentId===0)
        {
            dispatch(createPost(postData));
            alert('Form Successfully Sumbitted');
            clear();
        }
        else{
            dispatch(updatePost(currentId,postData)); 
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
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
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
                <input className="form-control form-control" id="selectedFile" name='selectedFile' type="file"/>
            </div>
      
            <button type="submit"  className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={clear}> Clear </button>
        </form>
    </div>
  )
}

export default Form