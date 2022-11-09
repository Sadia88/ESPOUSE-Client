import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {_id,name,price,image,description}=service
    return (
        <div className="card w-96  shadow-2xl  my-10 py-2 ">

{/* <PhotoProvider>
      <div className="foo w-1/2" >
       
          <PhotoView key={_id} src={image}>
            <img src={image} alt="" />
          </PhotoView>
      
      </div>
    </PhotoProvider> */}
<figure className='p-0' ><PhotoProvider className=' p-0'>
<div className="w-200">
<PhotoView src={image} className='event-img m-0 p-0'  >
  <img src={image} className='image-full object-fill'   alt="" />
</PhotoView>
</div>
</PhotoProvider></figure>
  {/* <figure ><img src={image} alt=""  className='w-full '/></figure> */}
  <div className="card-body text-center p-10 m-10">
    <h2 className="card-title text-4xl">{name}</h2>
    <h3>Price : {price}</h3>
    <p>
  {description?.length > 100 ?
    `${description.substring(0, 100)}...` : description
  }
</p>
    <div className="card-actions justify-center py-6">

      <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg " to={`/service/${_id}`} >view details</Link>
    </div>
  </div>
</div>
    );
};

export default Service;