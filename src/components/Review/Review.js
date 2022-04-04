import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {


    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('testimonials.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (

        <div className="w-90vh px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'">
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
           
              
           {
               reviews.map(review=><ReviewDetails 
                 review={review}
                 key={review.id}
                 
                 ></ReviewDetails>)
           }

     </div>

        </div>



    
    );
};

export default Review;