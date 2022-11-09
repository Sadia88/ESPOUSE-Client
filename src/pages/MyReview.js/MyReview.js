import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from '../Reviews/ReviewCard';


;

const MyReview = () => {
    const {user,logOut}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    
    
     useEffect(()=> {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
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
              fetch(`http://localhost:5000/reviews${id}`,{
                  method: "DELETE",
                  headers: {
                      authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
              if (data.deletedCount >0) {
                alert("Your review is deleted successfully.");
    
                const remaining=reviews.filter(order=>order._id !==id);
                setReviews(remaining)
              }})
              
            }
      } 
    
    
     
    
        return (
            <div>
                {
    
    
    reviews.map(review=><ReviewCard key={review._id}  review={review} handleDelete={handleDelete} ></ReviewCard>)
    }
            </div>
        );
    };

export default MyReview;
