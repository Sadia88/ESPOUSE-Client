import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle} from "react-icons/bs";
import { setAuthToken } from '../../API/auth';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle('login')
    const {signIn,googleSignin,loader}=useContext(AuthContext)
    const [error,setError]=useState('')
    const navigate = useNavigate();
    const location=useLocation()

    if(loader){
      return <button type="button" class="bg-indigo-500 rounded-full text-center flex justify-center" disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
       
      </svg>
      Loading...
    </button>
  }
    let from = location.state?.from?.pathname || "/";
        const handleSubmit=event=>{
            event.preventDefault()
            const form=event.target
            const email=form.email.value
            const password=form.password.value
            signIn(email,password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setAuthToken(user)
                // ...
              })
              .catch((error) => {
              
                const errorMessage = error.message;
                setError(errorMessage)
                navigate(from, { replace: true });
              });
            
    
        }
    
        const handleGoogleLogin=()=>{
            googleSignin()
            .then((result) => {
                
               
                const user = result.user;
    
                setAuthToken(user)
                navigate(from, { replace: true });
               
              })
              
              
              .catch((error) => {
              
                const errorMessage = error.message;
              
                console.log(errorMessage)
              });
    
        }
        return (
            
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row hero  w-full my-20">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center">Login </h1>
          <form onSubmit={handleSubmit} className="card-body py-20" >
            <div className="form-control">
            
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none" value='Sign In' />
            </div>
            <div>
              {error}
            </div>
            <div className="form-control mt-6 text-center">
                <p>Or Sign In with</p>
          <div className='text-center flex justify-around'>
          <button onClick={handleGoogleLogin} ><BsGoogle></BsGoogle></button>
            
          </div>
            </div>
            
          </form>
          <p className='text-center'>New to Car Mechanic <Link className=" text-orange-600 font-bold "  to='/signup'>Sign up</Link></p>
        </div>
      </div>
    
        );
    };

export default Login;