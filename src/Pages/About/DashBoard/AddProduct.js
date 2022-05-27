import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
   
    fetch(`http://localhost:5000/part`, {
        method : 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then (res =>res.json())
    .then (result =>{
        console.log(result);
    })
  }
    return (
        <div className='w-50 mx-auto'>
            <h1 className="text-2xl my-5 text-secondary font-bold">Add Product Item</h1>
             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3 border'  placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-3 border'  placeholder='Available Quantity' {...register("number", { required: true, maxLength: 20 })} />
      <textarea className='mb-3 border' placeholder='Description' {...register("description")} />
      <input className='mb-3 border' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-3 border' placeholder='Minimum Quantity' type="number" {...register("Quantity")} />
      <input className='mb-3 border' placeholder='Photo URL' type="text" {...register("img")} />
      
      <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
    </form>
  
        </div>
    );
};

export default AddProduct;