import React from 'react';
import {Routes, Route} from "react-router-dom";
import  NavBar from './components/NavBar'
import Auth from './components/Auth/Auth';
import Welcome from './components/Welcome';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/login" exact element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
