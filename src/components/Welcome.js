import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import {getPosts} from '../actions/posts';
import SearchForm from './Form/SearchForm';
function Welcome() {
const [currentId,setCurrentId] = useState(0);
const dispatch = useDispatch();
const [searchValue,setSearch]=useState('')
useEffect(()=>{
dispatch(getPosts());
},[currentId,dispatch])

const setSearchValue=(value)=>{
  setSearch(value)
}

  return (
       <div className="App">
        <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                <SearchForm onChangeSearch={setSearchValue}/>
                <Posts setCurrentId={setCurrentId} searchValue={searchValue}/>
                </div>
                <div className="col-md-3 border">
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
              </div>
        </div>
      </div> 
  )
}

export default Welcome