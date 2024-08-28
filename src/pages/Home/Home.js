import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import "../../components/Header/header.css";
import Banner from "../../components/Banner/Banner.js";
import Rowlist from "../../components/Rows/RowList/Rowlist.js";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
}

export default Home;
