import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';


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
    console.log(review)
        // fetch("http://localhost:5000/reviews", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json"
        //   },
        //   body: JSON.stringify(review)
        // }).then(res => res.json())
        // .then(data => {
        //   if(data.success){
        //     toast.success(data.message);
        //   } else {
        //     toast.error(data.error);
        //   }
        // })
        // .catch(err => {
        //   toast.error(err.message);
        // })
        
      };
    return (
        <div className="hero  w-full my-20">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

   
    <div className="text-center lg:text-left">
     
     
    </div>
    
       {/* <div>
       {
                user?.photoURL ? <div className='d-block'>  <img  alt='' src={user?.photoURL} style={{height:'40px',}}>
                    
                </img>  </div> : <FaUserCircle style={{height:'35px',}} ></FaUserCircle>
              }
       <h1>Hi {user.name} </h1>
       </div> */}


<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-10 border-solid border-2 border-white-600">
    <h1 className="text-2xl font-bold text-center">Write Your opinion here </h1>
        <form onSubmit={handleSubmit} >
          {/* <div className="flex items-center mb-5 p-2">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Event Name
            </label>
            <input
              type="text"
              name="EventName"
             defaultValue={service.name}
              className="flex-1 py-2 border-2 border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400 "
            />
          </div> */}

         
          {/* <div className="flex items-center mb-5 p-2">
          <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">Photo URL</label>
           
            <input name="photoURL"  className="flex-1 py-2 border-2 border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400" type="text" defaultValue={user?.photoURL} />
            </div> */}

          
          <div className="flex items-center mb-10 p-2 border-2">
            {/* <label className=" w-40 mr-6 text-right font-bold text-gray-600">
            Review
            </label> */}

            
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
        </div>
      </div>
    </div>
    );
};

export default Reviews;