import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {

  useTitle('Edit Review')
    const router = useParams();
  const [reviews, setReview] = useState({});
  const { id } = router;
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`https://espouse-server-sadia88.vercel.app/myReviews/${id}`)
    .then(res=>res.json())
    .then(data=>setReview(data.data))
  }

    ,[id])

  console.log(reviews)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
         reviewText:e.target.reviewText.value


    //      name: e.target.name.value,
    //   price: e.target.price.value,
    //   image: e.target.image.value
    };

    fetch(`https://espouse-server-sadia88.vercel.app/myReviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
      }
      },
      body: JSON.stringify(review)
    }).then(res => res.json())
    .then(data => {
      if(data.success){
        toast.success(data.message);
        navigate("/myReviews")
      } else {
        toast.err(data.error)
      }
    })
    .catch(err => toast.error(err.message))
  }


    return (
        <div>
             
             <div className="card w-96 bg-base-100  shadow-gray-500/40 shadow-2xl my-10 border-b-zinc-300 border-3">
             <form onSubmit={handleSubmit} >
         

          
          <div className="flex items-center mb-10 p-2 border-2">
          

            
            <textarea
              type="textarea"
              name="reviewText"
              defaultValue={reviews?.reviewText}
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
    );
};

export default EditReview;