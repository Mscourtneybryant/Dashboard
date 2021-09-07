import '../src/AvgRatings.css';
import React from 'react';

const AvgRatings = (props) => {
  return (
    <div className='average'>
      <h3>Average Rating</h3>
      {props.AvgRating}
    </div>
  );
};

export default AvgRatings;