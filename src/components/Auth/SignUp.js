import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
// import {useNavigate} from 'react-router-dom'

const initialState = {firstName:'',lastName:'',email:'',password:'',cpassword:''}
function SignUp() {
    const [form ,setForm] = useState(initialState);
    const dispatch = useDispatch();
    // const history = useNavigate();

       /** Submit Login form script.. */ 
       const handleSubmitLogin = async(e) =>{
        dispatch(signup(form))
        e.preventDefault();
      
       
    }
 /** END Submit Login form script.. */ 

 const handlechange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div className='container'>
    <form onSubmit={handleSubmitLogin}>
        <div className="mb-3">
            <label htmlFor="Title" className="form-label">First Name</label>
            <input type="text" className="form-control" onChange={handlechange}  name='firstName' id="Title"  aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" onChange={handlechange} name="lastName"  id="lastName"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" onChange={handlechange} name="email"  id="email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={handlechange} name="password"  id="message"/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" onChange={handlechange} name="cpassword"  id="message"/>
        </div>
      
  
        <button type="submit"  className="btn btn-primary">Submit</button>
        {/* <button type="button" className="btn btn-danger" onClick={clear}> Clear </button> */}
    </form>
</div>
  )
}

export default SignUp