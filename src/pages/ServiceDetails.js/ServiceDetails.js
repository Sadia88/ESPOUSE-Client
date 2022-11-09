import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const router = useParams();
  const [service, setService] = useState({});
  const { id } = router;
 

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
     .then(data=>setService(data.data))
       
        
        
  }, [id]);
//   console.log(service)
  
    return (

        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10 flex ">
  <figure className='flex-1' ><img src={service.image}  alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl text-center"><span className='font-semibold'>Service Name :</span> {service.name}</h2>
    <h2><span className='font-semibold'>Price :</span> {service.price}</h2>
    <p> <span className='font-semibold'>Description:</span> {service.description}</p>
   
  </div>
</div>
<div className='my-10'>
    <h1 className='text-5xl font-semibold py-10'>What People say about our Service "{service.name}"</h1>
    <Reviews service={service}></Reviews>
</div>
        </div>
        
            );
    
    }
export default ServiceDetails;