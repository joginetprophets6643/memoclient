import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import  NavBar from './components/NavBar'
import Posts from './components/Posts/Posts';
import Form  from './components/Form/Form';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import {getPosts} from './actions/posts';

function App() {
const [currentId,setCurrentId] = useState(0);
const dispatch = useDispatch();
useEffect(()=>{
dispatch(getPosts());
},[currentId,dispatch])

  return (
    <>
    
      <div className="App">
        <NavBar />
        <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                <Posts setCurrentId={setCurrentId}/>
                </div>
                <div className="col-md-3">
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                  <SignUp/>
                </div>
              </div>
        </div>
      </div>
            
    </>
  );
}

export default App;
