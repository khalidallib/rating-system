import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [rating, setRating] = useState(0);

  const ratingWords = [ "", "Poor","Fair", "Good", "Very Good", "Excellent"];

  return (
    <div className="starList">
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <Star
          key={starNumber}
          selected={starNumber <= rating}
          onClick={() => setRating(starNumber)}
        />
      ))}

      <h2>{ratingWords[rating]}</h2>
    </div>
  );
}

export default StarRating;