import React,{useState,useEffect} from 'react'
import  {Link,useLocation}  from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';
function NavBar() {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        window.location.href = "/login";
        setUser(null);
        
      };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    
   
  return (
    
    <nav className="navbar navbar-expand-lg bg-light mb-5">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            {user?.result ? (
                <>
                <span className="navbar-brand mb-0 h1" >{user?.result.name}</span>
                <button className="btn btn-outline-success" type="button" onClick={logout}>Logout</button>
                </>
                ) : (
                <Link to="login" className="btn btn-outline-success">Login</Link>
                )}
            </div>
        </div>
    </nav>
    
  )
}

export default NavBar