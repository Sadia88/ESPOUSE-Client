import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
          name: e.target.name.value,
          price: parseInt(e.target.price.value),
          image: e.target.image.value,
          description:e.target.description.value
        };
    // console.log(product)
        fetch("http://localhost:5000/add-service", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
          },
          body: JSON.stringify(product)
        }).then(res => res.json())
        .then(data => {
          if(data.success){
            toast("Successfully added service");
          } else {
            toast.error(data.error);
          }
        })
        .catch(err => {
          toast.error(err.message);
        })
        e.target.reset()
        
      };
    return (
        <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5 p-2">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Event Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 py-2 border-2 border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400 "
            />
          </div>

          <div className="flex items-center mb-5 p-2">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Cost
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="flex-1 py-2 border-2 border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400  p-2"
            />
          </div>
          

          <div className="flex items-center mb-5 p-2">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image url"
              className="flex-1 py-2 border-2 border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center mb-10 p-2">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
            Short description
            </label>

            
            <textarea
              type="textarea"
              name="description"
              placeholder="Write Short Description"
              className="flex-1 py-2 border-2 textarea textarea-bordered  border-gray-400 focus:border-black-400 text-gray-600 placeholder-gray-400 "
            />
          </div>

          <div className="text-center ml-40">
            <button className="   font-bold btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-5" type='submit'>Add service</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddServices;