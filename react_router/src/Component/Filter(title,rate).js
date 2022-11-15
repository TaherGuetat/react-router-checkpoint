import StarRatingComponent from "react-star-rating-controlled-component";

export function Filter({ filterTitle, filterRate, rate }) {
  const handleClick = (value) => {
    filterRate(value);
  };
  return (
    <div className="filter">
      <input
        placeholder="Search by title"
        onChange={(e) => filterTitle(e.target.value)}
      />
      <button type="submit" style={{width:'100px',marginLeft:'25%',marginTop:'5px',marginBottom:'5px'}}>Search</button>

      <StarRatingComponent 
      className='star'
        starHoverColor="yellow"
        value={rate}
        starRatedColor="yellow"
        starCount={10}
        name="rate"
        onStarClick={handleClick}
      />
    </div>
  );
}