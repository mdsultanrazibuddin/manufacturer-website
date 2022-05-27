import React from 'react';


const ProductRow = ({ part, index, refetch, setDeletingProduct }) => {
    const { name } = part;
    
    return (
        <tr>
            <th>{index + 1}</th>
            
            <td>{name}</td>
            
            <td>
                <label onClick={() => setDeletingProduct(part)} for="delete-confirm-modal" class="btn btn-xs btn-secondary">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;