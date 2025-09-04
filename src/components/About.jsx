import React from "react";
import "../styles/about.css";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-images">
        <div className="under"></div>
        <img src={about1} alt="Freshly baked bread" className="about-img first" />
        <img src={about2} alt="Decorated cake" className="about-img second" />
      </div>

      <div className="about-text">
        <p className="tag">// About Us</p>
        <h1>We Bake Every Treat From the Heart</h1>

        <p>
          At <strong>Crumbella</strong>, we believe in more than just desserts —
          we create <em>sweet experiences</em>. Our name blends crumbs with a
          touch of elegance, reflecting our signature style:
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#5a2d82",
            }}>
           
            Sweet. Soft. Crumbella.
          </span>
        </p>

        <p>
          From beautifully crafted{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "15px",
              color: "#5a2d82",
            }}
          >
            cakes and fluffy pastries to foil cakes, parfaits, cookies, zobo,
            and more,
          </span>{" "}
          we serve everyday indulgence with a homemade heart. Every order is made
          with care, creativity, and a sprinkle of love.
        </p>

        <ul className="about-list">
          <li>✔ Quality Ingredients</li>
          <li>✔ Custom-Made Products</li>
          <li>✔ Easy Online Ordering</li>
          <li>✔ Fast Home Delivery</li>
        </ul>

        <button className="btn">Read More</button>
      </div>
    </section>
  );
}
