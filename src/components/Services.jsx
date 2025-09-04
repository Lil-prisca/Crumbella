import React from "react";
import "../styles/services.css";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import {
  FaBreadSlice,
  FaBirthdayCake,
  FaCartPlus,
  FaTruck,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaBreadSlice />,
      title: "Quality Products",
      description:
        "We use only the finest, freshest ingredients to bake breads, cakes, and cookies you can trust.",
    },
    {
      id: 2,
      icon: <FaBirthdayCake />,
      title: "Custom Orders",
      description:
        "From birthday cakes to wedding treats, we design and bake products tailored to your taste.",
    },
    {
      id: 3,
      icon: <FaCartPlus />,
      title: "Easy  Ordering",
      description:
        "Browse our menu, tell us how you want it customized , and place your order.",
    },
    {
      id: 4,
      icon: <FaTruck />,
      title: "Fast Home Delivery",
      description:
        "Freshly baked and carefully packed, your order arrives at your doorstep right on time.",
    },
  ];

  return (
    <section className="services">
      <div className="services-text">
        <p className="tag">// Our Services</p>
        <h1>What Do We Offer For You?</h1>
        <p className="services-texts">
          At Crumbella, we do more than bake. We create experiences—from
          everyday snacks to unforgettable celebration cakes—all made with love
          and delivered with care.
        </p>
        <div className="service-list">
          {services.map((s) => (
            <div key={s.id} className="service-item">
              <div className="heading">
                <div className="icon">{s.icon}</div>
                <h5 className="title">{s.title}</h5>
              </div>
              <h5 className="description">{s.description}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="services-images">
        <div className="under"></div>
        <img src={service1} alt="Baker preparing bread" className="img1" />
        <img src={service2} alt="Freshly baked cake" className="img2" />
      </div>
    </section>
  );
}
