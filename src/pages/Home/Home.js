import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import '../../components/Header/header.css'
import Banner from "../../components/Banner/Banner.js";
function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Footer />
    </>
  );
}

export default Home;
