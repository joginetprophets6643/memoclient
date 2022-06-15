import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signin,signup } from '../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';
import Danger from '../Message/Danger';

const initialState = {firstName:'',lastName:'',email:'',password:'',cpassword:''}
function SignUp() {
    const [form ,setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    
    const switchMode = () =>{
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }
/** Submit Login/Registration form script.. */ 
       const handleSubmitLogin = async(e) =>{
        e.preventDefault();
        // {isSignup?dispatch(signup(form)):dispatch(signin(form))}
        if(isSignup)
        {
            dispatch(signup(form)) 
        }
        else
        {
            dispatch(signin(form)) 
        }
        
    }
 /** END Submit Login/Registration form script.. */ 

 const handlechange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div className='container'>
        <div className="d-flex justify-content-center">
           <button className='btn btn-secondary text-center'>{isSignup?'Sign Up':'Sign In'}</button>
        </div>
    <form onSubmit={handleSubmitLogin}>
        {isSignup && (
            <>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">First Name</label>
                    <input type="text" className="form-control" onChange={handlechange}  name='firstName' id="Title"  aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" onChange={handlechange} name="lastName"  id="lastName"/>
                </div>
            </>
        )}
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" onChange={handlechange} name="email"  id="email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input  className="form-control" onChange={handlechange} name="password" type={showPassword ? 'text' : 'password'}/>
        </div>
        { isSignup && (
            <>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" onChange={handlechange} name="cpassword"  id="message"/>
            </div>
            </>
          )
        }
        <div className='mb-3'>
           <button type="submit"  className="btn btn-primary">
             {isSignup ? 'Sign Up':'Sign In'}
           </button>
        </div>
        
        <div className='mo-3'>
            <button   className="btn btn-primary" onClick={switchMode}>
                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
            </button>
        </div>

        {/* <button type="button" className="btn btn-danger" onClick={clear}> Clear </button> */}
    </form>
    <Danger/>
</div>
  )
}

export default SignUp