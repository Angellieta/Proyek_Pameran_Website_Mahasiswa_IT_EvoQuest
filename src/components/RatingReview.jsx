import { useState } from 'react';
import PropTypes from 'prop-types';

function RatingReview({ onRate, creationId }) {
  const [rating, setRating] = useState(0);

  const handleRating = (star) => {
    setRating(star);
    if (onRate) {
      onRate(creationId, star); // Memanggil callback dengan id dan rating
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="star"
          style={{
            cursor: 'pointer',
            color: rating >= star ? 'gold' : 'gray',
            fontSize: '35px',
          }}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

RatingReview.propTypes = {
  creationId: PropTypes.number.isRequired, // creationId adalah number dan wajib diisi
  onRate: PropTypes.func.isRequired,       // onRate adalah fungsi dan wajib diisi
};

export default RatingReview;