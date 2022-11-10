import React from 'react';
import img from '../../../assets/me.png'
const AboutMe = () => {
    return (
        <div className="hero  w-full my-20 shadow-2xl">
          
  <div className="hero-content grid gap-5 md:grid-cols-2 flex-col lg:flex-row">
    <div className=" lg:text-left">
     
     <img className='w-full' src={img} alt="" />
    </div>
   
    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 p-3 justify-center align-middle pl-10">
    <h1 className='py-5 text-5xl font-bold flex justify-center '>ABOUT ME</h1>
    <h1 className="text-3xl font-bold text-center py-6">'Sadia Sharmin'</h1>
    <p><span className='font-semibold text-xl'>Skills: </span>
    <span className='pl-6'>
        <li>Bridal Mekeup</li>
        <li>Mehedi design</li>
        <li>Cake design</li>
        <li>Decoration</li>
        <li>Photography</li>
        <li>Videography</li>
    </span>
    </p>
<p><span className='font-semibold text-xl'>Experience: </span>5 Years</p>
<p><span className='font-semibold text-xl'>Email: </span>sadiashramin460280@gmail.com</p>
<p><span className='font-semibold text-xl'>Phone: </span>+00 568 746 987</p>


      
    </div>
  </div>
</div>
    );
};

export default AboutMe;