import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car1 from "../assets/carousel-1.jpg";
import car2 from "../assets/carousel-2.jpg";
// import product1 from "../assets/product-1.jpg";
// import product2 from "../assets/product-2.jpg";
// import product3 from "../assets/product-3.jpg";
import "../index.css";

const images = [
  car1,
  car2,
  //  product1, product2, product3
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrow: false,
  };

  return (
    <div
      className="slider"
      style={{
        // marginTop: "60px",
        // marginLeft: "30px",
        // maxWidth: "1300px",
        width: "100%",
        // margin: "2rem auto",
      }}
    >
      <div className="hero-text">
        <p>// The best Bakery</p>
        <h1 style={{ color: "#5a2d82" }}>We bake with Passion</h1>
        <p>
         We create sweet experience. 
          <span style={{fontStyle: "italic",fontWeight: "bold",fontSize: "20px",color: "#5a2d82",}}>Sweet. soft. Crumbella.</span>
        </p>
        {/* <button className="read_more">Read More</button> */}
      </div>
      <div className="overlay"></div>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              // style={{ width: "100%", borderRadius: "3px" }}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                // borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
