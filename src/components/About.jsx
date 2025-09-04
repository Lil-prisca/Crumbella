import React from "react";
import "../styles/about.css";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-images">
        <div className="under"></div>
        <img src={about1} alt="Bakery item 1" className="about-img first" />
        <img src={about2} alt="Bakery item 2" className="about-img second" />
      </div>
      <div className="about-text">
        <p className="tag">// About Us</p>
        <h1>We Bake Every Item From The Core Of Our Hearts</h1>
        <p>
          At Crumbella we believe in more than just desserts. we create sweet
          experience. Our name blends crumbs with soft elegant touch that
          reflects our signature style :
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#5a2d82",
            }}
          >
            Sweet. soft. Crumbella.
          </span>{" "}
        </p>
        <p>
          From Beautifully crafted{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "15px",
              color: "#5a2d82",
            }}
          >
            Cakes and fluffy pasteries to foil Cakes, parfaits, cookies, zobo,
            and more.{" "}
          </span>{" "}
          We serve everday indulgence with homemade heart. Every order is made
          with care, creativity and a sprinkle of love.
        </p>
        <ul className="about-list">
          <li>✔ Quality Products</li>
          <li>✔ Custom Products</li>
          <li>✔ Online Order</li>
          <li>✔ Home Delivery</li>
        </ul>
        <button className="btn">Read More</button>
      </div>
    </section>
  );
}
