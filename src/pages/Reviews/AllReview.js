import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReview = ({id}) => {


    const [reviews,setReviews]=useState([])
    const [refresh, setRefresh] = useState(false);

useEffect(()=>{


    fetch(`https://espouse-server-sadia88.vercel.app/all-review/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setRefresh(!refresh)
        setReviews(data.data)})
}
,[id,refresh])

// console.log(reviews)
    return (
        <div>
             
            {
                reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default AllReview;