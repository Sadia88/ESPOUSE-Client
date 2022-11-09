import React from 'react';

const ReviewCard = ({review}) => {
    console.log(review)
    return (
        
            
            <div className="card w-96 bg-base-100  shadow-gray-500/40 shadow-2xl my-10 border-b-zinc-300 border-3">
  <div className="card-body">
   
    <p>"{review.reviewText}"</p>
    
    <div className="card-actions flex justify-end align-items-cen">
    <small className=" ">--{review.email}</small>
     <img src={review.userImage} className='rounded-full w-10' alt="" />
    </div>
  </div>
</div>
        
    );
};

export default ReviewCard;