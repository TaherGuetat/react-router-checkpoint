import { useParams } from "react-router-dom";

export const MovieTrailer = ({ movieList }) => {
  const { id } = useParams();

  const movie = movieList.find((el) => el.id == id);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
