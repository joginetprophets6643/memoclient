import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signin,signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import { GoogleLogin } from 'react-google-login';

const initialState = {firstName:'',lastName:'',email:'',password:'',cpassword:''}
function Auth() {
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

 const googleSuccess = async (res) => {
    alert(res);
    // const result = res?.profileObj;
    // const token = res?.tokenId;
    // try {
    //   dispatch({ type: AUTH, data: { result, token } });

    // //   history.push('/');
    // } catch (error) {
    //   console.log(error);
    // }
  };

//   const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
  const googleError = async(error) =>{ 
    alert('Google Sign In was unsuccessful. Try again later');
}

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
                    <input type="text" className="form-control" required onChange={handlechange}  name='firstName' id="Title"  aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" required onChange={handlechange} name="lastName"  id="lastName"/>
                </div>
            </>
        )}
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" required onChange={handlechange} name="email"  id="email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input  className="form-control" onChange={handlechange} required name="password" type={showPassword ? 'text' : 'password'}/>
        </div>
        { isSignup && (
            <>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" required onChange={handlechange} name="cpassword"  id="message"/>
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

        <GoogleLogin
            clientId="741049085278-n25q9d4d6847vtkpsu2742er3l3rl92m.apps.googleusercontent.com"
            render={(renderProps) => (
              <button className="btn btn-danger" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
    </form>
    
</div>
  )
}

export default Auth