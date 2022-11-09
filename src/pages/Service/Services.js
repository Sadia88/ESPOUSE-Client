import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Service from './Service';

const Services = () => {
   const[services,setServices]=useState([])   
    
   useEffect(()=>{
    fetch(`http://localhost:5000/services`)
    .then(res=>res.json())
    .then(data=>{
       
        setServices(data.data)})
},[])


//    console.log(services.splice(0,3))

   
    return (
        <div className='mt-10'>
            <h1 className='text-6xl font-bold text-center flex justify-center'>Our Services</h1>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3  '>
            {
                services.map(service=><Service key={service._id} service={service}  ></Service>)
            }
           
        </div>
        <div>
        
        </div>
        </div>
    );
};

export default Services;