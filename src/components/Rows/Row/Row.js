import React, { useEffect, useState } from "react";
import axios from "../../../Utils/axios.js";
import requests from "../../../Utils/requests.js";
import "./row.css";
import YouTube from "@mui/icons-material/YouTube.js";
import movieTrailelr from "movie-trailer";

function Row({ title, fechUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerurl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    try {
      async function fechData() {
        const request = await axios.get(fechUrl);
        setMovies(request.data.results);
        return requests;
      }
      fechData();
    } catch (error) {
      console.log(error);
    }
  }, [fechUrl]);
  console.log(movies);

 const opts = {
   height: "300",
   width: "100%",
   playerVars: {
     autoplay: 1,
   },
 };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerurl("");
    } else {
      movieTrailelr(movie?.title || movie?.name || movie?.origional_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerurl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster  ${isLargeRow && "row__posterlarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <div style={{ padding: "48px" }}>
        {trailerUrl && (
          <iframe
            width={opts.width}
            height={opts.height}
            src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Row;
