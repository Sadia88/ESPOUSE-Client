import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReview = ({id}) => {


    const [reviews,setReviews]=useState({})
    

useEffect(()=>{


    fetch(`http://localhost:5000/all-review/${id}`)
    .then(res=>res.json())
    .then(data=>setReviews(data.data))
}
,[id])

console.log(reviews)
    return (
        <div>
            {
                reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default AllReview;