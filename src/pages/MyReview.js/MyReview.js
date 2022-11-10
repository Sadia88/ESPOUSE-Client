import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from '../Reviews/ReviewCard';
import MyReviewCard from './MyReviewCard';


;

const MyReview = () => {
    const {user,logOut}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    const [refresh, setRefresh] = useState(false);
 
    
     useEffect(()=> {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`, {
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
    }, [user?.email, logOut,refresh])
    
    const handleDelete = (id) => {
      // console.log(id)
      fetch(`http://localhost:5000/myReviews/${id}`, {
         headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`
              },
        method: "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        if(data.success){
          toast.success(data.message);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      }).catch(err => toast.error(err.message))
    };
      
    
    
    const navigate = useNavigate();
    const handleEdit = (id) => {
      navigate(`/myReviews/edit/${id}`)
    }


    console.log(reviews.length)
        return (
            <div>
             
              <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
    
    
    reviews.map(review=><MyReviewCard key={review._id}  review={review} handleDelete={handleDelete}  handleEdit={handleEdit}></MyReviewCard>)
    }
            </div>
            </div>
        );
    };

export default MyReview;
