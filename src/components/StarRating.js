import Star from "./Star";
function StarRating() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <Star key={starNumber} />
      ))}
      <h2>Select a rating</h2>
    </div>
  );
}

export default StarRating;