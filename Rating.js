import '../src/ratings.css';
import React from 'react';

const Reviews = (props) => {
  return (
    <div className='ratings'>
      <h3>Ratings</h3>
      {props.rating}
    </div>
  );
};

export default Reviews;