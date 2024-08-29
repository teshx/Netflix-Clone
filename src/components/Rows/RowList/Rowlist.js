import React from "react";
import Row from "../Row/Row.js";
import requests from "../../../Utils/requests.js";
function Rowlist() {
  return (
    <>
      <Row title="NETFLIX orgionals" fechUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fechUrl={requests.fetchTrending}  />
      <Row title="Top Reated" fechUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movie" fechUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fechUrl={requests.fetchComedyMovies} />
      <Row title="Hoorer Movie" fechUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Homance Movie" fechUrl={requests.fetchRomanceMovies} /> */}
      <Row title=" Documentary Movie" fechUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default Rowlist;
