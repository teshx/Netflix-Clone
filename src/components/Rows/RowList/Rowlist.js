import React from "react";
import Row from "../Row/Row.js";
import requests from "../../../Utils/requests.js";
function Rowlist() {
  return (
    <>
      <Row title="Trending Noe" fechUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top reated" fechUrl={requests.fetchTopRatedMovies} />
      <Row title="action Movie" fechUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fechUrl={requests.fetchComedyMovies} />
      <Row title="Hoorer Movie" fechUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Homance Movie" fechUrl={requests.fetchRomanceMovies} /> */}
      <Row title=" Documentary ovie" fechUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default Rowlist;
