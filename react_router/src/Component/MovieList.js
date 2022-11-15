import { MovieCard } from "./MovieCard";
export const MovieList= ({movieList})=> {
    return(
        <div className="movie-container">
            {movieList.map(
                (el)=><MovieCard el={el} key={el.id} />
            )}
        </div>
    )
}
