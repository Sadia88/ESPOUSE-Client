import React, { useEffect, useState } from 'react';

const MyReviewCard = ({review,handleDelete,handleEdit}) => {

 

    return (
        <div>
            
            <div className="card w-96 bg-base-100  shadow-gray-500/40 shadow-2xl my-10 border-b-zinc-300 border-3">
              <h2 className='card-title  flex justify-center'>Your opinion about {review.EventName}</h2>
  <div className="card-body">
   
    <p>"{review.reviewText}"</p>
    
    <div className="card-actions flex justify-end align-items-cen">
    <small className=" ">--{review.email}</small>
     <img src={review.userImage} className='rounded-full w-10' alt="" />
    </div>
  </div>
  <div className='card-compact flex py-5 justify-around'>
<button className='btn'   onClick={() => handleDelete(review._id)}>Delete</button>
<button className='btn'   onClick={() => handleEdit(review._id)}>Edit</button>
  </div>
</div>
        </div>
    );
};

export default MyReviewCard;