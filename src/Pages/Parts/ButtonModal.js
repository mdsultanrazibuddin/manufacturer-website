import React from 'react';

import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


const ButtonModal = ({product, setProduct}) => {
    const {_id,name} = product;
    
    const [user, loading] = useAuthState(auth);
    
    if(loading){
        return <Loading/>
    }

    const handleBooking = event =>{
        event.preventDefault();
       
       
       
        const booking = {
            productId: _id,
            product: name,
            
            
            client: user.email,
            clientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Appointment is set`)
                }
                else{
                    toast.error(`Already have and appointment`)
                }
                console.log(data);
                setProduct(null);
            });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg text-secondary"> {name}</h3>
                        
                        <form onSubmit={ handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                          
                           
                           <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                           <input type="text" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                           <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                           <input type="submit" value="Submit" class=" btn btn-secondary w-full max-w-xs" />
                        </form>
                        
                    </div>
                    </div>
                   
        </div>
    );
};

export default ButtonModal;