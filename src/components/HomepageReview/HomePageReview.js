import React from 'react';

const HomePageReview = (props) => {

    const { picture, name, review, ratings } = props.review
    return (
        <div>
            <div className='shadow-lg rounded-2xl bg-white h-52 p-4'>
                <div className="flex gap-4 ">
                    <div className="flex-shrink-0 ">
                        <img className='h-16 w-16 mx-auto rounded-full object-cover' src={picture} alt="profile" />
                    </div>
                    <div className="flex flex-col justify-end">
                        <p className='text-gray-500 text-xs'>{review}</p>
                        <p className='text-gray-600  mt-1 text-sm' >Ratings: {ratings}/5</p>
                        <p className='text-gray-600 text-medium'>{name}</p>
                    </div>
                </div>


            </div>
          
        </div>
    );
};

export default HomePageReview;