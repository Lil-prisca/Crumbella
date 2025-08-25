import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Products from "../components/Products";
import Services from "../components/Services";
import Footer from "../components/Footer";
import BacktoTop from "../components/BacktoTop";

const Home = () => (
  <>
    {/* <h2>Home Page</h2> */}
    <Carousel />
    <About />
    <Products />
    <Services />
    <Footer />
    <BacktoTop />
  </>
);

export default Home;
