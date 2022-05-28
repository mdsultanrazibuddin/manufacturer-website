import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import User from './User';




const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mysterious-hamlet-70060.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl my-5 text-secondary font-bold">Total Users:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user, index)=><User
                           key={user._id}
                           index ={index}
                           user={user}
                           refetch={refetch}
                           ></User>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;