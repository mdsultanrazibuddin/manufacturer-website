import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

// const MyReviews = () => {
//         const color = {
//             orange: '#FFBA5A',
//             gray: '#a9a9a9'
//         }
    const MyReviews = () => {
        const [value] = useState([]) 
        const { register, formState: { errors }, handleSubmit, reset } = useForm();
        const [user, loading] = useAuthState(auth);
       
    
    
       
        const handleReview = data => {
    
    
            const product = { ...data, rating: value };
            
    
            fetch('https://mysterious-hamlet-70060.herokuapp.com/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(inserted => {
                    console.log('inserted : ', inserted);
                    if (inserted.insertedId) {
                        alert('review added successfully');
                        reset();
                    } else {
                        alert("Failed to add the Review");
                    }
                })
        }
        if (loading) {
            return <Loading></Loading>
        }
    
    return (
        
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-col-reverse">

                <div class="card   max-w-sm shadow-2xl bg-base-500">

                    <div class="card-body w-80">
                            <div>
                                <h2 className='text-2xl text-center'>Add a Review</h2>
                            </div>
                        <form onSubmit={handleSubmit(handleReview)}>

                            <div class="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    value={user?.email}
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a vilid Email'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <textarea
                                    type="text"
                                   
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Product description is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <textarea
                                    type="number"
                                   
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Rating is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.number?.type === 'required' && <span class="label-text-alt text-red-500">{errors.number.message}</span>}
                                </label>
                            </div>
                            <input className='btn w-full max-w-xs text-white my-5' type="submit" value="Add" />


                           

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyReviews;