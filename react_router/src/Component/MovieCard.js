import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export const MovieCard = ({ el }) => {
    return (
      <div className="movie">
        <img src={el.posterURL} width={"200px"} alt="" />
        <div className="movie-info">
          <h3>{el.title}</h3>
          <span>{el.rating}</span>
          <Link className="movie-over" to={'/trailer/' + el.id}>
            {/* <h2>Description</h2>
            <p>{el.description}</p> */}
            <Button color="primary" variant="contained">
              <h4>See details here</h4>
            </Button>
          </Link>
        </div>
      </div>
    );
  };