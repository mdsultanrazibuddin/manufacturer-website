import React from 'react';

import useProduct from '../../../Hooks/useProduct';

const ManageProduct = () => {
    const [product, setProduct] = useProduct();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
            const url = `http://localhost:5000/part/${id}`
    fetch( url , {method : 'DELETE'})
    .then (res =>res.json())
    .then (data =>{
        console.log(data);
        const remaining = product.filter(product => product._id !== id);
        setProduct(remaining)
    })
        }
    }
    return (
        <div className='w-50 mx-auto'>

            <h1 className="text-2xl my-5 text-secondary font-bold">All Products</h1>
           

            <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Product Name</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
    {
                product.map((product, index) => 
                    <tr>
                    <th>{index + 1}</th>
                    <td>{product.name} </td>
                    
                    <td>
                    <button class="btn btn-xs" onClick={() => handleDelete(product._id) }>Delete</button>
                    </td>
                  </tr>)
                
                
            }

      
     
      
    </tbody>
  </table>
</div>
            
            </div>
           
        </div>
    );
};

export default ManageProduct;