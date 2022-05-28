import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';



const Review = () => {
   

    const { data: reviews, isLoading } = useQuery('review', () =>
    fetch('https://mysterious-hamlet-70060.herokuapp.com/review', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
       
    })
        
     .then(res => res.json()));
   


    


   
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review =>

                                <tr>
                                    <td>{review.name}</td>
                                    <td>{review.description}</td>
                                    <td>{review.rating}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};
export default Review;