import React from 'react';

const ReviewDetails = (props) => {
    const {picture,name,review}=props.review
    // console.log(props);

    return (
        <div>
                this is details{name}
        </div>
    );
};

export default ReviewDetails;