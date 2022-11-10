import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import AllReview from './AllReview';
import { Link } from 'react-router-dom';


const Reviews = ({service}) => {
const {user}=useContext(AuthContext)

    // console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {
            email: user?.email,
            serviceId: service._id,
            EventName: service.name,
          userImage: user?.photoURL,
          reviewText:e.target.reviewText.value
        };
        e.target.reset()
    // console.log(review)
        fetch("http://localhost:5000/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(review)
        }).then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success(data.message);
          } else {
            toast.error(data.error);
          }
        })
        .catch(err => {
          toast.error(err.message);
        })
        
      };
    return (
        <div className="hero  w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
   

   
    <div className="text-center lg:text-left">
    <h1 className='text-4xl font-semibold py-10'>What People say about My Service <br />
    <span className='text-center flex justify-center'>"{service?.name}"</span></h1>
     
     <AllReview  id={service?._id}></AllReview>
    </div>
    
    


<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-100 px-10 border-solid border-2 border-white-600">
    { user?.uid?
    <>
     <h1 className="text-2xl font-bold text-center">Write Your opinion here  </h1>
      <form onSubmit={handleSubmit} >
      
        
        <div className="flex items-center mb-10 p-2 border-2">
         
          
          <textarea
            type="textarea"
            name="reviewText"
            placeholder=" Write your opinion here"
            className="flex-1  border-2 textarea textarea-bordered  border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400 "
          />
        </div>

        <div className="text-center w-full">
          <button className="w-full mb-5   font-bold btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" type='submit'>Post</button>
        </div>
      </form>
    </>
    :
    <>

    <h1 className='mt-4'>Please login to add a review</h1>
    <Link className='btn my-5' to={'/login'}>Login</Link>
    </>
     
    }
        </div>
      </div>
    </div>
    );
};

export default Reviews;