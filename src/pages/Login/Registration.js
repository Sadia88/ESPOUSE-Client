import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Registration = () => {
   


    const {createUser,updateUserProfile,loader}=useContext(AuthContext)
const navigate=useNavigate()
const [error,setError]=useState('')

if(loader){
  return <button type="button" class="bg-indigo-500 rounded-2xl text-center flex justify-center" disabled>
  <svg class="animate-spin h-10 w-5 mr-3 ..." viewBox="0 0 24 24">
   
  </svg>
  Loading...
</button>
}
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const name=form.displayName.value
        const photoURL=form.photoURL.value
        // console.log(displayName,email,password,photoURL)

        createUser(email,password)
        .then((result) => {
            
            const user = result.user;

            // console.log("Signed ",user)
            form.reset()
            
          
            handleUpdateUserProfile(name,photoURL)
            navigate('/login');
           
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });

         

    }


    
     
const handleUpdateUserProfile=(name,photoURL)=>{
  const profile={
      displayName: name, photoURL: photoURL
  
  }
  
  
      updateUserProfile(profile)
      .then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
        console.error(error)
        });
     
  
  }
  

    return (
       
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row w-full">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Sign Up </h1>
      <form onSubmit={handleSubmit} className="card-body py-20" >
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name='displayName' className="input input-bordered" />
        </div>

        <div className="form-control">
        <span className="label-text">Photo URL</span>
           
            <input name="photoURL" type="text" placeholder="Phot URL" />
            </div>

        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Your password" name='password' className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none" value='Sign up' />
        </div>
      </form>
      <p className='text-center'>Already have an account <Link className=" text-orange-600 font-bold pb-5 "  to='/login'>Login</Link></p>
    </div>
  </div>

    );
};

export default Registration;