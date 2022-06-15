import React from 'react';
import {Routes, Route} from "react-router-dom";
import  NavBar from './components/NavBar'
import SignUp from './components/Auth/SignUp';
import Welcome from './components/Welcome';


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
