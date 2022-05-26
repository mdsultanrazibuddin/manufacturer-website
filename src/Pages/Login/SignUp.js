import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import logo from '../../Images/google (1).png'

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile,updating,updateError] = useUpdateProfile(auth);
    

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if(error || gError || updateError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
      await  createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile ({displayName: data.name})
      console.log('done');
      navigate('/parts')
    }

    return (
        <div className='flex h-screen justify-center items-center mt-20'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-center font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                         type="text" 
                         placeholder="Type Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                        />
                        <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                               
                        </label>
                        
                       
                        </div>
                        <div class="form-control w-full max-w-xs">
                                <label class="label">
                                <span class="label-text">Email Address</span>
                                
                                </label>
                            <input
                            type="email" 
                            placeholder="Type Your Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}

                            />

                            <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        
                       
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        
                        {signInError}

                        <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
                        
                    </form>

                    <p><small>Already have an account ? <Link className='text-primary' to="/login">please login</Link></small></p>

                    <div class="divider">OR</div>
                    
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">
                    <img className="mr-2" src={logo} alt="" srcset="" />
                        Continue With Google</button>
                
                </div>
            </div>
        </div>
          


        

            
    );
    
};

export default SignUp;