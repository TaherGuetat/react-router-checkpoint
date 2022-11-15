import "./App.css";
import { MovieList } from "./Component/MovieList";
import { useState } from "react";
import { AddMovie } from "./Component/AddMovie";
import { MovieListHeading } from "./Component/MovieListHeading";
import { Filter } from "./Component/Filter(title,rate)";
import { MovieTrailer } from "./Component/MovieTrailer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [rateFilter, setRatefilter] = useState(0);
  const [titleFilter, setTitlefilter] = useState("");

  const filterTitle = (titleFilter) => {
    setTitlefilter(titleFilter);
  };
  const filterRate = (rateFilter) => {
    setRatefilter(rateFilter);
  };
  const [movieList, setMovieList] = useState([
    {
      title: "Aquaman",
      description:
        "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg",
      rating: 6.8,
      id: 0,
      trailer:"https://www.youtube.com/watch?v=WDkg3h8PCVU",
    },
    {
      title: "The white lotus",
      description:
        "Set in a tropical resort, it follows the exploits of various guests and employees over the span of a week.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BOWY1YjY1MWUtYWY5Yi00YTM4LTkyM2UtMDQ3NmFiYTkyYjlkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rating: 7.6,
      id: 1,
      trailer:"https://www.youtube.com/watch?v=TGLq7_MonZ4",
    },
  ]);
  const handleAdd = (newMovie) => {
    setMovieList([...movieList, { ...newMovie, id: Math.random() }]);
  };
 

  return (
    <div>
      <div className="heading">
        <MovieListHeading heading="T-FLIX" />
        <Filter
          filterTitle={filterTitle}
          filterRate={filterRate}
          rate={rateFilter}
        />
        <AddMovie handleAdd={handleAdd} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movieList={movieList.filter(
                (el) =>
                  el.title
                    .toLocaleLowerCase()
                    .includes(titleFilter.trim().toLocaleLowerCase()) &&
                  el.rating >= rateFilter
              )}
            />
          }
        ></Route>

        <Route path="/trailer/:id" element={<MovieTrailer />} />
      </Routes>
    </div>
  );
}

export default App;
