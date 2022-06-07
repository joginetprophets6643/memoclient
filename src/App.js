import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router';
import  NavBar from './components/NavBar'
import LeftConent from './components/LeftConent';
// import RightContent from './components/RightContent';
import Form  from './components/Form/Form';

// import 
function App() {
const [currentId,setCurrentId] = useState(0);

  return (
    <>
    <div className="App">
       <NavBar />
       <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
              {/* <LeftConent SetCurrentId={setCurrentId}/> */}
              </div>
              <div className="col-md-3">
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </div>
            </div>
       </div>
    </div>
    </>
  );
}

export default App;
