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
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna.
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna.
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
