import React from 'react';
import { toast } from 'react-toastify';

const ConfirmModal = ({deletingProduct, refetch, setDeletingProduct}) => {
    const {name, email} = deletingProduct;
    const handleDelete = () => {
        fetch(`https://mysterious-hamlet-70060.herokuapp.com/part/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-primary">Are you sure you want to delete  ${name}!</h3>
                    
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-xs btn-secondary">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmModal;