import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from '../Reviews/ReviewCard';
import MyReviewCard from './MyReviewCard';


;

const MyReview = () => {
    const {user,logOut}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    
    
     useEffect(()=> {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`, {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('token')}`
            // }
        })
      .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
              setReviews(data.data);
            })
    }, [user?.email, logOut])
    
    
        const handleDelete=id=>{
            const proceed=window.confirm("Are sure ,You want to delete Your review?")
            if(proceed){
              fetch(`http://localhost:5000/myReviews${id}`,{
                  method: "DELETE",
                  headers: {
                      // authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
              if (data.deletedCount >0) {
                alert("Your review is deleted successfully.");
    
                const remaining=reviews.filter(review=>review._id !==id);
                setReviews(remaining)
              }})
              
            }
      } 
    
    
     
    
        return (
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
    
    
    reviews.map(review=><MyReviewCard key={review._id}  review={review} handleDelete={handleDelete} ></MyReviewCard>)
    }
            </div>
        );
    };

export default MyReview;
