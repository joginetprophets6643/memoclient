import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {getPostsBySearch} from '../../actions/posts'
function SearchForm() {

  const [search,setSearch] = useState({search:''});
  const [tags,setTags] = useState([]);
  const dispatch = useDispatch();

  const searchPost = () =>{
    // console.log(search.search);
    if(search.search.trim())
    {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
    }
  }
  return (
    <>
      
        <h2>Search items</h2>
        <div className="mb-3">
          <label htmlFor="search" className="form-label">Title</label>
          <input type="text" className="form-control" name="search" id="title" placeholder="search ..." value={search.search}  onChange={(e)=>setSearch({...search,search:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tags</label>
          <input type="text" className="form-control" id="tag" name="tag" placeholder="tag ..." />
        </div>
        <div className="mb-3">
          <button className='btn btn-success' onClick={searchPost}> Search</button>
        </div>
      
    </>
  )
}

export default SearchForm