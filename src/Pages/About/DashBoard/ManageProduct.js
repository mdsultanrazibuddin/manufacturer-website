import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ConfirmModal from './ConfirmModal';




import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl my-5 font-bold text-secondary">Manage Doctors: {parts.length}</h2>
            <div class="overflow-x-auto my-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ProductRow
                                key={part._key}
                                part={part}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <ConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></ConfirmModal>}
        </div>
    );
};

export default ManageProduct;