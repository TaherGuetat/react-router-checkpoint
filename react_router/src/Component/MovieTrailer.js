import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


export const MovieTrailer = () => {
  const [video, setVideo] = useState("aquaman");
  const [videoURL, setVideoURL] = useState("https://youtube/");

  const handleSearch = () => {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  };




  return (
    <div>
      <div className="search-box">
        <label>Search for any movies/shows: </label>
        <input
          type="text"
          onChange={(e) => {
            setVideo(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      <ReactPlayer url={videoURL} controls={true} />
    </div>
  
  );
};
