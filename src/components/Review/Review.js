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
        <div>
              <h1>  this is revirew</h1>
              
              {
                  reviews.map(review=><ReviewDetails 
                    review={review}
                    key={review.id}
                    
                    ></ReviewDetails>)
              }

        </div>
    );
};

export default Review;