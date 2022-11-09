import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';

const HomeService = () => {
    const[services,setServices]=useState([])   
    
   useEffect(()=>{
    fetch(`http://localhost:5000/home-service`)
    .then(res=>res.json())
    .then(data=>{
       
        setServices(data.data)})
},[])


console.log(services)

   
    return (
        <div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
            {
                services.map(service=><Service key={service._id} service={service}  ></Service>)
            }
           
        </div>
        <div className='grid justify-end '>
    <Link to={'/services'} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  my-10 mx-11'>See All</Link>
        </div>
        </div>
    );
};

export default HomeService;